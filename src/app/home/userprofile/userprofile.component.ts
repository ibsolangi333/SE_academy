import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userprofileform!: FormGroup;
  submitted = false

  constructor(private userformbuild: FormBuilder) { }

  ngOnInit() {
    this.userprofileform = this.userformbuild.group({
      username:['',Validators.required],
      email:['',
      [
        Validators.required,
        Validators.email
      ]],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      adress:['',Validators.required],
      city:['',Validators.required],
      country:['',Validators.required],
      postcode:['',
      [
        Validators.required,
        Validators.pattern('[0-9]+$'),
        Validators.maxLength(5),
        Validators.minLength(5)
      ]],
      about:['',Validators.required],
    })
  }

//  submit function
  onSubmit(){
    this.submitted = true

    if(this.userprofileform.invalid){
      return
    }
    else{
      this.userprofileform.reset()
      alert('proccess complete')
      this.submitted = false
    }
  };
  
} 