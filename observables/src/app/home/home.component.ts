import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { Posts } from '../model/posts';
import { Observable } from 'rxjs/RX';
//import 'rxjs/add/operator/interval';
import { interval } from 'rxjs/observable/interval';
import { Http, RequestOptions ,Headers} from '@angular/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts:Posts[];
  constructor(private service:PostsService,private http:Http) { }
   unsubscribe:any;
  ngOnInit() {
    
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin':'*'
        });
     let options = new RequestOptions({ headers: headers });

     this.unsubscribe= Observable.interval(2000)
      .switchMap(() => this.http.get('http://localhost:3000/posts')).map((data) => data.json())
          .subscribe((data) => {
            this.posts=data; 
             console.log(data);// see console you get output every 5 sec
          });
  }

  Stop(){
    console.log('Stopping')
    this.unsubscribe.unsubscribe();
  }

}
