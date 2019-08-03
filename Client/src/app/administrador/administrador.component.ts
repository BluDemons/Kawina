import { Component, OnInit, ɵConsole } from '@angular/core';
import { Patrones } from '../modelos/patrones';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Binary } from 'selenium-webdriver/firefox';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  response: any[]
  agregar: Patrones[]
  table_header: any
  //pots
  id:number
  CI:string
  nombre:string
  precio:number
  descripcion:string
  urlArchivo:string
  imagen:Binary
  idServicio:number
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.table_header = [
      {
        id: 'N°',
        nombre: 'nombre',
        precio: 'precio',
        descripcion: 'descripcion',
        urlArchivo: 'urlArchivo',
        imagen: 'imagen',
        idServicio: 'idServicio'
      }
    ]
    this.getData()
    this.agregar = []
  }
  getData = () => {
    let tabla = 'patronajes'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}`)
      .subscribe(data => {
        this.response = data.data
        console.log(this.response)
      })
  }
eliminar=(id)=>{
  let tabla='patronajes'
  this.http.delete(environment.API_URL+ `borrar?tabla=${tabla}&&id=${id}`)
  .subscribe(data=>{

  })
  window.location.reload()
}

onUploadFinish(event) {
  console.log(event);
}
postDataTable = () => {
  if(this.imagen !=null){
  let tabla = 'patronajes'
  let registro = { tabla: tabla, registro: [{ id: this.id, nombre: this.nombre, precio: this.precio, descripcion: this.descripcion, urlArchivo: this.urlArchivo, imagen: this.imagen, idServicio: this.idServicio }] }
  this.http.post(environment.API_URL + 'insertar', registro)
    .subscribe(data => {
      this.response = Array.of(data)
    })
  }
}
}
