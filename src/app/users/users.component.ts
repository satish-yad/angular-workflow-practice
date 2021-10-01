import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // @Input()  myName;
  @Output() parentComponent : EventEmitter<any> =new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    //console.warn(this.myName.name);
    // this.parentComponent.emit("hello")
  }
  sendData(){
    let item= {name:"satish", age:32};
    this.parentComponent.emit(item);
  }

}
