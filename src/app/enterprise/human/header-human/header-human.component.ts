import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-human',
  templateUrl: './header-human.component.html',
  styleUrls: ['./header-human.component.scss']
})
export class HeaderHumanComponent {

  appTitle = 'Enterprise Systems';
  
  humanButton01 = 'Home';
  humanButton02 = 'Login';
  humanButton03 = 'Logout';

  humanMenu01 = 'Human Resources';
  humanMenu02 = 'Material Management';
  humanMenu03 = 'Accounting Systems';
  humanMenu04 = 'Production Systems';
  humanMenu05 = 'Members Management';

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

  login() {
    this.router.navigate(['login']);
  }

  logout() {
    this.router.navigate(['/']);
  }

  employee() {
    this.router.navigate(['employees']);
  }

  material() {
    this.router.navigate(['materials']);
  }

  accounting()  {
    this.router.navigate(['']);
  }

  production()  {
    this.router.navigate(['']);
  }

  member()  {
    this.router.navigate(['']);
  }

}
