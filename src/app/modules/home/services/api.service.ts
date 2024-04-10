import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTags(){
    
    const token = localStorage.getItem('authToken');
    
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise ((resolve, reject) => {
      this.http.get('http://3.218.160.237:8000/durangeneidad/getTags', { headers }).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });

  }

  getArticles(filter = ''){
      
      const token = localStorage.getItem('authToken');
      
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json; charset=utf-8');
      headers = headers.set('Authorization', `Bearer ${token}`);
  
      return new Promise ((resolve, reject) => {
        this.http.get('http://3.218.160.237:8000/durangeneidad/getArts?filter='+filter, { headers }).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
      });
    }
  
}
