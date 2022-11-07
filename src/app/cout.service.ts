import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



const baseUrl = 'http://localhost:8080/api/cout';

@Injectable({
  providedIn: 'root'
})

export class CoutService {

  constructor(private http: HttpClient) { }

  getAll() :Observable<any> {
    return this.http.get(baseUrl);
  }
  getById(id:any) :Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: any) :Observable<any> {
    return this.http.post(baseUrl, data);
  }
  update(data:any, id:any):Observable<any>{
    return this.http.put(`${baseUrl}/${id}`, data)
  }
  deleteByID(id:any):Observable<any>{
    console.log(`${baseUrl}/${id}`)
    return this.http.delete(`${baseUrl}/${id}`)
  }
}