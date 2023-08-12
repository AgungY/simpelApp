import { Component } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  info: any = {};
  saveData() {
  console.log(this.info);
  }
  scorePage() {
    this.route.navigate(['/score']);
   }
  constructor(private route: Router) {}

}
