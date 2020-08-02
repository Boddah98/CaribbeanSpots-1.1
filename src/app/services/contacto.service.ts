import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable()
export class ContactoService {
   constructor(
      private http: HttpClient
      ){
   }
   getMimierda(){
      return this.http.get("http://localhost:5984/contactos/_all_docs")
   }
}
/* 
   getContact(): Observable<contacto[]> {
      return this.http.get("/")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   postContact(formulario_Contacto: FormGroup) {
      return this.http.post("/contacto/add", formulario_Contacto)
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   putContact(id: string, formulario_Contacto: FormGroup) {
      return this.http.put("/contacto/" + id), formulario_Contacto)
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }

   deleteContact(id: string) {
      return this.http.delete(concat("/contacto/", id))
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { contacto } from "../models/contacto.model";
import { HttpClient } from '@angular/common/http';
 
@Injectable()
export class contactoService {
   constructor(private http: HttpClient) {
   }
   
   getContactos(): Observable<contacto[]> {
      return this.http.get("localhost:3000/contactos")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
   guardaDatos(correo_Electronico ){
      var data={
         email: correo_Electronico,
         password:"qwerty20"
       }
       var url = "http://192.168.1.11:3000/send-email";
       return this.http.post(url,data).subscribe(
         data=> {
           //si entra es porque funciona
         },
   }

}*/