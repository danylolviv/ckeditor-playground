import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as buildDeux from '../../builds-here/build/ckeditor'

@Component({
  selector: 'app-build1-deux',
  templateUrl: './build-deux.component.html',
  styleUrls: ['./build-deux.component.scss']
})
export class BuildDeuxComponent implements OnInit {

  public Editor = buildDeux;

  constructor() { }

  ngOnInit(): void {
  }

}
