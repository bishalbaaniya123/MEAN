import {Component, Input} from '@angular/core';
import {Post} from '../post.model';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
/*  posts = [
    {title: 'first Post', content: 'This is the first post\'s content'},
    {title: 'second Post', content: 'This is the second post\'s content'},
    {title: 'third Post', content: 'This is the third post\'s content'}
  ];*/
  @Input() posts: Post[] = [];
  constructor(postsService: PostService){

  }
}

