import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Router} from '@angular/router'
@Component({
  selector: 'app-admin-inicio',
  templateUrl: './admin-inicio.component.html',
  styleUrls: ['./admin-inicio.component.scss']
})
export class AdminInicioComponent implements OnInit {

  Form: FormGroup
  registroUsuariosForm: FormGroup
  name:string
  lastname: string
  mensaje:string
  email: string
  base64textString:String=""
  response: any[]
  table_header: any
  //post informacion-dashboard
  id: number;
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


  constructor(private formBuilder: FormBuilder,private http: HttpClient, private router:Router) { }

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
  //eliminar por id a inicio/
  eliminar=(id)=>{
    let tabla='inicio'
    this.http.delete(environment.API_URL+ `borrar?tabla=${tabla}&&id=${id}`)
    .subscribe(data=>{
    })
    window.location.reload()
  }
  //ingresar nueva informacion
  postDataTable = () => {
    let tabla = 'inicio'
    let registros = { tabla: tabla, 
      registro: [{ id: this.id, 
        titulo1: this.titulo1, 
        descripcion: this.descripcion, 
        objetivo: this.objetivo, 
        mision: this.mision, 
        vision: this.vision, 
        titulo2: this.titulo2, 
        imagen:this.base64textString, 
        descripcion1:this.descripcion1,
        titulo3:this.titulo3, 
        subtitulo1:this.subtitulo1,
        descripcion2:this.descripcion2, 
        subtitulo2: this.subtitulo2, 
        descripcion3:this.descripcion3, 
        subtitulo3:this.subtitulo3,
        descripcion4:this.descripcion4 }] }
    this.http.post(environment.API_URL + 'insertar', registros)
      .subscribe(data => {
        this.response = Array.of(data)
      })
      window.location.reload()
    }
//convertir imagen en base64
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
//editar registro

// editar = (id:any) =>{
//   this.data ={
//     tabla : this.table,
//     idInicio: id
//   };
//   console.log(this.data);
//   localStorage.removeItem('id');
//   localStorage.setItem('id',this.data.idInicio.toString());
//   this.router.navigate(['editar']);
// }
  crearForm(){
    this.Form = this.formBuilder.group({
      name: ['',[Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,10}')]],
      lastname: ['',[Validators.required,Validators.pattern('[A-Z]{1}[a-z]{3,10}')]],
      mensaje:['',[Validators.required,Validators.minLength(5),Validators.maxLength(500)]],
      email: ['', [Validators.required, Validators.pattern('[a-z]+[a-z0-9.-_]*@[a-z]+[a-z0-9]*.[a-z]{2,3}[.]?[a-z]*')]],
    });
  }

  validaForm(){
    if(this.Form.valid){
      this.name = JSON.stringify(console.log(this.Form.controls['name'].value))
      this.lastname = JSON.stringify(console.log(this.Form.controls['lastname'].value))  
      this.mensaje = JSON.stringify(console.log(this.Form.controls['mensaje'].value))            
      this.email = JSON.stringify(console.log(this.Form.controls['email'].value))
      alert(['Datos Enviados'])
    }else{
      this.name = JSON.stringify(console.log(this.Form.controls['name'].errors))
      this.lastname = JSON.stringify(console.log(this.Form.controls['lastname'].errors))
      this.mensaje = JSON.stringify(console.log(this.Form.controls['mensaje'].errors))
      this.email = JSON.stringify(console.log(this.Form.controls['email'].errors))
      }
    }

  public getError(controlName: string): string {
    let error = '';
    const control = this.Form.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
