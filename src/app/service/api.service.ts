import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: String = 'https://64d390d967b2662bf3dc6f7e.mockapi.io/api/trevo/'

  constructor(private http: HttpClient) { }

  // createcall() {

  // }

  listcall() {
    return this.http.get(this.api + '/call');
  }
  // updatecall() {

  // }

  // deletecall() {

  // }

}
