import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';

import { ApiService, IProject } from '../api.service';

@Injectable( {
  providedIn: 'root'
} )
export class ProjectResolverService implements Resolve<IProject>{

  constructor( private apiService: ApiService, private router: Router, private location: Location ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<IProject> {
    let id = route.paramMap.get( 'id' );
    return this.apiService.getProject( id ).pipe(
      take( 1 ),
      catchError( err => {
        return of( null );
      } )
    );
  }
}
