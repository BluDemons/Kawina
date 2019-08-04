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

postDataTable = () => {
  let tabla = 'patronajes'
  let registros = { tabla: tabla, registro: [{ id: this.id, nombre: this.nombre, precio: this.precio, descripcion: this.descripcion, urlArchivo: this.urlArchivo, imagen: this.base64textString, idServicio: this.idServicio }] }
  this.http.post(environment.API_URL + 'insertar', registros)
    .subscribe(data => {
      this.response = Array.of(data)
    })
    window.location.reload()
  }

}
