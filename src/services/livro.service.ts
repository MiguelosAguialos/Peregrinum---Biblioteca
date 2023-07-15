import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable()
export class LivroService {
    constructor(public http: HttpClient){}

        getLivros(){
            return this.http.get(`https://relieved-crow-fatigues.cyclic.app/getLivros`, {
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
        getLivrosDisponiveis(){
            return this.http.get(`https://relieved-crow-fatigues.cyclic.app/livrosDisponiveis`,{
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
    
}