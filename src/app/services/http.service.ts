import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  public local_server: string = "http://localhost:3000/";
  constructor(public http: HttpClient) {
  }

  get(url): any {
    var api = this.local_server + url;
    return new Promise((resove, reject) => {
      // 调用 subscribe(...) 会触发这个可观察对象的执行，
      // 并导致 HttpClient 组合并把 HTTP 请求发给服务器。
      this.http.get(api).subscribe((res) => {
        console.log(res);
        resove(res);
      }, (err) => {
        reject(err);
      })
    })
  }

  post(url: String, json: Object): any {
    var api = this.local_server + url;
    return new Promise((resove, reject) => {
      // 调用 subscribe(...) 会触发这个可观察对象的执行，
      // 并导致 HttpClient 组合并把 HTTP 请求发给服务器。
      this.http.post(api, json).subscribe((res) => {
        resove(res);
      }, (err) => {
        reject(err);
      })
    })
  }

}
