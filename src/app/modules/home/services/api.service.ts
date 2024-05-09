import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  article: any;
  constructor(private http: HttpClient) {}

  getTags(): Promise<any> {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise((resolve, reject) => {
      this.http
        .get('http://3.218.160.237:8000/durangeneidad/getTags', { headers })
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getArticles(filter = '') {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise((resolve, reject) => {
      this.http
        .get(
          'http://3.218.160.237:8000/durangeneidad/getArts?filter=' + filter,
          { headers }
        )
        .subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }

  getDetail(id: number) {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise((resolve, reject) => {
      this.http.get('http://3.218.160.237:8000/durangeneidad/getDetail?id=' + id, { headers }).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  
  sendEmail(body: any) {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise((resolve, reject) => {
      this.http.post('http://3.218.160.237:8000/durangeneidad/email', { headers }, body).subscribe(
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
