import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Login } from '../modelos/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
// declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  response: any[]
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  agregar: Login[]
  //post
  id: number
  CI: string
  nombres: string
  apellidos: string
  telefonoCelular: string
  direccionDomiciliaria: string
  correoElectronico: string
  contrasena: string


  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  public isError = false;
  ngOnInit() {
    this.agregar = [],
      this.registerForm = this.formBuilder.group({
        CI:[Validators.required, Validators.pattern('([0|1|2]{1})([0-9]{9})')],
        nombres:[Validators.required, Validators.pattern('[A-Za-z\u00f1]{3,30}')],
        apellidos:[Validators.required, Validators.pattern('[A-Za-z\u00f1]{3,30}')],
        telefonoCelular:  [Validators.required, Validators.pattern('([09|08|06]{1})([0-9]{8,8})')],
        direccionDomiciliaria: [Validators.required],
        correoElectronico: [Validators.required, Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')],
    }); 
  }
  postDataTable=()=> {
    if((this.registerForm.valid)==true){
    let tabla = 'persona'
    let registros = { tabla: tabla, registro: [{ id: this.id, nombres: this.nombres, apellidos: this.apellidos, CI: this.CI, telefonoCelular: this.telefonoCelular, direccionDomiciliaria: this.direccionDomiciliaria, correoElectronico: this.correoElectronico }] }
    this.http.post(environment.API_URL + 'insertar', registros)
      .subscribe(data => {
        // this.response = Array.of(data)
        Swal.fire('datos ingresados')
        this.router.navigate(['dashboard'])
      })
    }
}
}

