import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BodiesData } from '../data.model';
import { DataService } from '../data.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-all-bodies',
  templateUrl: './all-bodies.page.html',
  styleUrls: ['./all-bodies.page.scss'],
})
export class AllBodiesPage implements OnInit {
  bodies: BodiesData[];

  constructor(private data: DataService, private router: Router, private storageService: StorageService, private alertController: AlertController) {}

  ngOnInit() : void {
    this.data.getBodiesAll().subscribe(reData => {
      this.bodies = reData;
      this.storageService.getKeys().then((data) => {
        this.bodies.forEach((element, index) => {
          if (data.indexOf(element.id) > -1) {
            element.favourite = true;
          } else {
            element.favourite = false;
          }
        });
      });
    });
  }

  chooseBody(id) {
    console.log(id);
    this.router.navigate(['/each-body', id]).then(() => {
      window.location.reload();
    });
  }
}
