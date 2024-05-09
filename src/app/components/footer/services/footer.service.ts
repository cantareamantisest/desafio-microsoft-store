import { Injectable } from '@angular/core';
import { NavGroup } from '../interfaces/navgroup';
import { Observable, of } from 'rxjs';
import { navGroups } from '../data/dataFooterFake';

@Injectable({
  providedIn: 'root',
})
export class FooterService {
  constructor() {}

  generateNavFooter(): Observable<NavGroup[]> {
    return of(navGroups);
  }
}
