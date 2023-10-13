import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  getCardClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <=768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return '';
  }

}
