import { Component } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  inputValue = '';
  constructor(private router: Router, private searchService: SearchService) { }
  onValueChange(value: string) {
    this.inputValue = value;
    this.searchService.updateData(value);
  }
}
