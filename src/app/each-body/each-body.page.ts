import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BodiesData } from '../data.model';
import { DataService } from '../data.service';
import { StorageService } from '../storage.service';


@Component({
  selector: 'app-each-body',
  templateUrl: './each-body.page.html',
  styleUrls: ['./each-body.page.scss'],
})
export class EachBodyPage implements OnInit {
  body: BodiesData = {} as BodiesData;

  constructor(private data: DataService, private route: ActivatedRoute, private storageService: StorageService, private alertController: AlertController) { }

  ngOnInit() : void {
    let id_ = this.route.snapshot.params['id'];
    this.data.getBody(id_).subscribe(reData => {
      this.body = reData;
      this.storageService.getKeys().then((data) => {
        if (data.indexOf(id_) > -1) {
          this.body.favourite = true;
        } else {
          this.body.favourite = false;
        }
      });
    });
  }

  addFavourites() {
    if (this.body.favourite == true) {
      this.alertController.create({
        subHeader: 'Planetary body already added to favourites.',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
    else {
      this.storageService.addFavourite(this.body);
      this.alertController.create({
        subHeader: 'Planetary body added to favourites!!!',
        buttons: ['OK']
      }).then(alert => alert.present());
    }
  }
}
