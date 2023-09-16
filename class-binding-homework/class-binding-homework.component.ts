import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding-homework',
  templateUrl: './class-binding-homework.component.html',
  styleUrls: ['./class-binding-homework.component.css']
})
export class ClassBindingHomeworkComponent implements OnInit {
  inputText = '';
  isItalic = false;
  isRed = false;

  applyStyle() {
    this.isItalic = true;
    this.isRed = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
