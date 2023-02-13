import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  form: any;
  blog: any
  constructor(blogService: BlogService) {
    this.blog = blogService
    this.form = new FormGroup(
      {
        title: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        author: new FormControl('', Validators.required),
      }
    )
  }
  onSubmit() {
    let element = {
      title : this.form.value.title,
      description: this.form.value.description,
      author: this.form.value.author

    }
    console.log("hello worlf" , element)
    this.blog.addBlog(element)
      .subscribe((res: any) => {
        console.log(res);
        this.form.reset();
      });
  }
}
