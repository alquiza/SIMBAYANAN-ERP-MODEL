import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-enterprise',
  templateUrl: './header-enterprise.component.html',
  styleUrls: ['./header-enterprise.component.scss']
})
export class HeaderEnterpriseComponent {

  appTitle = 'Enterprise Systems';
  enterpriseButton01 = 'Home';
  enterpriseButton02 = 'Login';
  enterpriseButton03 = 'Logout';

  enterpriseMenu01 = 'Human Resources';
  enterpriseMenu02 = 'Material Management';
  enterpriseMenu03 = 'Accounting Systems';
  enterpriseMenu04 = 'Production Systems';
  enterpriseMenu05 = 'Members Management';

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
