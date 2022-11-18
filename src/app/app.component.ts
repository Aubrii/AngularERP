import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'erp-biopura';
  private $event: any;

  onActivate($event: any) {
    this.$event = $event;
    console.log('test emit')
  }
}
