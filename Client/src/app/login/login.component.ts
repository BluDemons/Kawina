import { Component, OnInit } from '@angular/core';
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


