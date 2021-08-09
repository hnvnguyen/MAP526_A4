import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BodiesData } from '../data.model';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {
  favourites: BodiesData[];

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.storageService.getFavourites().subscribe(reData => this.favourites = reData);
  }

  deleteFavourite(favourite) {
    this.storageService.deleteFavourite(favourite);
    this.storageService.getFavourites().subscribe(reData => this.favourites = reData);
  }

  chooseBody(id) {
    console.log(id);
    this.router.navigate(['/each-body', id]).then(() => {
      window.location.reload();
    });
  }
}
