import {Component, Query} from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http'
import { contacto } from 'src/app/models/contacto.model';



@Component({
    selector:'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ["../css/dimensionesCajas.css"]
})
export class inicioComponent{
    private lista_Contactos : contacto[];
    private modeloContacto: contacto;
    constructor(
        private http: HttpClient            
    ){
        //this.lista_Contactos = this.llenar_Lista()
        //console.log(this.llenar_Lista());        
       // console.log(this.lista_Contactos);        
    }
    llenar_Lista(){
        var url = "http://localhost:3000/";
        //return this.http.get(url)
        /*
        .subscribe(
            (data: contacto) => this.modeloContacto = {
                id: "1",
                nombre: data.nombre,
                apellido1: data.apellido1,
                apellido2: data.apellido2,
                celular1: data.celular1,
                celular2: data.celular2,
                correo_Electronico: data.correo_Electronico,
                profesion: data.profesion
            }
        )   */                   
    }
}