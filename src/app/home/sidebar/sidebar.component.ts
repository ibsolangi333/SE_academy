import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // sidebar all propertiees
  togglemargin="-230px";
  
  // toogler function
  toggler(){
    if(this.togglemargin=="-230px"){
      this.togglemargin="0px"
    }
    else{
      this.togglemargin="-230px"
    }
  };

  dashboardfun(){
    this.togglemargin="-230px"
  };
  userprofilefun(){
    this.togglemargin="-230px"
  };
  teachersfun(){
    this.togglemargin="-230px"
  };
  coursesfun(){
    this.togglemargin="-230px"
  };
  walletfun(){
    this.togglemargin="-230px"
  };
  uploadfun(){
    this.togglemargin="-230px"
  };
  boardfun(){
    this.togglemargin="-230px"
  };
  
}
