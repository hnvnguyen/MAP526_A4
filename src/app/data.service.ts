import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { BodiesData } from './data.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  bodies: BodiesData[] = [];
  constructor(private http: HttpClient) { }

  getBodiesAll(): Observable<BodiesData[]> {
    return this.http.get<any>(`https://api.le-systeme-solaire.net/rest/bodies/?data=id,name,englishName`)
    .pipe(map(resultData => {
      resultData.bodies.forEach((element) => {
        this.bodies.push(element);
      });
      return this.bodies;
    }));
  }

  getBody(id: any) : Observable<BodiesData> {
    return this.http.get<any>(`https://api.le-systeme-solaire.net/rest/bodies/${id}/?data=id,name,englishName,isPlanet,semimajorAxis,density,gravity,discoveryDate,discoveredBy`)
    .pipe(map(reData => {
      return reData;
    }));
  }

  updateBody(body: BodiesData) {
    this.bodies.forEach((each, index) => {
      if (each.id == body.id) {
        this.bodies[index].favourite = body.favourite;
      }
    })
  }
}
