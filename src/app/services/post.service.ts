import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  // URL de la API  
  private apiUrl: string = environment.apiUrlPosts + '/posts';

  constructor(private httpClient: HttpClient) { }
  
  //---------------------------------------- obener datos de la API
  // listado
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl);
  }
  // obtener un registro
  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.apiUrl+'/'+id);
  }
  // grabar un registro
  postPost(post: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.apiUrl, post);
  }
  // actualizar un registro
  putPost(id: number, post: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.apiUrl+'/'+id, post);
  }
  // eliminar un registro
  deletePost(id: number): Observable<any> {
    return this.httpClient.delete<Post>(this.apiUrl+'/'+id);
  }
}
