import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clickeventhomework',
  templateUrl: './clickeventhomework.component.html',
  styleUrls: ['./clickeventhomework.component.css']
})
export class ClickeventhomeworkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSend(myvalue:string){
    console.log(myvalue)
  }

}
