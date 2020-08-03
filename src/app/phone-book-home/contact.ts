export class Contact{
    firstname: string;
    surname:string;
    number: number;
  constructor(firstname?:string,surname?:string,number?:number)
  {
     this.firstname=firstname;
     this.surname=surname;
     this.number=number;
  }
}