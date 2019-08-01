import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
// import Swal from 'sweetalert2';
=======
//import Swal from 'sweetalert2';
>>>>>>> c5b4e62880f8f869731e2a03356efc55c0c3e6b1
import { Router } from '@angular/router';
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
  constructor(private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      CI: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      telefonoConvencional: ['', [Validators.required]],
      telefonoCelular: ['', Validators.required],
      direccionDomiciliaria: ['', Validators.required],
      correoElectronico: ['', Validators.required],
      contraseña: ['', Validators.required],
  });
  }

<<<<<<< HEAD
  // btnClickHome = function ()
=======
  // btnClickHome = function () {
>>>>>>> c5b4e62880f8f869731e2a03356efc55c0c3e6b1
    
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


