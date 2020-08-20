import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Spot} from '../api/spot';
import {map} from 'rxjs/operators';

@Injectable()
export class SpotService {

  localUrl = 'http://localhost:8081/';
  remoteUrl = 'http://usvoih-env.eba-qzqbgpp4.us-east-2.elasticbeanstalk.com/';

  constructor(private http: HttpClient) {
  }

  findSpots(): Observable<Spot[]> {
    return this.http.get(this.remoteUrl + 'spots/unapproved')
      .pipe(
        map((data: any[]) =>
          data.map(
            (item: any) => new Spot(item.id, item.name, item.description, item.address, item.type, item.contact, item.coverPhoto, item.photos, item.overallRating, item.businessHours, item.ratings, item.tags)
          ))
      );
  }

  actionOnSpots(spots: Spot[], actionName: string): Observable<any>{
    const options = {headers: new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')};
    return this.http.post(this.remoteUrl + 'spots/' + actionName, spots, options);
  }
}
