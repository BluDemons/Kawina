import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Patrones } from '../modelos/patrones';
import { element } from 'protractor';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  response: any[]
  agregar:Patrones[]
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getData()
    this.agregar = []
  } 
  getData=()=>{
    let tabla = 'patronajes'
    this.http.get<any>(environment.API_URL +`leer?tabla=${tabla}`)
        .subscribe(data => {
            this.response = data.data
            console.log(this.response)
        })
  }
  // carrito(id){
  //   this.response.forEach(element=>{
  //     if(element.id==id){
  //       this.agregar.push(element.imagen);
  //     }
  //   });
  // }

  carrito(id){
    let data
    this.response.forEach(element =>{
      if (element.id == id){
        console.log(element);
        this.agregar.push(element);
        data = this.agregar
        sessionStorage.setItem('Kawina-Patronaje', data)
        this.router.navigate(['/carrito'])
        console.log(this.agregar)
      }
    })
  }


}