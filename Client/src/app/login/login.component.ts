import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'sweetAlert';
  registerForm: FormGroup;
    loading = false;
    submitted = false;
    
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

  constructor(private formBuilder: FormBuilder,
    private router: Router,private http: HttpClient) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      CI: ['', [Validators.required,Validators.pattern('')]],
      nombres: ['', [Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,10}')]],
      apellidos: ['', [Validators.required]],
      telefonoConvencional: ['', [Validators.required]],
      telefonoCelular: ['', [Validators.required]],
      direccionDomiciliaria: ['', [Validators.required]],
      correoElectronico: ['',[Validators.required,Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')]],
      contrasena: ['', [Validators.required]],
  });
  }
  // postDataTable=()=>{
  //   let tabla='persona'
  //   let registros={tabla:tabla,registro:[{id:this.id,nombres:this.nombres,apellidos:this.apellidos,CI:this.CI,telefonoCelular:this.telefonoCelular,direccionDomiciliaria:this.direccionDomiciliaria,correoElectronico:this.correoElectronico,contrasena:this.contrasena,usuario:this.usuario}]}
  //   this.http.post(environment.API_URL+'insertar', registros)
  //   .subscribe(data=>{
  //     // this.postData=data
  //     console.log(data)
  //   })
  // }

 
    
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


