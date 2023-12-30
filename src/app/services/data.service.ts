import {Injectable} from '@angular/core';
import {delay, Observable, ReplaySubject, retry, share, Subject, switchMap, takeUntil, timer} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // sbj = new ReplaySubject();

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

  getData(): void {
    // setInterval(() => {
    //   this.sbj.next(this.getRandomPercent())
    // }, 3000)
  }

  constructor() {

  }
}
