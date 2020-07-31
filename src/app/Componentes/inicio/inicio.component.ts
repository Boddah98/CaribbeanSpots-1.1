import {Component} from '@angular/core'
import {MatListModule} from '@angular/material/list';
//import {contactoService} from '../../services/contacto.service'
@Component({
    selector:'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ["../css/dimensionesCajas.css"]
})
export class inicioComponent{
    contactos;
    /*
    constructor(private contactoService: contactoService) {
        this.contactos = contactoService.getContactos();
    }*/
}