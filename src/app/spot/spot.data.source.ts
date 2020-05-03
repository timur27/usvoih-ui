import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Spot} from '../api/spot';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {SpotService} from './spot.service';
import {catchError, finalize} from 'rxjs/operators';

export class SpotDataSource implements DataSource<Spot> {

  private spotsSubject = new BehaviorSubject<Spot[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public data;

  constructor(private spotsService: SpotService) {}

  connect(collectionViewer: CollectionViewer): Observable<Spot[] | ReadonlyArray<Spot>> {
    return this.spotsSubject.asObservable();
  }

  disconnect(collectionViewer: CollectionViewer): void {
    this.loadingSubject.complete();
    this.spotsSubject.complete();
  }

  loadSpots() {
    this.loadingSubject.next(true);

    this.spotsService.findSpots()
      .pipe(catchError(() => of([])), finalize(() => this.loadingSubject.next(false)))
      .subscribe(spots => {
        this.spotsSubject.next(spots);
        this.data = spots;
      });
  }
}
