import { Component } from '@angular/core';
import { ApplicationGroup } from './models/application-group';
import { ApplicationGroupService } from './services/application-group.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stack-share';
  applicationGroups: Observable<ApplicationGroup[]>;

  constructor(appGroupService: ApplicationGroupService) {
    this.applicationGroups = appGroupService.getApplicationGroups(true);
  }

}
