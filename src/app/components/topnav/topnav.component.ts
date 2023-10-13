import { Component, HostListener, Input, OnInit } from '@angular/core';
import { languages } from './topnav-data';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  canShowSearchAsOverLay = false;
  selectedLanguage: any;

  languages = languages;

  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverLay(window.innerWidth);
  }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverLay(window.innerWidth);
    this.selectedLanguage = this.languages[0];
  }

  getTopClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'top-trimmed';
    } else {
      styleClass = 'top-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverLay(innerWidth: number): void {
    if(innerWidth < 845) {
      this.canShowSearchAsOverLay = true;
    } else {
      this.canShowSearchAsOverLay = false;
    }
  }
}
