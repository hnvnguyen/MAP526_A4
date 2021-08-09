import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable, of } from 'rxjs';
import { BodiesData } from './data.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private data: DataService) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public addFavourite(body: BodiesData) {
    body.favourite = true;
    this._storage.set(body.id, body);
    this.data.updateBody(body);
  }

  public getFavourites() : Observable<BodiesData[]>{
    var favourites: BodiesData[] = [];
    if (this._storage != null) {
      this._storage.forEach((value, key, index) => {
        favourites.push(value as BodiesData);
    });
  }
    return of(favourites);
  }
  
  public async getKeys() : Promise<string[]> {
    return await this._storage.keys();
  }

  public async deleteFavourite(body: BodiesData){
    await this._storage.remove(body.id).then(() => {
      body.favourite = false;
      this.data.updateBody(body);
    });
  }

}
