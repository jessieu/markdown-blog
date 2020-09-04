import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Post, BlogService } from '../blog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts : Post[];
  selectedPost : Post; // just for selected post highlight in css
  constructor(private blogService : BlogService,
    private router: Router,
    private route : ActivatedRoute) {
    this.posts = [];
   }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>
    this.blogService.fetchPosts().subscribe(res => {this.posts = res;}));
  }

  onSelect(post:Post) {
    this.selectedPost = post;
    this.blogService.setCurrentDraft(post);
    this.router.navigate(['edit', post.postid]);
  }

  newPost(){
    // create a new post
    this.blogService.newPost();
    // refresh current post lists
    this.blogService.fetchPosts().subscribe(res => {
      this.posts = res;
      // get the postid of newly created post
      this.posts.sort((a,b) => a.postid - b.postid);
      let id = this.posts[this.posts.length-1].postid;
      let newpost = this.blogService.getPost(id);
      // open edit panel
      this.blogService.setCurrentDraft(newpost);
      this.router.navigate(['edit', id]);
    });
  }

}
