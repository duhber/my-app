import {Component} from '@angular/core';
@Component({
  selector:'loop-back',
  template:`
    <hr>
    <h2> Loop back </h2>
    <input #box (keyup)="0">
    <p>{{box.value}}</p>
  `,
})

export class LoopbackComponent{


}
