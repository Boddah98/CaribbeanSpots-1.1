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
    formulario_Contacto: FormGroup
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
    print(){
    console.log(            
        this.datos_Service.getMimierda()
        );
    }
    guardaDatos(formulario_Contacto){        
        console.log(formulario_Contacto.value.nombre);
    }

    agregar_Nuevo_Contacto(formulario_Contacto){ 
        let contacto = new HttpParams();
        contacto = contacto.set('nombre', formulario_Contacto.value.nombre);
        contacto = contacto.set('apellido1', formulario_Contacto.value.apellido1);
        contacto = contacto.set('apellido2', formulario_Contacto.value.apellido2);
        contacto = contacto.set('celular1', formulario_Contacto.value.celular1);
        contacto = contacto.set('celular2', formulario_Contacto.value.celular2);
        contacto = contacto.set('correo_Electronico', formulario_Contacto.value.correo_Electronico);
        contacto = contacto.set('profesion', formulario_Contacto.value.profesion);
        /*
        var data={
            nombre: formulario_Contacto.value.nombre,
            apellido1: formulario_Contacto.value.apellido1,
            apellido2: formulario_Contacto.value.apellido2,
            celular1: formulario_Contacto.value.celular1,
            celular2: formulario_Contacto.value.celular2,
            correo_Electronico: formulario_Contacto.value.correo_Electronico,
            profesion: formulario_Contacto.value.profesion,                        
          }*/
          var url = "http://localhost:3000/contacto/add";
          return this.http.post(url,contacto).subscribe(
            data=> {
                console.log('agradecido con el de arriba')
              //si entra es porque funciona
            })
        
        }
}