import { ApiService } from './../service/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(private ApiService:  ApiService) {
    // this.createcall();
    this.listCall();
    // this.updateCall();
    // this.deleteCall();
  }


  listCall() {
    this.ApiService.listcall().subscribe(data => {
      console.log(data);
    });
  }
}
