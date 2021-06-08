import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-admin-layout-nav',
  templateUrl: './admin-layout-nav.component.html',
  styleUrls: ['./admin-layout-nav.component.scss']
})
export class AdminLayoutNavComponent {

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}
