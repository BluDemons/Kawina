import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
 base64textString:String=""
 base64textString2:String=""
  response: any[]
  respuesta: any[]
  table_header: any
  table_header2: any
  //pots patronajes-servicios
  id1:number
  CI:string
  nombre:string
  precio:number
  descripcion:string
  urlArchivo:string
  idServicio:number
  //post productos(bolsos)
  id2:number
  nombre2:String
  descripcion2:string
  precio2:number
  constructor(private http: HttpClient,private _sanitizer: DomSanitizer ) { }
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
    this.table_header2 = [
      {
        id: 'N°',
        nombre: 'nombre',
        precio: 'precio',
        descripcion: 'descripcion',
        imagen: 'imagen',
      }
    ]
    this.getDataProductos()
  }
  //traer dregistros patronajes-productos
  getData = () => {
    let tabla = 'patronajes'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}`)
      .subscribe(data => {
        this.response = data.data
        console.log(this.response)
      })
  }
  getDataProductos = () => {
    let tabla = 'productos'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}`)
      .subscribe(data => {
        this.respuesta = data.data
        console.log(this.respuesta)
      })
  }
  //fin traer


  //eliminar por id a patronajes/
eliminar=(id)=>{
  let tabla='patronajes'
  this.http.delete(environment.API_URL+ `borrar?tabla=${tabla}&&id=${id}`)
  .subscribe(data=>{

  })
  window.location.reload()
}
eliminarProducto=(id)=>{
  let tabla='productos'
  this.http.delete(environment.API_URL+ `borrar?tabla=${tabla}&&id=${id}`)
  .subscribe(data=>{

  })
  window.location.reload()
}
//fin eliminar

// convertir de imagen a base 64 base de datos imagen tipo de dato texto
handleFileSelect(evt){
  var files = evt.target.files;
  var file = files[0];

if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);

}
}

handleReaderLoaded(readerEvt) {
 var binaryString = readerEvt.target.result;
        this.base64textString= btoa(binaryString);
        console.log(this.base64textString);
}

handleFileSelect2(evt){
  var filess = evt.target.files;
  var filee = filess[0];

if (filess && filee) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(filee);

}
}

_handleReaderLoaded(readerEvt) {
 var binaryString = readerEvt.target.result;
        this.base64textString2= btoa(binaryString);
        console.log(this.base64textString2);
}
//fin convertir base64

//ingresar datos de tabla patronajes
postDataTable = () => {
  let tabla = 'patronajes'
  let registros = { tabla: tabla, registro: [{ id: this.id1, nombre: this.nombre, precio: this.precio, descripcion: this.descripcion, urlArchivo: this.urlArchivo, imagen: this.base64textString, idServicio: this.idServicio }] }
  this.http.post(environment.API_URL + 'insertar', registros)
    .subscribe(data => {
      this.response = Array.of(data)
    })
    window.location.reload()
  }
  postDataTableProductos = () => {
    let tabla = 'productos'
    let registros = { tabla: tabla, registro: [{ id: this.id2, nombre: this.nombre2, precio: this.precio2, descripcion: this.descripcion2, imagen: this.base64textString2}] }
    this.http.post(environment.API_URL + 'insertar', registros)
      .subscribe(data => {
        this.response = Array.of(data)
      })
       window.location.reload()
    }
}
