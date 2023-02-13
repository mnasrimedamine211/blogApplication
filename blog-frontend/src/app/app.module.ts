import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogService } from './blog.service';
import { BlogComponent } from './blog/blog.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchService } from './search.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    NavbarComponent,
    AddBlogComponent,
    BlogDetailsComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgChartsModule
  ],
  providers: [BlogService, SearchService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
