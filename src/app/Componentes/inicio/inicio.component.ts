import {Component} from '@angular/core'
import {HttpClient} from '@angular/common/http'
@Component({
    selector:'app-inicio',
    templateUrl: './inicio.component.html',
    styleUrls: ["../css/dimensionesCajas.css"]
})
export class inicioComponent{
    lista_Contactos;    
    constructor(
        private http: HttpClient,
    ){
        this.lista_Contactos = this.llenar_Lista();
    }
    llenar_Lista(){
        var url = "http://localhost:3000/";
        return this.http.get(url).subscribe(
            data=>{console.log("ENTRA")}
        )
    }
}