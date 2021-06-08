import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { GeneralOptionService } from './core/service/api/general-option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-skeleton';
  private iconList: Array<{name: string, src: string}>;
  constructor(
    private gs : GeneralOptionService,
    private matIconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ){
    this.iconList = this.gs.getIcons();
    this.createIconList();
  }
  createIconList() {
    const baseName = 'icon_vnpt_';
    const baseSrc = 'assets/icons/';
    const baseType = '.svg';
    this.iconList.forEach(icon =>
      this.matIconRegistry.addSvgIcon(baseName + icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(baseSrc + icon.src + baseType)));
  }

}
