import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chamado } from '../chamado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: String = 'https://64d390d967b2662bf3dc6f7e.mockapi.io/api/trevo/'
  private options: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "https://mywebsite.org/%22%7D)%7D"
    })
  };

  constructor(private http: HttpClient) { }

  createCall(call: Chamado) {
    return this.http.post(this.api + '/call', JSON.stringify(call), this.options);
  }

  listcall(): Observable<Chamado[]> {
    return this.http.get<Chamado[]>(this.api + '/call');
  }

  updatecall(id: number, chamado: Chamado): Observable<any> {
    return this.http.put(this.api + 'call/' + id, JSON.stringify(chamado), this.options);
  }

  searchById(id: number): Observable<Chamado> {
    return this.http.get<Chamado>(this.api + 'call/' + id)
  }

  deleteCall(id: number): Observable<any> {
    return this.http.delete<Chamado>(this.api + 'call/' + id)
  }

}
