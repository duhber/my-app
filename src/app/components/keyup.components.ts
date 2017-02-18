import {Component} from '@angular/core';
@Component({
  selector: 'key-up',

  template: `
    <hr>
    <h2>Key up Component </h2>
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
    <p>{{key}}</p>

    <input #box (keyup.enter)="onEnter(box.value)" (blur)="update(box.value)">
    <p>{{boxValues}}</p>

  `,
})
export class KeyUpComponent{
  values:string;
  key:string;
  boxValues:string;
  onKey(event: any){
    console.log(event.target.value);
    if(event.target.value != ""){

      this.values = 'typing... ';
    }
    else{
      this.values ='';
    }
    this.key = event.key;

  }

  onEnter(value:string){
    this.boxValues=value;
  }
  update(value:string){
    this.boxValues=value;
  }


}
