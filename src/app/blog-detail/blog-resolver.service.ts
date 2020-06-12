import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, catchError } from 'rxjs/operators';

import { ApiService, IBlogPost } from '../api.service';

@Injectable( {
  providedIn: 'root'
} )
export class BlogResolverService implements Resolve<IBlogPost>{

  constructor( private apiService: ApiService, private router: Router ) { }

  resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<IBlogPost> | Observable<never> {
    let id = route.paramMap.get( 'id' );
    return this.apiService.getBlogPost( id ).pipe(
      take( 1 ),
      catchError( err => {
        return of( null );
      } )
    );
  }
}
