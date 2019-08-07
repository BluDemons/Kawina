import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '../servicio/message.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, public _MessageService: MessageService) { }

  ngOnInit() {
  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
  }
}
