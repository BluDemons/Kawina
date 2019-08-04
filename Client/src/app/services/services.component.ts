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
  constructor(private http: HttpClient) { }

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
  carrito(id){
    this.response.forEach(element=>{
      if(element.id==id){
        this.agregar.push(element.imagen);
      }
    });
  }

}