import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="ShowNotification">
    This site keeps cookies for better user experience.
    <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
  </div>`,
  styles: ['.notification-div{ font-family:italic; background-color:green}', '.close{float:right; margin-top:-15px}', 'p{font-family:bold; text-align:center}']
})
export class NotificationComponent {
  ShowNotification:boolean=false;
  closeNotification(){
    this.ShowNotification = true
  }

}
