import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Inicio } from '../modelos/inicio';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  response: any[]
  table_header: any
  informaciones: Inicio[]

  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.getData()
    this.informaciones = []
  }
  getData=()=>{
    let tabla = 'inicio'
    this.http.get<any>(environment.API_URL +`leer?tabla=${tabla}`)
        .subscribe(data => {
            this.response = data.data
            console.log(this.response)
        })
  }
}
