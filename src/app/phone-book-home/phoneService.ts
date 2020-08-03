import { Contact } from './contact';
export class PhoneService{
    contacts: Contact[];
  

    constructor()
    {
        this.contacts=[];

        var contact1,contact2,contact3,contact4;

        contact1=new Contact();
        contact1.firstname="Apoorv";
        contact1.surname="Kumar";
        contact1.number=9823489127;

        contact2=new Contact();
        contact2.firstname="Anshika";
        contact2.surname="Singh";
        contact2.number=9988753897;

        contact3=new Contact();
        contact3.firstname="Shivam";
        contact3.surname="Gupta";
        contact3.number=9825432177;

        contact4=new Contact();
        contact4.firstname="Rashi"
        contact4.surname="Asthana";
        contact4.number=7886655094;

        this.contacts.push(contact1);
        this.contacts.push(contact2);
        this.contacts.push(contact3);
        this.contacts.push(contact4);

    }
    getContacts():Contact[]
    {
       // console.log("hiiii");
        return this.contacts;
    }

    addContact(c:Contact)
    {
        this.contacts.push(c);
    }

    

    deleteContact(firstname,surname,number):Contact[]
{
  for(let index=0;index<this.contacts.length;index++)
  {
    if(firstname==this.contacts[index].firstname&& number==this.contacts[index].number)
    {
      this.contacts.splice(index,1);
    }
  }
  return this.contacts;
}








}