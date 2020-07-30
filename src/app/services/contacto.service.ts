import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { contacto } from "../models/contacto.model";
 
@Injectable()
export class contactoService {
   constructor(private http: Http) {
   }
 
   getContactos(): Observable<contacto[]> {
      return this.http.get("localhost:3000/contactos")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}