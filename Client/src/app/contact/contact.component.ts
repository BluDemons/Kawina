import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  Form: FormGroup
  registroUsuariosForm: FormGroup
  name:string
  lastname: string
  mensaje:string
  email: string

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.crearForm();
  }
  crearForm(){
    this.Form = this.formBuilder.group({
      name: ['',[Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,10}')]],
      lastname: ['',[Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,10}')]],
      mensaje:['',[Validators.required,Validators.minLength(5),Validators.maxLength(500)]],
      email: ['', [Validators.required, Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')]],
    });
  }

  validaForm(){
    if(this.Form.valid){
      this.name = JSON.stringify(console.log(this.Form.controls['name'].value))
      this.lastname = JSON.stringify(console.log(this.Form.controls['lastname'].value))  
      this.mensaje = JSON.stringify(console.log(this.Form.controls['mensaje'].value))            
      this.email = JSON.stringify(console.log(this.Form.controls['email'].value))
      alert(['Datos Enviados'])
    }else{
      this.name = JSON.stringify(console.log(this.Form.controls['name'].errors))
      this.lastname = JSON.stringify(console.log(this.Form.controls['lastname'].errors))
      this.mensaje = JSON.stringify(console.log(this.Form.controls['mensaje'].errors))
      this.email = JSON.stringify(console.log(this.Form.controls['email'].errors))
      }
    }

  public getError(controlName: string): string {
    let error = '';
    const control = this.Form.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
