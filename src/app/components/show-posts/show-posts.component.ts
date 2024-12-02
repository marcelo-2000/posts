import { Component } from '@angular/core';
import { Post } from '../../interfaces/post';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostService } from '../../services/post.service';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-show-posts',
    standalone: true,
    imports: [ RouterLink, UpperCasePipe],
    templateUrl: './show-posts.component.html',
    styleUrl: './show-posts.component.css'
})
export class ShowPostsComponent {

    // variables
    post: Post = { userId: 0, id: 0, title: '', body: '' };

    // constructor
    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
    ) { };

    // inicializar
    ngOnInit(): void {
        // obtener el parametro "id" de la ruta
        const id = +this.route.snapshot.paramMap.get('id')!;

        // llamar a un metodo
        this.dataPost(id);
    }

    // obtener datos
    dataPost(id: number) {
        this.postService.getPost(id).subscribe(
            (data) => {
                this.post = data;
            }
        )
    }
}
