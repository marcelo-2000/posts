import { Routes } from '@angular/router';
import { AddPostsComponent } from './components/add-posts/add-posts.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { HomeComponent } from './components/home/home.component';
import { ShowPostsComponent } from './components/show-posts/show-posts.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'posts', component: ListPostsComponent },
    { path: 'posts/show/:id', component: ShowPostsComponent },
    { path: 'posts/add', component: AddPostsComponent },
    { path: 'posts/edit/:id', component: AddPostsComponent },
];
