import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-networth',
  templateUrl: './networth.component.html',
  styleUrls: ['./networth.component.less']
})
export class NetworthComponent implements OnInit {

  @Input()
  assets:number = 0;
  @Input()
  liabilities: number = 0;

  assetPercent = "50%";

  constructor() { }

  ngOnInit(): void {
    
    this.caculate()
  }

  caculate(){
    if(this.assets!=0){
      let percent = ((this.assets)/(this.assets+this.liabilities)) * 100;
      this.assetPercent = percent+"%";
    }
  }

}

