import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-add-posts',
	standalone: true,
	imports: [RouterLink, FormsModule],
	templateUrl: './add-posts.component.html',
	styleUrl: './add-posts.component.css'
})
export class AddPostsComponent implements OnInit {

	// variables
	post: Post = { userId: 0, id: 0, title: '', body: '' };
	id: number = 0;
	size: number = 0;

	// constructor
	constructor(
		private postService: PostService,
		private router: Router,
		private route: ActivatedRoute
	) { }

	// inicializar
	ngOnInit(): void {
		// obtener el parametro "id" de la ruta, convertir en numérico
		this.id = +this.route.snapshot.paramMap.get('id')!;

		// obtener la cantidad de registros, en la variable "size"
		this.getSizePost();

		// si el registro existe, obtener sus datos
		if (this.id != 0) {
			this.postService.getPost(this.id).subscribe(
				(data) => {
					this.post = data;
				}
			)
		}
	}

	// grabar datos
	savePost(): void {
		this.post.id = this.size;

		if (this.id == 0) {
			// grabar un nuevo registro
			this.post.id = this.size + 1;
			console.log('nuevo id: ', this.post.id);
			this.postService.postPost(this.post).subscribe(
				() => {
					this.router.navigate(['/posts']);
				}
			)
		} else {
			// actualizar un registro existente
			this.postService.putPost(this.id, this.post).subscribe(
				() => {
					this.router.navigate(['/posts']);
				}
			)
		}
	}

	// obtener el numero de registros de la tabla "posts"
	getSizePost(): void {
		this.postService.getPosts().subscribe(
			(data) => {
				this.size = data.length;
			}
		)
	}

	// eliminar un registro
	deletePost(id: number): void {
		this.postService.deletePost(id).subscribe(
			() => {
				this.router.navigate(['posts']);
			}
		)
	}
}
