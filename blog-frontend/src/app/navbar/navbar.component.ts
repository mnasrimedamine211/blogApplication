import { Component } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  inputValue = '';
  constructor(private searchService: SearchService) {}
  onValueChange(value: string ) {
    this.inputValue = value;
    this.searchService.updateData(value);
  }
}
