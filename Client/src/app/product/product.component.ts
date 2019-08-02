import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Producto } from '../modelos/producto';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  response: any[]
  table_header: any
  agregar: Producto[]

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData()
    this.agregar = []

  }

  getData=()=>{
    let tabla = 'productos'
    this.http.get<any>(environment.API_URL +`leer?tabla=${tabla}`)
        .subscribe(data => {
            this.response = data.data
            console.log(this.response)
        })
  }
 carrito(id){
 this.response.forEach(element => {
   if(element.id==id){
    // this.agregar= Array.of(element);
    console.log(element);
    this.agregar.push(element);
  console.log(this.agregar)
  }
 });
}
// total(){  
//   var total:0;
//   for(let precio of this.agregar){
//    total+=precio;
//   }
//   return total;
// }
} 