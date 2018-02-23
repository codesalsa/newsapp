import { Component, OnInit } from '@angular/core';
import { NewsdataService } from '../../services/newsdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: any[];

  constructor(private newsdata: NewsdataService) {

  }

  ngOnInit() {

    this.newsdata.getAllPosts().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    })

  }

  openPost(postId){
    console.log(postId);
  }

}
