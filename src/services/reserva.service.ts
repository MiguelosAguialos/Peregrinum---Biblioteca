import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable()
export class ReservaService {
    constructor(public http: HttpClient){}

    cadastrarReserva(info: any){
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/cadastrarReserva`,info,{
            observe: 'response',
            responseType: 'json'
        })
    }

    reservasUsuario(id: any){
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/reservasUsuario`, {user_id: id}, {
            observe: 'response',
            responseType: 'json'
        })
    }

    reservasAtivasUsuarios(info: any){
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/reservasAtivasUsuario`,{
            user_id: info
        },{
            observe: 'response',
            responseType: 'json'
        })
    }

    concluirReserva(info: any){
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/concluirReserva`,{
            id_reserva: info
        },{
            observe: 'response',
            responseType: 'json'
        }) 
    }
           
}