import { Component,  OnInit,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teachersform!: FormGroup;
  submitted = false;
  teacharry:any=[];
  add:string="Add";

  constructor(private teachersformbuild:FormBuilder) { }

  // reactive form code
  ngOnInit(): void {
    this.teachersform = this.teachersformbuild.group({
      firstname:['',Validators.required],      
      lastname:['',Validators.required],      
      email:['',[
        Validators.required,
        Validators.email
      ]],  
      gender:['',Validators.required],  
      country:['',Validators.required],  
      city:['',Validators.required],
      postcode:['',[
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
        Validators.pattern('[0-9]+$')
      ]],   
      course:['',Validators.required],
      sallery:['',[
        Validators.required,
        Validators.pattern('[0-9]+$')
      ]],
    })
  }


  // onsubmit function
  teachersformsubmit(){
    this.submitted = true
    
    var obj = {
      firstnamebind:this.teachersform.controls['firstname'].value,
      lastnamebind:this.teachersform.controls['lastname'].value,
      emailbind:this.teachersform.controls['email'].value,
      genderbind:this.teachersform.controls['gender'].value,
      countrybind:this.teachersform.controls['country'].value,
      citybind:this.teachersform.controls['city'].value,
      postcodebind:this.teachersform.controls['postcode'].value,
      coursebind:this.teachersform.controls['course'].value,
      sallerybind:this.teachersform.controls['sallery'].value,
    }

    if(this.teachersform.invalid){
      return
    }else{
      this.teacharry.push(obj)
      this.teachersform.reset();
      this.submitted = false
      this.add="Add"
    };
  };
 
  // Delete function
  deletebtn(item:any){
    alert('are you sure delete item')
    this.teacharry.splice(item, 1)
  };

  // Edit function
  editbtn(teachvar:any, item:any){
    this.teacharry.id = teachvar.id
    this.teachersform.controls['firstname'].setValue(teachvar.firstnamebind)
    this.teachersform.controls['lastname'].setValue(teachvar.lastnamebind)
    this.teachersform.controls['email'].setValue(teachvar.emailbind)
    this.teachersform.controls['gender'].setValue(teachvar.genderbind)
    this.teachersform.controls['country'].setValue(teachvar.countrybind)
    this.teachersform.controls['city'].setValue(teachvar.citybind)
    this.teachersform.controls['postcode'].setValue(teachvar.postcodebind)
    this.teachersform.controls['course'].setValue(teachvar.coursebind)
    this.teachersform.controls['sallery'].setValue(teachvar.sallerybind)
    this.teacharry.splice(item, 1)
    this.add="Update"
  };

}
