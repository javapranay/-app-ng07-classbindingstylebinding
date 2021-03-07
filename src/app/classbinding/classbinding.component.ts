import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

  public effects: any;
  public isBackStyle = false;
  public isTextStyle = false;
  public isBorderStyle = false;

  constructor() { }

  ngOnInit(): void {
  }

}
