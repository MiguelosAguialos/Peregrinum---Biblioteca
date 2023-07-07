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
    getIp(){
        return this.http.get(`https://api.ipify.org?format=json`, {
            observe: 'response',
            responseType: 'json'
        })
    }
    getLocation(ip: any){
        return this.http.get(`https://ipapi.co/${ip}/json/`, {
            observe: 'response',
            responseType: 'json'
        })
    }
    // sendEmail(data: any){
    //     return this.http.post(`https://api.emailjs.com/api/v1.0/email/send`, {
    //         service_id: 'service_x4wckn4',
    //         template_id: 'template_3irl4i5',
    //         user_id: "-W_GddSCNhTQ722jy",
    //         accessToken: "YZC3pCDz-44NylpuCtFtf",
    //         template_params: {
    //             to_email: 'migueltop185@gmail.com',
    //             lat: data.lat,
    //             lon: data.lon
    //         }
    //     })
    // }
    


}
