import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private dataSource = new Subject<string>();
  data$ = this.dataSource.asObservable();
  updateData(value: string) {
    this.dataSource.next(value);
  }
}
