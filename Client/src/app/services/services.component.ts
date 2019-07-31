import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  response: any[]
  table_header: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.table_header = [
      {
        id: 'id',
        nombre: 'nombre',
        descripcion: 'precio',
        precio: 'descripcion',
        urlArchivo:'urlArchivo',
        imagen: 'imagen',
        idServicio:'idServicio',
      }
    ]
  } 
  getData=()=>{
    let tabla = 'patronajes'
    this.http.get<any>(environment.API_URL +`leer?tabla=${tabla}`)
        .subscribe(data => {
            this.response = data.data
            console.log(this.response)
        })
  }

}