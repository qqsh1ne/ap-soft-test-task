import {Injectable} from '@angular/core';
import {delay, Observable, retry, share, Subject, switchMap, takeUntil, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private getRandomPercent: () => number = () => Math.floor(Math.random() * 100)

  private getCompData = () => {
    const [cp, memory, disk, network] = Array.from({length: 4}, () => this.getRandomPercent());
    return {cp, memory, disk, network}
  }

  private test = () => [
    {name: 'prog 1', ...this.getCompData()},
    {name: 'prog 2', ...this.getCompData()},
    {name: 'prog 3', ...this.getCompData()},
    {name: 'prog 4', ...this.getCompData()},
    {name: 'prog 5', ...this.getCompData()},
  ]

  getData(): any {
    return timer(1, 10000).pipe(
      switchMap(() =>
        [
          {name: 'prog 1', ...this.getCompData()},
          {name: 'prog 2', ...this.getCompData()},
          {name: 'prog 3', ...this.getCompData()},
          {name: 'prog 4', ...this.getCompData()},
          {name: 'prog 5', ...this.getCompData()},
        ]
      )
    );
    // return [
    //   {name: 'prog 1', ...this.getCompData()},
    //   {name: 'prog 2', ...this.getCompData()},
    //   {name: 'prog 3', ...this.getCompData()},
    //   {name: 'prog 4', ...this.getCompData()},
    //   {name: 'prog 5', ...this.getCompData()},
    // ]
  }

  constructor() {
  }
}
