import { environment } from './../../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-default-layout-nav',
  templateUrl: './default-layout-nav.component.html',
  styleUrls: ['./default-layout-nav.component.scss']
})
export class DefaultLayoutNavComponent implements OnInit {

  debugRouter;
  ngOnInit(): void {
    this.debugRouter = environment.debugRouter;
    console.log(this.debugRouter);
    
    
  }

  login(): void {

  }

  logout(): void {

  }

}
