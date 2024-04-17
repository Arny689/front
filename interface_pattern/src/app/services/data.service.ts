import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersDto } from '../dto/users.dto';
import { Observable } from 'rxjs';
import { PostsDto } from '../dto/posts.dto';
import { HttpHeaders } from '@angular/common/http';
import { DocDto } from '../dto/doc.dto';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UsersDto> {
    const data = this.http.get<UsersDto>('http://localhost:3000/users')
    return data
  }

  exportUsers(): Observable<UsersDto> {
    const data = this.http.get<UsersDto>('http://localhost:3000/users/download')
    return data
  }

  getPosts(id: string): Observable<PostsDto[]> {
    const data = this.http.get<PostsDto[]>(`http://localhost:8080/${id}/reports`)
    return data
  }

  removePost(id: string) {
    return this.http.delete(`http://localhost:3000/post/${id}`)
  }

  approve(userId: string, reportId :string) {
    return this.http.put(`http://localhost:8080/${userId}/reports/${reportId}/approve`, {})
  }

  reject(userId: string, reportId :string, msg: string) {
    return this.http.put(`http://localhost:8080/${userId}/reports/${reportId}/reject`, {message: msg})
  }

  getIndex(url: string, formData: DocDto) { 
    return this.downloadIndex(url, formData)
      .subscribe((response) => {

        console.log(response);

        // let file = new Blob([response.body], { type: response.body.type});
        // let newVariable: any = window.navigator;

        // if (newVariable && newVariable.msSaveOrOpenBlob) {
        //   const name = "test";
        //   newVariable.msSaveOrOpenBlob(file, name);
        // } else {
        //   const fileUrl = URL.createObjectURL(file);
        //   const child = window.open(fileUrl);
        // }
      });
  }

  downloadIndex(url: string, formData: any): Observable<any> {
    const requestOptions : any = {
        observe: "response",
        responseType: "blob",           
        headers: new HttpHeaders({
          "Accept": "application/octet-stream"
        })
    };
    const request = new Request(requestOptions);
    return this.http.get(url, requestOptions);
  }

  uploadForm(url: string, formData: any) {
    return this.http.post(url, formData);
  }
}
