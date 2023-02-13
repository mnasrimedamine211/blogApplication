import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  baseUrl: any;

  constructor(private http: HttpClient) { }
  getBlogs() {
    return this.http.get<any[]>('http://localhost:3000/api/getBlogs');
  }
  getBlogById(id: string) {
    return this.http.get<any>(`http://localhost:3000/api/getBlogById/${id}`);
  }
  addBlog(blog: any) {
    console.log("run", blog)
    return this.http.post<any>(`http://localhost:3000/api/addBlog`, blog);
  }
  likeBlog(id: string) {
    return this.http.patch(`http://localhost:3000/api/incrementLikes/${id}`, {});
  }
 
  dislikeBlog(id: string) {
    return this.http.patch(`http://localhost:3000/api/incrementDislikes/${id}`, {});
  }
  

}


