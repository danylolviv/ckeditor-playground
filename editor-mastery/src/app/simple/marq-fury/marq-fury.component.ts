import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as CustomBuild from '../../builds-here/build/ckeditor';

@Component({
  selector: 'app-marq-fury',
  templateUrl: './marq-fury.component.html',
  styleUrls: ['./marq-fury.component.scss']
})
export class MarqFuryComponent implements OnInit {

  public Editor = CustomBuild;

  constructor() { }

  ngOnInit(): void {
  }

}
