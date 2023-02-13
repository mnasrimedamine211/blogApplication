import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '', component: BlogComponent,
  },
  {
    path: '#', component: BlogComponent,
  },
  {
    path: 'blog', component: BlogComponent,
  },
  { path: 'addBlog', component: AddBlogComponent },
  {
    path : 'blogDetails/:id' , component: BlogDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
