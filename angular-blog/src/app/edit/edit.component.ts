import { Component, OnInit } from '@angular/core';
import { Post, BlogService } from '../blog.service'
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  post : Post; // hold the copy of current editing post
  userForm : FormGroup;
  modified : Date;
  constructor(private blogService : BlogService,
    private route : ActivatedRoute,
    private router : Router){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.getPost());
  }

  getPost():void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (this.blogService.getCurrentDraft()) {
      this.blogService.getCurrentDraft().subscribe(draft => {
        console.log(draft);
        if (draft != null) {
          this.post = draft;
        }
      });
    }
    if (this.post == null || this.post.postid !== id) {
      this.post = this.blogService.getPost(id);
    }
    if (this.post) {
      console.log(this.post);
      this.modified = this.post.modified;
      this.userForm = new FormGroup({
        title: new FormControl(this.post.title),
        body: new FormControl(this.post.body)
      })
      this.userForm.valueChanges.subscribe(data => {
        this.post.title = data.title;
        this.post.body = data.body;
        this.blogService.setCurrentDraft(this.post);
      });
    }
  }

  delete(){
    this.blogService.deletePost(this.post.postid);
    this.router.navigate(['']);
  }

  save(){
    this.blogService.updatePost(this.post);
    this.modified = new Date();
    this.userForm.markAsPristine();
  }

  preview(){
    this.blogService.setCurrentDraft(this.post);
    this.router.navigate(['/preview', this.post.postid]);
  }

}
