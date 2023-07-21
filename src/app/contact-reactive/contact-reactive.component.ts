import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.scss']
})
export class ContactReactiveComponent implements OnInit {
  contactForm!:FormGroup;
  name!:string;
  
  constructor(private readonly fb: FormBuilder, private readonly root:ActivatedRoute){}
  
  ngOnInit():void{
    this.root.queryParams.subscribe((params:Params)=>{
        this.name=params['name'];
      });
    this.contactForm=this.initForm();
  
}

onPathValue():void{
  
}


  onSubmit():void{
    console.log('Form ->');
  }
 initForm():FormGroup{
   return this.fb.group({
    name:['',[Validators.required, Validators.minLength(10)]],
    checkAdult:['',[Validators.required]],
    departament:['',],
    comments:['',[Validators.required]],
   })
 }
}
