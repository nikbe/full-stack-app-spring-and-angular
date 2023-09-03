import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://localhost:8080/v1/users"
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.baseUrl}`);
  }
  addUser(user: any) {
    return this.http.post(`${this.baseUrl}`,user);
  }
  delete(id:number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
  getSingleUser(id:number) {
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  updateUser(data:any) {
    return this.http.put(`${this.baseUrl}/${data?.id}`,data);
  }

}
