import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as CustomBuild from '../builds-here/build/ckeditor';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {

  public Editor = CustomBuild;

  constructor() { }

  ngOnInit(): void {
    console.log('sheesh');
  }

}
