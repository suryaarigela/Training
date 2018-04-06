import { Injectable } from '@angular/core';
import {Http, RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class PostsService {

  constructor(private http:Http) { }

  getAllPosts():any{
   
    let headers = new Headers({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*'
       });
    let options = new RequestOptions({ headers: headers });
    
   // headers.append('Content-Type', 'application/X-www-form-urlencoded');
    return  this.http.get('http://localhost:3000/posts',options);
   // return null;
  }


  getAllPostsForPagination():any{
   
    let headers = new Headers({
       'Content-Type': 'application/json',
       'Access-Control-Allow-Origin':'*'
       });
    let options = new RequestOptions({ headers: headers });
    
   // headers.append('Content-Type', 'application/X-www-form-urlencoded');
      this.http.get('http://localhost:3000/posts',options).map(
      resp=>{
        console.log('********'+resp.json)
        return  resp.json();
      }
    );
   // return null;
  }
}
