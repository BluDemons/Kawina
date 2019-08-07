import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.scss']
})
export class AdminInicioComponent implements OnInit {

  Form: FormGroup
  base64textString: String = ""
  response: any[]
  //data:any
  id: any;
  titulo1: string;
  descripcion: string;
  objetivo: string;
  mision: string;
  vision: string;
  titulo2: string;
  imagen: string;
  descripcion1: string;
  titulo3: string;
  subtitulo1: string;
  descripcion2: string;
  subtitulo2: string;
  descripcion3: string;
  subtitulo3: string;
  descripcion4: string;
  editarForm: FormGroup;
  //tabla:any


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getData()
  }
  //traer datos 
  getData = () => {
    let tabla = 'inicio'
    this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}`)
      .subscribe(data => {
        this.response = data.data
        console.log(this.response)
      })
  }
  //ingresar nueva informacion
  postDataTable = () => {
    let tabla = 'inicio'
    let registros = {
      tabla: tabla,
      registro: [{
        id: this.id,
        titulo1: this.titulo1,
        descripcion: this.descripcion,
        objetivo: this.objetivo,
        mision: this.mision,
        vision: this.vision,
        titulo2: this.titulo2,
        imagen: this.base64textString,
        descripcion1: this.descripcion1,
        titulo3: this.titulo3,
        subtitulo1: this.subtitulo1,
        descripcion2: this.descripcion2,
        subtitulo2: this.subtitulo2,
        descripcion3: this.descripcion3,
        subtitulo3: this.subtitulo3,
        descripcion4: this.descripcion4
      }]
    }
    this.http.post(environment.API_URL + 'insertar', registros)
      .subscribe(data => {
        this.response = Array.of(data)
        Swal.fire('Bienvenido')
      })
      this.router.navigate(['dashboard'])
    window.location.reload()
  }
  //editar formulario
  // edidData= (id)=> {
  //   const titulo1 = this.editarForm.get('titulo1').value
  //   const titulo2 = this.editarForm.get('titulo2').value
  //   this.data = {
  //     tabla: this.tabla,
  //     datos:[{
  //       id:id,
  //       titulo1:titulo1,
  //       titulo2:titulo2,
  //     }]
  //   };
  // if(this.data === null){
  //   console.log("no datos")
  // }else{
  //   console.log(this.data)
  //   this.http.put(environment.API_URL + 'put', this.data)
  //   .subscribe(response=>{
  //     console.log(response)
  //     Swal.fire("Se ha editado","correctamente",'success')
  //     this.router.navigate(['dashboard'])
  //   })
  // }
  // }
  // actualizar(){
  //   const id = localStorage.getItem('id')
  //   const tabla = 'inicio'
  //   this.http.get<any>(environment.API_URL + `leer?tabla=${tabla}&id=` + id)
  //   .subscribe(data=>{
  //     this.response =data.data
  //     console.log(this.response)
  //     console.log(id)
  //     console.log(data)
  //   })
  // }
  //convertir imagen en base64
  handleFileSelect(evt) {
    var files = evt.target.files;
    var file = files[0];

    if (files && file) {
      var reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);

    }
  }

  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    console.log(this.base64textString);
  }
}
