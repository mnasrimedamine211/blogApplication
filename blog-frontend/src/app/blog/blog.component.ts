import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { SearchService } from '../search.service';


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  // title of page
  title = 'list of blogs'
  blog: any
  // id of a blog 
  id: string = "";
  // search input from navbar
  search: string | undefined;
  //filter blogs by user write 
  filteredArray: any[] | undefined;
  //list of blogs
  ListBlog: any
  constructor(
    private searchService: SearchService,
    blogService: BlogService,
    private router: Router
  ) {
    this.blog = blogService
    // read onchange of search
    this.searchService.data$.subscribe(data => {
      this.search = data;
      this.filterArray();
    });
    // get all List from data base


  }
  ngOnInit() {
    this.blog.getBlogs()
      .subscribe((blogs: any) => {
        this.ListBlog = blogs;
      });
  }
  //filter function 
  filterArray() {
    this.filteredArray = this.ListBlog?.filter((item: any) => {
      return item.title.toLowerCase().includes(this.search?.toLowerCase()) ||
        item.description.toLowerCase().includes(this.search?.toLowerCase()) ||
        item.author.toLowerCase().includes(this.search?.toLowerCase());
    });
    console.log(this.filteredArray)
  }
  // add id to url
  goToPageWithData(id: any) {
    this.router.navigate(['/blogDetails', id]);
  }

  // navigate to blog details
  openBlog(value: string) {
    console.log(value)
    this.goToPageWithData(value);
  }
  // like and dislike function 
  like(idBlog: string) {
    this.blog.likeBlog(idBlog)
      .subscribe((item: any) => {
        this.blog.getBlogs()
          .subscribe((blogs: any) => {
            this.ListBlog = blogs;
          });

      });
  }
  dislike(idBlog: string) {
    this.blog.dislikeBlog(idBlog)
      .subscribe((item: any) => {
        this.blog.getBlogs()
          .subscribe((blogs: any) => {
            this.ListBlog = blogs;
          });
      });
  }
}
