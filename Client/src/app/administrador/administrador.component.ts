import { Component, OnInit, ɵConsole } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {
  //formularios y validaciones
  registerForm1: FormGroup;
  registerForm2: FormGroup;
  //guarda la base64 de la imagen para mandar al webserver
  base64textString:String=""
 base64textString2:String=""
 base64textString3:String=""
  response: any[]
  respuesta: any[]
  table_header: any
  table_header2: any
  //pots patronajes-servicios
  id1:number
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
  idServicio2:number
  constructor(private http: HttpClient, private formBuilder: FormBuilder,private _sanitizer: DomSanitizer ) { }
  ngOnInit() {
    this.registerForm1 = this.formBuilder.group({
      nombre:[Validators.required, Validators.pattern('[a-zA-Z0-9\u00f1]{3,20}')],
      precio:[Validators.required, Validators.pattern('[0-9]{1,2}.*[0-9]{1,2}')],
      descripcion: [Validators.required ,Validators.pattern('[a-zA-Z0-9\u00f1]{1,700}')],
      idServicio:[Validators.required],
      base64textString2:[Validators.required],
  }); 

  this.registerForm2 = this.formBuilder.group({
    nombre2:[Validators.required, Validators.pattern('[a-zA-Z0-9\u00f1]{3,20}')],
    precio2:[Validators.required, Validators.pattern('[0-9]{1,2}.*[0-9]{1,2}')],
    descripcion2: [Validators.required,Validators.pattern('[a-zA-Z0-9\u00f1]{1,700}')],
    idServicio2:[Validators.required],
}); 
    this.table_header = [
      {
        id: 'N°',
        nombre: 'Nombre',
        precio: 'Precio',
        descripcion: 'Descripcion',
        urlArchivo: 'Archivo',
        imagen: 'Imagen',
        idServicio: 'Servicio'
      }
    ]
    this.getData()
    this.table_header2 = [
      {
        id: 'N°',
        nombre: 'Nombre',
        precio: 'Precio',
        descripcion: 'Pescripcion',
        imagen: 'Imagen',
        idServicio2: 'Servicio'
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
        // console.log(this.response)
      })
  }
  getDataProductos = () => {
    let tabla = 'productos'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}`)
      .subscribe(data => {
        this.respuesta = data.data
        // console.log(this.respuesta)
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
        // console.log(this.base64textString);
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
        // console.log(this.base64textString2);
}
//fin convertir base64

//ingresar datos de tabla patronajes
postDataTable = () => {
  let tabla = 'patronajes'
  let registros = { tabla: tabla, registro: [{ id: this.id1, nombre: this.nombre, precio: this.precio, descripcion: this.descripcion, urlArchivo: this.base64textString3, imagen: this.base64textString2, idServicio: this.idServicio }] }
  this.http.post(environment.API_URL + 'insertar', registros)
  .subscribe(data => {
    //   // this.response = Array.of(data)
    // })
    Swal.fire('datos INGRESADOS')
   })
   window.location.reload()
}

  postDataTableProductos = () => {
    let tabla = 'productos'
    let registros = { tabla: tabla, registro: [{ id: this.id2, nombre: this.nombre2, precio: this.precio2, descripcion: this.descripcion2, imagen: this.base64textString2,idServicio: this.idServicio2 }] }
    this.http.post(environment.API_URL + 'insertar', registros)
    .subscribe(data => {
      //   // this.response = Array.of(data)
      // })
      Swal.fire('datos INGRESADOS')
     })
     window.location.reload()
    }

    handleFileSelect1(evt){
      var files = evt.target.files;
      var file = files[0];
    
    if (files && file) {
        var reader = new FileReader();
    
        reader.onload =this._handleReaderLoaded1.bind(this);
    
        reader.readAsBinaryString(file);
    
    }
    }
    
    _handleReaderLoaded1(readerEvt) {
     var binaryString = readerEvt.target.result;
            this.base64textString3= btoa(binaryString);
            
    }
}
