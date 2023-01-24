import { Component, OnInit, Input } from '@angular/core';
import { ApplicationGroup } from 'src/app/models/application-group';

@Component({
  selector: 'stsh-main-nav-item',
  templateUrl: './main-nav-item.component.html',
  styleUrls: ['./main-nav-item.component.scss']
})
export class MainNavItemComponent implements OnInit {

  @Input() applicationGroup?: ApplicationGroup;


  constructor() { }

  ngOnInit(): void {
  }

}
