import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: 'score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  no = 0;
  up(){
    this.no +=1;
    console.log(this.no +1);
  }

  down(){
    if(this.no-1 <1){
      this.no = 1;
      console.log('item_1->' + this.no)
    }
    else{
      this.no -=1;
      console.log('item_2->'  + this.no);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
