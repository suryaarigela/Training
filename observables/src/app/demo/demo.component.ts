import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/RX';
//import 'rxjs/add/observable/combinedLatest';
import  'rxjs/RX'
import { PostsService } from '../posts.service';
import { Posts } from '../model/posts';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor(private route:ActivatedRoute,private postsService:PostsService) { }
  posts:Posts[];
  ngOnInit() {

    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).switchMap(
      combined=>{
        let id=combined[0].get['id'];
        console.log('param is '+combined[0].get['id']);
        let page=combined[1].get['page'];
        console.log('queryparam is '+combined[1].get['page']);
        return this.postsService.getAllPostsForPagination();
      }
    ).
    subscribe(
       response =>{
           console.log('Response from posts ',response);
       }
    )


//    let param=this.route.snapshot.paramMap.get('id');
   // console.log('param is '+param);

    //let queryparam=this.route.snapshot.queryParamMap.get('debug');
    //console.log('queryparam is '+queryparam);
  }



}
