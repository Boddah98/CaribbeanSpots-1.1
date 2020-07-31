import {Component} from '@angular/core'
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

@Component({
    selector:'app-agregado',
    templateUrl: './agregado.component.html',
    styleUrls: ["../css/dimensionesCajas.css"]
    
})
export class agregadoComponent{
    formulario_Contacto: FormGroup
    constructor(
       private http: HttpClient,
        private _builder: FormBuilder
    ){
        this.formulario_Contacto = this._builder.group({
            nombre:['',Validators.required],
            apellido1:['',Validators.required],
            apellido2:['',Validators.required],
            celular1:['',Validators.required],
            celular2:['',],
            correo_Electronico:['',Validators.required]
        })
    }

    guardaDatos(formulario_Contacto){
        console.log(formulario_Contacto.value.nombre);
    }
    agregar_Nuevo_Contacto(formulario_Contacto){ 
        
        var data={
            nombre: formulario_Contacto.value.nombre,
            apellido1: formulario_Contacto.value.apellido1,
            apellido2: formulario_Contacto.value.apellido2,
            celular1: formulario_Contacto.value.celular1,
            celular2: formulario_Contacto.value.celular2,
            correo_Electronico: formulario_Contacto.value.correo_Electronico,            
          }
          var url = "http://192.168.1.11:3000/contacto/add";
          return this.http.post(url,data).subscribe(
            data=> {
              //si entra es porque funciona
            })
        /*
        
        this.http.put("http://localhost:5984/contactos/contacto/add" , formulario_Contacto.value );        
        console.log(this.http);*/
        }
}