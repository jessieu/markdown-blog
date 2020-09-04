import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Parser, HtmlRenderer } from 'commonmark';
import { Post, BlogService } from '../blog.service';
import { HtmlParser } from '@angular/compiler';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  post : Post;
  title : string;
  body : string;
  constructor(
    private blogService : BlogService,
    private route : ActivatedRoute,
    private router : Router
    ) {
     }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => this.getPost());
  }

  getPost(): void {
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

    console.log(this.post.title);
    // convert to markdown
    if (this.post) {
      let writer = new HtmlRenderer();
      let reader = new Parser();
      this.title = writer.render(reader.parse(this.post.title));
      this.body = writer.render(reader.parse(this.post.body));
    }
  }

  edit() {
      this.router.navigate(['/edit', this.post?.postid]);
  }

}
