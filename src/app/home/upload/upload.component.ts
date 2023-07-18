import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  uploadform!: FormGroup
  submitted = false
  
  constructor(private uploadformbuild: FormBuilder) { }

  ngOnInit(): void {
    this.uploadform = this.uploadformbuild.group({
      coursethumbnail:['',Validators.required],
      coursetitle:['',Validators.required],
      CourseDescroption:['',Validators.required],
      CoursePrice:['',Validators.required],
      CourseCategory:['',Validators.required],
      Coursesubcategory:['',Validators.required],
      Coursediffculty:['',Validators.required],
      Coursefeatures:['',Validators.required],
      Coursetags:['',Validators.required],
      learneraccessbiltiy:['',Validators.required],
      LessonVideo:['',Validators.required],
      videoThumbnail:['',Validators.required],
      lessonname:['',Validators.required],
      lessondescribtion:['',Validators.required],
    })
  }
  // submit button
  submitfun(){
    this.submitted = true
    if(this.uploadform.invalid){
      return
    }
    else{
      this.uploadform.reset()
      alert('Proccess Done')
      this.submitted = false
    }
  };
// camcel button
  cancelfun(){
    if(this.uploadform.valid){
      alert('are you sure cancel proccess')
    this.uploadform.reset()
    this.submitted = false
    }else{
    }
  };

}