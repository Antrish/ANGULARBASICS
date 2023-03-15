import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeOut:ShowNotification}">
    This site keeps cookies for better user experience.
    <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
  </div>`,
  styles: ['.notification-div{ font-family:italic; background-color:green}',
           '.close{float:right; margin-top:-15px}', 'p{font-family:bold; text-align:center}',
           '.fadeOut {visibility: hidden; opacity: 0; transition: visibility 0s 2s, opacity 2s linear;}']
})
export class NotificationComponent {
  ShowNotification:boolean=false;
  closeNotification(){
    this.ShowNotification = true
  }

}

// background-color:red; opacity:0; transition: visibility 0 10s, opacity 10s linear;