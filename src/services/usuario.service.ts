import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable()
export class UsuarioService {

    constructor(public http: HttpClient){}

    getUsuarios(){
       return this.http.get(`http://localhost:3000/getUsuarios`, {
        observe: 'response',
        responseType: 'json'
       })
    }
    reservasUsuario(id: any){
        return this.http.post(`http://localhost:3000/reservasUsuario`, {user_id: id}, {
            observe: 'response',
            responseType: 'json'
        })
    }
    editarUsuario(info: any){
        console.log(info)
        return this.http.post(`http://localhost:3000/editarUsuario`, info, {
            observe: 'response',
            responseType: 'json'
        })
    }
    getUsuariosIndisponiveis(){
        return this.http.get(`http://localhost:3000/usuariosIndisponiveis`,{
            observe: 'response',
            responseType: 'json'
        })
    }
    reservasAtivasUsuarios(info: any){
        return this.http.post(`http://localhost:3000/reservasAtivasUsuario`,{
            user_id: info
        },{
            observe: 'response',
            responseType: 'json'
        })
    }
    cadastrarLivro(info: any){
        return this.http.post(`http://localhost:3000/cadastrarLivro`,info,{
            observe: 'response',
            responseType: 'json'
        })
    }
    cadastrarAluno(info: any){
        return this.http.post(`http://localhost:3000/cadastrarUsuario`,info,{
            observe: 'response',
            responseType: 'json'
        })
    }
    getUsuariosDisponiveis(){
        return this.http.get(`http://localhost:3000/usuariosDisponiveis`,{
            observe: 'response',
            responseType: 'json'
        })
    }
    


}