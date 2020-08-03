import {Component} from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams} from '@angular/common/http';
import{ContactoService} from 'src/app/services/contacto.service'

@Component({
    selector:'app-agregado',
    templateUrl: './agregado.component.html',
    styleUrls: ["../css/dimensionesCajas.css"]
    
})
export class agregadoComponent{
    formulario_Contacto: FormGroup;
    
    constructor(
        private http: HttpClient,
        private _builder: FormBuilder,
        private datos_Service: ContactoService
    ){
        this.formulario_Contacto = this._builder.group({
            nombre:['',Validators.required],
            apellido1:['',Validators.required],
            apellido2:['',Validators.required],
            celular1:['',Validators.required],
            celular2:['',],
            correo_Electronico:['',Validators.required],
            profesion:['',Validators.required]
        })
        
    }

    agregar_Nuevo_Contacto(formulario_Contacto){ 
        let body = new HttpParams();
        body = body.set('nombre', formulario_Contacto.nombre);
        body = body.set('apellido1', formulario_Contacto.apellido1);
        body = body.set('apellido2', formulario_Contacto.apellido2);
        body = body.set('celular1', formulario_Contacto.celular1);
        body = body.set('celular2', formulario_Contacto.celular2);
        body = body.set('correo_Electronico', formulario_Contacto.correo_Electronico);
        body = body.set('profesion', formulario_Contacto.profesion);
        var url = "http://localhost:3000/contacto/add";
        return this.http.post(url,body).subscribe(
            data=> {
                alert("Contacto agregado con exito");
                console.log('agregado');
            })
        
        }
    
}