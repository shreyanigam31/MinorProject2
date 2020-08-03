import { Component, OnInit } from '@angular/core';
import {PhoneService} from './phoneService';
import {Contact} from './contact';
import {from} from 'rxjs';

import {FormGroup, FormControl,Validators} from '@angular/forms';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-phone-book-home',
  templateUrl: './phone-book-home.component.html',
  styleUrls: ['./phone-book-home.component.css']
})
export class PhoneBookHomeComponent implements OnInit {

  contact:Contact;
  contacts:Contact[];
  FindContact:Contact[];

  contactAdd:FormGroup;
  contactSearch:FormGroup;

  contactAddFlag:boolean=false;
  contactUpdateFlag:boolean=false;
  contactSearchFlag:boolean=false;
  
  constructor(private sev: PhoneService) 
    {
      
    this.contact=new Contact();
    this.contacts=sev.getContacts();

    this.contactAdd=new FormGroup({

    contactFirstName:new FormControl(null, Validators.required),
    contactSurName:new FormControl(null,Validators.required),
    contactNumber:new FormControl(null,[Validators.required,Validators.min(1000000000)])

    });
    
    this.contactSearch=new FormGroup(
      
      {

      search:new FormControl(null, Validators.required)
  
      });

  }

  ngOnInit(): void {
  }

get contactFirstName()
{
 return this.contactAdd.get('contactFirstName');
}

get contactSurName()
{
 return this.contactAdd.get('contactSurName');
}

get contactNumber()
{
  return this.contactAdd.get('contactNumber');
}

get search()
{
  return this.contactSearch.get('search');
}

displayContact()
{
if(this.contactAdd.valid)
{
this.sev.addContact(new Contact(this.contactFirstName.value, this.contactSurName.value,this.contactNumber.value));  
}
}

updateContactFromUser()
{
  if(this.contactAdd.valid)
  {
    this.updateContact(new Contact(this.contactFirstName.value,this.contactSurName.value,this.contactNumber.value));
  }
}

updateContact(obj:Contact):Contact[]
{
    for(let index =0; index<this.contacts.length; index++)
    {
        if(obj.firstname==this.contacts[index].firstname || obj.number==this.contacts[index].number)
        {
            this.contacts[index].firstname=obj.firstname;
            this.contacts[index].surname=obj.surname;
            this.contacts[index].number=obj.number;
            this.contactUpdateFlag=true;
            break;
        }
    }
    if(this.contactUpdateFlag==false)
    {
      this.sev.addContact(obj); 
    }
      return this.contacts;
}

deleteContactByUser(delfname,delsname,delnum)
{
   
   this.contacts=this.sev.deleteContact(delfname,delsname,delnum);
}

searchContact(){
  if(this.contactSearch.valid)
  {
  var re = new RegExp (this.search.value.toLocaleLowerCase());
  this.FindContact = []; 
    for(let i=0;i<this.contacts.length;i++)
    {
      if(this.contacts[i].firstname.toLocaleLowerCase().match(re))
      {
         this.FindContact.push(this.contacts[i]);
         this.contactSearchFlag=true;
      }
    }
    if(this.contactSearchFlag==false)
    {
      alert("No such Contact Exists.");
    }
  }

}


sortContactNumber(){
  this.contacts.sort(function(a, b){
   if ( a.number < b.number ){
      return -1;
    }
    if ( a.number > b.number ){
      return 1;
    }
    return 0;})
  }

sortContactFirstName(){
    this.contacts.sort((a, b) => a.firstname.localeCompare(b.firstname));
 }

sortContactSurName(){
  this.contacts.sort((a, b) => a.surname.localeCompare(b.surname));
}




}
