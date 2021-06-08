import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneralOptionService {
  
  private iconList: Array<{ name: string, src: string }>;
  constructor() { }
  getIcons() {
    this.iconList = [{
      name: 'accessibility', src: 'accessibility'
    }]
    return this.iconList;
  }
}
