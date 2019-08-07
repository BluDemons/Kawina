import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Inicio } from '../modelos/inicio'

@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.scss']
})
export class AdminInicioComponent implements OnInit {
  Inicio: Inicio[]
  Form: FormGroup
  base64textString: String = ""
  response: any[]
  data: any
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
    this.getData(),
      this.crearForm()
  }
  postDataTableProductos = () => {
    let tabla = 'productos'
    let registros = { tabla: tabla, registro: [{ id: this.id, titulo1: this.titulo1, descripcion: this.descripcion, objetivo: this.objetivo, mision: this.mision, idServicio: this.idServicio2 }] }
    this.http.post(environment.API_URL + 'insertar', registros)
      .subscribe(data => {
        //   // this.response = Array.of(data)
        // })
        Swal.fire("Datos Ingresados ", " correctamente", 'success');
      })
    window.location.reload()
  }

  //traer datos 
  getData = () => {
    const id = localStorage.getItem('id')
    let tabla = 'inicio'
    this.http.get<any>(environment.API_URL + `getData?tabla=${tabla}&id` + id)
      .subscribe(data => {
        this.response = data.data
        // console.log(this.response)
      })
  }

  eliminar = (id) => {
    let tabla = 'inicio'
    this.http.delete(environment.API_URL + `borrar?tabla=${tabla}&&id=${id}`)
      .subscribe(data => {
      })
    window.location.reload()
  }
  

  crearForm() {
    this.editarForm = this.formBuilder.group({
      titulo1: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      objetivo: ['', [Validators.required]],
      mision: ['', [Validators.required]],
      vision: ['', [Validators.required]],
      titulo2: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion1: ['', [Validators.required]],
      titulo3: ['', [Validators.required]],
      subtitulo1: ['', [Validators.required]],
      descripcion2: ['', [Validators.required]],
      subtitulo2: ['', [Validators.required]],
      descripcion3: ['', [Validators.required]],
      subtitulo3: ['', [Validators.required]],
      descripcion4: ['', [Validators.required]],
    });
  }

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
