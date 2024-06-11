import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  public displayStyle: BehaviorSubject<string> = new BehaviorSubject<string>('fixed');

  article: any;
  constructor(private http: HttpClient) {}

  getTags(): Promise<any> {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise((resolve, reject) => {
      this.http
        .get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/getTags', { headers })
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

  getArticles(type: string, filter = '') {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise((resolve, reject) => {
      this.http
        .get(
          `https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/getArts?type=${type}&filter=${filter}`,
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

  getBook(id = '') {
    const token = localStorage.getItem('authToken');

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', `Bearer ${token}`);

    return new Promise((resolve, reject) => {
      this.http
        .get(
          'https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/books?id=' + id,
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
      this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/getDetail?code=' + id, { headers }).subscribe(
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
      this.http.post('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/email', { headers }, body).subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getNews() {
    return new Promise((resolve, reject) => {
      this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/avisos').subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getMenu() {
    return new Promise((resolve, reject) => {
      this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/categories').subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getBio(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/biografia').subscribe(
        (response) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  getConfigurations(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://d2jj0rul8wm06l.cloudfront.net/durangeneidad/configuraciones').subscribe(
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
