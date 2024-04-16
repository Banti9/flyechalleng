import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  pageSizeOptions: number[] = [10, 25, 50, 100];
  pageSize$: BehaviorSubject<number> = new BehaviorSubject<number>(10);

  constructor() { }
  setPageSize(pageSize: number): void {
    this.pageSize$.next(pageSize);
  }

}
