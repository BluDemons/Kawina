import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  response: any[]
  table_header: any
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.table_header = [
      {
        id: 'id',
        nombre: 'nombre',
        descripcion: 'descripcion',
        precio: 'precio',
        imagen: 'imagen',
      }
    ]
  }

  getData=()=>{
    let tabla = 'productos'
    this.http.get<any>(environment.API_URL +`leer?tabla=${tabla}`)
        .subscribe(data => {
            this.response = data.data
            console.log(this.response)
        })
  }

}