import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient){}

    getUsuarios(){
       return this.http.get(`https://relieved-crow-fatigues.cyclic.app/getUsuarios`, {
        observe: 'response',
        responseType: 'json'
       })
    }
    getLivros(){
        return this.http.get(`https://relieved-crow-fatigues.cyclic.app/getLivros`, {
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
    editarUsuario(info: any){
        console.log(info)
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/editarUsuario`, info, {
            observe: 'response',
            responseType: 'json'
        })
    }
    editarLivro(info: any){
        console.log(info)
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/editarLivro`, info, {
            observe: 'response',
            responseType: 'json'
        })
    }
    getUsuariosIndisponiveis(){
        return this.http.get(`https://relieved-crow-fatigues.cyclic.app/usuariosIndisponiveis`,{
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
    cadastrarLivro(info: any){
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/cadastrarLivro`,info,{
            observe: 'response',
            responseType: 'json'
        })
    }
    cadastrarAluno(info: any){
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/cadastrarUsuario`,info,{
            observe: 'response',
            responseType: 'json'
        })
    }
    getUsuariosDisponiveis(){
        return this.http.get(`https://relieved-crow-fatigues.cyclic.app/usuariosDisponiveis`,{
            observe: 'response',
            responseType: 'json'
        })
    }
    getLivrosDisponiveis(){
        return this.http.get(`https://relieved-crow-fatigues.cyclic.app/livrosDisponiveis`,{
            observe: 'response',
            responseType: 'json'
        })
    }
    cadastrarReserva(info: any){
        return this.http.post(`https://relieved-crow-fatigues.cyclic.app/cadastrarReserva`,info,{
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
    atualizarDebitos(){
        return this.http.get(`https://relieved-crow-fatigues.cyclic.app/debitosUsuario`, {
            observe: 'response',
            responseType: 'json'
        })
    }
    


}
