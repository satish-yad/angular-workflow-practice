import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-practice';
  // for get input box value
  // currentVal="";

  // getVal(val){
  //   console.warn(val)
  //   return this.currentVal=val;
  // }

  //Property binding Angular
  //name="bruce";
  disabledBox=true;
  enableBox(){
    this.disabledBox=false;
  }

//Condition in Angular
//  Make if condition
//  Make if else condition
//  Make condition with string
//  Make else if condition
//  Make condition with property binding

// show= false;
show="red";

//switch case
color="blue";

// for loop in Angular
//    wake a array
//    apply for loop with it with html table
//    Make a array with object
//    apply for loop with it with html table

data= ['anil', 'peter', 'sam', 'bruce']; //array

//array of object
data1=[
  {
    name:'peter',
    age:23
  },
  {
    name:'anil',
    age:32
  },
  {
    name: 'sam',
    age: 45
  },
  {
    name: 'bruce',
    age: 15
  }
]

//Make a simple form in Angular
//Import from module in module file
//make a form
//make function and get form value

getUserValue(value){
  console.warn(value);
}

//Make header footer in angular
  //Create Header componnt  - ng g c header
  //Create footer component
  //Use both component
  //Add Style

//Style binding in Angular
    //Difference between normal style and style bindig
    //Add dynamix style
    //Update Style with button click
    //Add condition Style

    dColor="Orange";
    err=true;

    updateColor(){
      this.dColor= "blue";
    }

//Add Bootstrap in Angular 10
      //Run command for install bootstrap
      //Try with some bootstrap example
      //we check and use code from official website ng-bootstrap
      //ng add @ng-bootstrap/ng-bootstrap


//Add Material in angular 10
    //what is Material UI
    //install material - ng add @angular/material
    //select some when while installing Material
    //Use some component with example
    //Such as slide and Button


//Pass Data to Child Component
    //Make Users Component
    //Make it child of app component
    //pass data to app to child component
    //Display data in child component
    //use for loop and result child component

    userData=[
      {
      name:'satish yadav',
      age: 25
    },
    {
      name:'peter yadav',
      age: 20
    },
    {
      name:'om thakur',
      age: 22
    },
    {
      name:'rishi kewta',
      age: 25
    },
  ]

  //some data child to parent component in angular
    //Make Users Component
    //Use it inside app component as child
    //pass data from child to parent with EventEmitter

    dataName= "";
   parentComponent(data){
     console.warn(data)
     this.dataName=data.name;
   }

   //What is pipe
    //Pipe with string, date, slice, currency, etc.
    pname="satish Yadav";
    ptoDay=Date.now();
    pstr= "Hello Angular";
    pVal=10;


  //Make a new angular project
    //Make 2 Component
    //Add routing in app-routing-module file
    //write code in HTML file for making Routing Link
    //Test Routing

    //If you did not select routing option on the project make time
    // ng generate module app-routing --flat --module=app


  //404 page not found in angular
    //what is 404 page
    //Make a component
    //Use it as 404 page with wildcard routing


//what is directive
   //example of default dirctive
   // how to make custom directive
   //run command ng g directive
   //Use it with html

//What is services
    //How to make service
    //how to use service

    name="";

    constructor(private user:UserDataService)
    {
      console.warn(this.user.getdata())
      let dataService=this.user.getdata();
      this.name=dataService.name;
    }




}
