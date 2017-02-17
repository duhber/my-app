import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `<h1>
    Hello {{name}}</h1>
    <p><strong>Email: </strong>{{email}}</p>
    <p><strong>Address:</strong> {{address.street}} {{address.city}}, {{address.state}}</p>
    <button (click)="toggleHobbies()">{{showHobbies?"Hide Hobbies":"Show Hobbies"}}</button>
    <div *ngIf="showHobbies">
      <h3>Hobbies</h3>
      <ul>
        <li *ngFor="let hobby of hobbies">
          {{hobby}}
        </li>
      </ul>
      <form (submit)="addHobby(hobby.value)">
        <label>Add Hobby: </label><br />
        <input type="text" #hobby /><br />
      </form>
    </div>
    <hr>
    <h3> Edit User</h3>
    <form>
      <label>Name: </label>
      <input type="text" name="name" [(ngModel)] ="name" /><br />
      <label>Email: </label>
      <input type="text" name="email" [(ngModel)] ="email" /><br />
      <label>Street: </label>
      <input type="text" name="address.street" [(ngModel)] ="address.street" /><br />
      <label>City: </label>
      <input type="text" name="address.city" [(ngModel)] ="address.city" /><br />
      <label>State: </label>
      <input type="text" name="address.state" [(ngModel)] ="address.state" /><br />
    </form>
    `,
})
export class UserComponent  {
  name:string;
  email:string;
  address:address;
  hobbies: string[];
  showHobbies:boolean;
  constructor(){
    this.name = 'H C Lalduhbera';
    this.email = 'duhbera@gmail.com';
    this.address = {
      street: '24th C Cross',
      city: 'Bangalore',
      state:'Karnataka'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;
  }

  toggleHobbies(){
    console.log('show')
    if(this.showHobbies==true){
      this.showHobbies=false;
    }
    else{
      this.showHobbies=true;
    }
  }
  addHobby(hobby:string){
    console.log(hobby);
    this.hobbies.push(hobby);
    hobby='';
  }
}

interface address{
  street:string;
  city:string;
  state:string;
}
