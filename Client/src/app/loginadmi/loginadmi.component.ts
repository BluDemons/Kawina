import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { login2 } from '../modelos/login2'
import { login3 } from '../modelos/login3'
import { login } from '../modelos/admi'
@Component({
  selector: 'app-loginadmi',
  templateUrl: './loginadmi.component.html',
  styleUrls: ['./loginadmi.component.scss']
})
export class LoginadmiComponent implements OnInit {
  response: any[]
  login2:login2[]
  login3:login3[]
  login:any
  respuesta2: any[]
  respuesta1: any[]
  constructor(private http: HttpClient,private router:Router) { }
  recuperardato:[]
  ngOnInit() {
    this.getData()
    this.login2=[]
    this.login3=[]
    this.login = [
      {
        usuario:'',
        contrasena:''
    }
  ]
    

  }

  getData=()=>{
    let tabla = 'admi'
    this.http.get<any>(environment.API_URL +`leer?tabla=${tabla}`)
        .subscribe(data => {
        this.response = data.data
        this.response.forEach(element=>{
        this.login2.push(element.usuario)
        this.login3.push(element.contrasena)
      })
      console.log(this.login2[0]) 
      console.log(this.login3[0])
    })
}

datos=(recuperardato) =>{
  this.respuesta2=recuperardato
  this.respuesta2.forEach(element=>{
  this.login.push(element)
})
  console.log(this.login.usuario)
  console.log(this.login.contrasena)
 }
 
metodo=()=>{ 
  if(this.login.usuario==this.login2[0]&&this.login.contrasena==this.login3[0]){
  this.router.navigate(['dashboard'])
}else{
  window.location.reload()
}

}
  
}





