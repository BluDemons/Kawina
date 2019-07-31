import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { element } from 'protractor';
import { totalmem } from 'os';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  response: any[]
  table_header: any
agregar:any
  constructor(private http: HttpClient, ) { }

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
carrito(){
this.response.forEach(element => {
  this.agregar=(element) 
  console.log(this.agregar)
});
}
total(){
  var total:0;
  for(let item of this.agregar){
total+=item;
  }
  return total;
}
} 