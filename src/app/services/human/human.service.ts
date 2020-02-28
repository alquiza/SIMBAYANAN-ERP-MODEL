import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HumanService {

  private baseUrl = 'http://localhost:8000/'
  
  constructor(
    private http: HttpClient,
  ) { }

  getHuman(id:number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAllHuman(): Observable<any> {
    return this.http.get(`${this.baseUrl}`)
  }

  createHuman(human: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, human);
  }

  updateHuman(id:number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHuman(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

}
