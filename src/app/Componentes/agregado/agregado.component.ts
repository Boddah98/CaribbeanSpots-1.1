import {Component} from '@angular/core'
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
    selector:'app-agregado',
    templateUrl: './agregado.component.html',
    styleUrls: ["../css/dimensionesCajas.css"]
    
})
export class agregadoComponent{
    formulario_Contacto: FormGroup
    constructor(
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

    agregar_Nuevo_Contacto(formulario_Contacto){
        console.log(formulario_Contacto);
    }
}