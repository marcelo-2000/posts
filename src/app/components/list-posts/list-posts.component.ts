import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';
import { PostService } from '../../services/post.service';
import { Router, RouterLink } from '@angular/router';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-list-posts',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent {

  // variable para almacenar datos
  public posts: Post[] = [];

  // constructor
  constructor(
    private postService:PostService,
    private router: Router,
  ) { }

  // metodo de inicio
  ngOnInit(): void {
    this.listPosts();
  }

  // metodo para obtener listado
  listPosts() {
    this.postService.getPosts().subscribe(
      result => {
        this.posts = result;
      }
    )
  }

  // metodo para eliminar un registro
  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe(
      () => {
        alert('Registro eliminado ' + id);
        this.listPosts();
        //this.router.navigate(['/posts']);
      }
    )
  }
}
