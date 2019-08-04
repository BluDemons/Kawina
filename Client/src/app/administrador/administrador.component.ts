import { Component, OnInit, ɵConsole } from '@angular/core';
import { Patrones } from '../modelos/patrones';
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
 zip:string=""
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
  idServicio:number
  imagen:string
  archivo: Array <File>
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
  }
  //traer dregistros patronajes
  getData = () => {
    let tabla = 'patronajes'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}`)
      .subscribe(data => {
        this.response = data.data
        console.log(this.response)
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

_handleReaderLoaded(readerEvt) {
 var binaryString = readerEvt.target.result;
        this.base64textString= btoa(binaryString);
        console.log(this.base64textString);
}
//fin convertir base64

//ingresar datos de tabla patronajes
postDataTable = () => {
  let tabla = 'patronajes'
  let registros = { tabla: tabla, registro: [{ id: this.id, nombre: this.nombre, precio: this.precio, descripcion: this.descripcion, urlArchivo: this.zip, imagen: this.base64textString, idServicio: this.idServicio }] }
  this.http.post(environment.API_URL + 'insertar', registros)
    .subscribe(data => {
      this.response = Array.of(data)
    })
    // window.location.reload()
  }
  rar(evt){
    var files = evt.target.files;
    var file = files[0];

  }
}
//   if (files && file) {
//       var reader = new FileReader();
  
//       reader.onload =this.rrar.bind(this);
  
//       reader.readAsBinaryString(file);
  
//   }
//   }
  
//   rrar(readerEvt) {
//    var binaryString = readerEvt.target.result;
//           this.zip= btoa(binaryString);
//           console.log(this.zip);
//   }
// }
//fin ingresar patronajes


