import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable()
export class UsuarioService {
    constructor(public http: HttpClient){}

        getUsuarios(){
            return this.http.get(`https://relieved-crow-fatigues.cyclic.app/getUsuarios`, {
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

        editarUsuario(info: any){
            console.log(info)
            return this.http.post(`https://relieved-crow-fatigues.cyclic.app/editarUsuario`, info, {
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
    
}