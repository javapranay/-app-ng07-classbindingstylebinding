import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  public backColor :any;
  public textColor :any;
  
  constructor() { }

  ngOnInit(): void {
  }

  public effects() {
    let styles = {
      'background-color':this.backColor,
      'text-align':'center',
      'color' : this.textColor
    }
    return styles;
  }

}
