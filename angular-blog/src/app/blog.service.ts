// Reference: https://stackoverflow.com/questions/48041597/angular-4-updating-view-on-array-push
import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;

  constructor(post:Post) {
    this.postid = post && post.postid || 0;
    this.created = post && new Date(post.created) || new Date();  // Date(value/Date)
    this.modified = post && new Date(post.modified) || new Date();
    this.title = post && post.title || '';
    this.body = post && post.body || '';
  }
}

@Injectable()
export class BlogService {
  private apiRoot = '/api';
  private posts : Post[];
  private draft : Post;
  // shared data
  private _draft = new Subject<Post>();
  private _postList = new Subject<Post[]>();
  postList$ = this._postList.asObservable();
  draft$ = this._draft.asObservable();

  constructor(private http: HttpClient) {
    this.posts = [];
    this.notify();
  }

  fetchPosts(): Observable<Post[]> {
    this.getAllPosts();
    return this.postList$;
  }

  getAllPosts(): void {
    this.posts = [];
    // Here, get our data from the API.
    let apiURL = `${this.apiRoot}/${this.getUsername()}`;
    this.http.get<Post[]>(apiURL).pipe(
      catchError(err => {
        return throwError(err);
    })).subscribe(
      res => {
      // We update data with what comes back, and call notify again
      // so that the observable emits the latest data
      res.forEach(element => {
        this.posts.push(new Post(element));
      });
      this.notify();
    },
      err => {
        console.error(err);
      }
    );
  }

  getPost(postid:number): Post {
    return this.posts.find(post => {
      if (post.postid == postid) {
        return post;
      }
  });
  }

  newPost(): void {
    // Here we are updating the API
    let id = this.getNextId();
    let apiURL = `${this.apiRoot}/${this.getUsername()}/${id}`
    let post: Post = { 'postid': id, 'created': new Date(), 'modified': new Date(), 'title': '', 'body': '' };
    this.http.post<Post>(apiURL,
      {title:'', body:''}).subscribe(
        res => {
        // The API returns our newly created item, so append it to data, and
        // call notify again to update the observable
        this.posts.push(res);
        this.notify();
      },
      err => {
        if (err.status == 201){
          console.log();
        } else {
          console.error(err);
          this.posts.splice(this.posts.length - 1, 1);
        }
        // this.notify();
      }
    )

  }

  updatePost(post:Post):void {
    let apiURL = `${this.apiRoot}/${this.getUsername()}/${post.postid}`;
    this.http.put<Post>(apiURL,
      {title: post.title, body: post.body}
    ).subscribe(
      res => {
        // update the old item and replace
        let oldItem = this.getPost(post.postid);
        if (oldItem) {
          let index = this.posts.indexOf(oldItem);
          this.posts[index].title = post.title;
          this.posts[index].body = post.body;
          this.posts[index].modified = new Date();
        }
        // update observable
        this.notify();
      },
      err => {
        if (err.status == 200){
          console.log();
        } else {
          console.error(err);
        }
        this.notify();
      }
    );
  }

  deletePost(postid:number):void {
    let apiURL = `${this.apiRoot}/${this.getUsername()}/${postid}`;
    this.http.delete<Post>(apiURL).subscribe(
      res => {
        // remove item from posts
        let oldItem = this.getPost(postid);
        if (oldItem){
          let index = this.posts.indexOf(oldItem);
          this.posts.splice(index, 1);
        }
      },
      err => {
        if (err.status == 204){
          console.log();
        } else {
          console.error(err);
        }
      }
    );
    // update observable
    this.notify();
  }

  // publish the change to all subscribers
  setCurrentDraft(post: Post): void {
    this._draft.next(post);
  }

  // returns the draft saved in the earlier setCurrentDraft() call
  getCurrentDraft(): Observable<Post> {
    return this.draft$;
  }

  private notify() {
    // Call next on the subject with the latest data
    this._postList.next(this.posts);
  }

  /*------- Helper functions for fetching verfied username from jwt------- */
  // parse the encoded sequence
  parseJWT(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }

  // get the encoded sequence from cookie "jwt=<encoded>"
  getEncoded(name:string) {
    let cookie = document.cookie;
    let parts = cookie.split(name + "=");
    if (parts.length == 2)
      return parts[1];
  }

  getUsername() {
    return this.parseJWT(this.getEncoded('jwt')).usr;
  }

  getNextId() : number {
   let nextId = this.posts[this.posts.length -1].postid + 1;
   return nextId;
  }

}

