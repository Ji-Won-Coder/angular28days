import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

interface  contactForm {
  "name": string,
  "checkAdult": boolean,
  "departament": string,
  "comments": string
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  id!:string;

  model={
    name: "",
    checkAdult: "",
    departament: "",
    comments: ""
  } 
  constructor(private readonly root:ActivatedRoute){

  }

  ngOnInit():void{
    this.root.params.subscribe((params:Params)=>{
      this.id= params['id'];
    });
  }
  
  onSubmit(from:NgForm):void{
    console.log('Form values', from);
  }

}
