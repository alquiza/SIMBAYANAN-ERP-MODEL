import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent {

  appTitle = 'Enterprise Systems ';

  homeButton01 = 'Home';
  homeButton02 = 'Enterprise';
  homeButton03 = 'Login';
  homeButton04 = 'Logout';

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
  ) {}

  main() {
    this.router.navigate(['/']);
  }

  enterprise() {
    this.router.navigate(['enterprise']);
  }

  login() {
    this.router.navigate(['login']);

  }

  logout() {

  }
    
}
