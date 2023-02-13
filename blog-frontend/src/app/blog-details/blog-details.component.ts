import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  pieChart: any
  id: string;
  currentBlog: any | null
  blog: any
  constructor(private route: ActivatedRoute, blogService: BlogService) {
    let data = this.route.snapshot.params['id'];
    this.id = data ? data : ""
    this.blog = blogService;

  }
  ngOnInit() {

    this.blog.getBlogById(this.id)
      .subscribe((item: any) => {
        console.log(item)
        this.currentBlog = item
        this.drawChart(item)

      });

  }
  drawChart(blog: any) {
    console.log(blog.likes, blog.dislikes)
    this.pieChart = new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['likes', 'dislikes'],
        datasets: [{
          label: 'value:',
          data: [blog.likes, blog.dislikes],
          backgroundColor: ['green', 'red'],
        }]
      },
      options: {
        responsive: true,
      }
    })
  }
  updateChartData(likes: number, dislikes: number) {
    this.pieChart.data.datasets[0].data[0] = likes;
    this.pieChart.data.datasets[0].data[1] = dislikes;
    this.pieChart.update();
  }
  dislike(idBlog: string) {
    this.blog.dislikeBlog(idBlog)
      .subscribe((item: any) => {
        console.log(item)
        this.currentBlog = item
        this.updateChartData(item.likes, item.dislikes)
      });
  }
  like(idBlog: string) {
    this.blog.likeBlog(idBlog)
      .subscribe((item: any) => {
        console.log(item)
        this.currentBlog = item
        this.updateChartData(item.likes, item.dislikes)
      });
  }


}
