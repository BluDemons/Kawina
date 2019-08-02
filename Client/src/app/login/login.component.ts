import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Login } from '../modelos/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    id:number
    CI:string
    nombres:string
    apellidos:string
    telefonoCelular:string
    direccionDomiciliaria:string
    correoElectronico:string
    contrasena:string
    usuario:string

  
  constructor(private formBuilder: FormBuilder,private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.agregar = [],
    this.onLogin(),
    this.registerForm = this.formBuilder.group({
      usuario:['', [Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,30}')]],
      CI: ['', [Validators.required,Validators.pattern('^([0|1|2]{1})([0-9]{9})$')]],
      nombres: ['', [Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,30}')]],
      apellidos: ['', [Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,30}')]],
      telefonoCelular: ['', [Validators.required,Validators.pattern('^(((09)|(08)|(06)){1})([0-9]{8})$')]],
      direccionDomiciliaria: ['', [Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,30}')]],
      correoElectronico: ['',[Validators.required,Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')]],
      contrasena: ['', [Validators.required,Validators.pattern('[a-zA-Z0-9]{5,15}')]],
  });
  }
  validaLoginForm(){
    if(this.registerForm.valid){
      this.usuario=JSON.stringify(console.log(this.registerForm.controls))              
      this.CI = JSON.stringify(console.log(this.registerForm.controls))
      this.nombres =JSON.stringify(console.log(this.registerForm.controls))
      this.apellidos =JSON.stringify(console.log(this.registerForm.controls))
      this.telefonoCelular =JSON.stringify(console.log(this.registerForm.controls))
      this.direccionDomiciliaria =JSON.stringify(console.log(this.registerForm.controls))
      this.contrasena =JSON.stringify(console.log(this.registerForm.controls))
      this.correoElectronico =JSON.stringify(console.log(this.registerForm.controls))
    }else{
    //  alert(`Todos los campos Som obligatorios`)
    }
  }
  postDataTable=()=>{
    let tabla='persona'
    let registros={tabla:tabla,registro:[{id:this.id,nombres:this.nombres,apellidos:this.apellidos,CI:this.CI,telefonoCelular:this.telefonoCelular,direccionDomiciliaria:this.direccionDomiciliaria,correoElectronico:this.correoElectronico,contrasena:this.contrasena,usuario:this.usuario}]}
    this.http.post(environment.API_URL+'insertar', registros)
    .subscribe(data=>{
       this.response=Array.of(data)
      console.log(data)
    })
  } 

  onLogin = () => {
    let tabla = 'persona'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}&campo=usuario&campo=contrasena`)
      .subscribe(data => {
        this.response = data.data
        console.log(this.response)
      })
  }
  //   let validacionUser = $('#user').val();
  //   let validacionPass = $('#pass').val();

  //   if (validacionUser === '' || validacionPass === '') {
  //     const Toast = Swal.mixin({
  //       toast: true,
  //       position: 'top-end',
  //       showConfirmButton: false,
  //       timer: 3000
  //     });

  //     Toast.fire({
  //       type: 'error',
  //       title: 'Es necesario ingresar Usuario y Contraseña'
  //     })
  //   } else {
  //     this.router.navigateByUrl('/dashboard');

  //   }
  // };
}


