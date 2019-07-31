import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  title = 'sweetAlert';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  btnClickHome = function () {
    
    let validacionUser = $('#user').val();
    let validacionPass = $('#pass').val();

    if (validacionUser === '' || validacionPass === '') {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000
      });

      Toast.fire({
        type: 'error',
        title: 'Es necesario ingresar Usuario y Contraseña'
      })
    } else {
      this.router.navigateByUrl('/dashboard');

    }
  };
}


