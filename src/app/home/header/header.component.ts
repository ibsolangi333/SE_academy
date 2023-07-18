import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // all properties
  displaysearch:boolean = false
  displaynotification="none"
  displayemail="none"
  displayuser="none"

  // saerch function
searchdisplay(){
  this.displaysearch=true
  this.displayemail="none"
  this.displayuser="none"
  this.displaynotification="none"
};
hidesearch(){
  this.displaysearch = false
};

// notification function
notifiction(){
  this.displaysearch = false
  this.displayemail="none"
  this.displayuser="none"

  if(this.displaynotification=="none"){
    this.displaynotification="block"
  }
  else{
    this.displaynotification="none"
  }
};

// email function
email(){
  this.displaysearch = false
  this.displayuser="none"
  this.displaynotification="none"

  if(this.displayemail=="none"){
    this.displayemail="block"
  }
  else{
    this.displayemail="none"
  }
};

// user function
user(){
  this.displaysearch = false
  this.displaynotification="none"
  this.displayemail="none"
  
  if(this.displayuser=="none"){
    this.displayuser="block"
  }
  else{
    this.displayuser="none"
  }
};

}

