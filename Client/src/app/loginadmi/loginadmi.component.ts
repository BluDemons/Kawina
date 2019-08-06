import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { login2 } from '../modelos/login2'
import { login3 } from '../modelos/login3'
@Component({
  selector: 'app-loginadmi',
  templateUrl: './loginadmi.component.html',
  styleUrls: ['./loginadmi.component.scss']
})
export class LoginadmiComponent implements OnInit {
  response: any[]
  response1: any[]

  login2: login2[]
  login3: login3[]
  login: any
  respuesta2: any[]
  respuesta1: any[]
  //pots patronajes-servicios
  usuario1: string
  contrasena1: string
  constructor(private http: HttpClient, private router: Router) { }
  recuperardato: []
  ngOnInit() {
    this.getData()
    this.login2 = []
    this.login3 = []
    this.login = [
      {
        usuario: '',
        contrasena: ''
      }
    ]


  }
  post = () => {
    let tabla = 'admi'
    let registros = { tabla: tabla, registro: [{ usuario: this.usuario1, contrasena: this.contrasena1 }] }
    this.http.post(environment.API_URL + 'insertar', registros)
      .subscribe(data => {
        this.response1 = Array.of(data)
      })
    window.location.reload()
  }

  getData = () => {
    let tabla = 'admi'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}`)
      .subscribe(data => {
        this.response = data.data
        this.response.forEach(element => {
          this.login2.push(element.usuario)
          this.login3.push(element.contrasena)
        })
        console.log(this.login2[0])
        console.log(this.login3[0])
      })
  }

  datos = (recuperardato) => {
    this.respuesta2 = recuperardato
    this.respuesta2.forEach(element => {
      this.login.push(element)
    })
    console.log(this.login.usuario)
    console.log(this.login.contrasena)
  }

  metodo = () => {
    if (this.login.usuario == this.login2 && this.login.contrasena == this.login3) {
      this.router.navigate(['admin'])
    } else {
      window.location.reload()
    }

  }


}





