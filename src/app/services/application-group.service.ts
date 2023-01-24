import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplicationGroup } from '../models/application-group';

@Injectable({
  providedIn: 'root'
})
export class ApplicationGroupService {
  private firebaseUrl = 'https://your-firebase-url.com/applicationGroups';
  private mockUrl = '../../assets/mocks/application-group.mock.json';

  constructor(private http: HttpClient) {}

  getApplicationGroups(useMock: boolean): Observable<ApplicationGroup[]> {
    if (useMock) {
      return this.http.get<ApplicationGroup[]>(this.mockUrl);
    } else {
      return this.http.get<ApplicationGroup[]>(this.firebaseUrl);
    }
  }
}