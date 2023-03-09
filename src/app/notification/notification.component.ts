import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success"]>
    <p>This site keeps cookies for better user experience.</p>
  </div>`,
  styles: ['.notification-div{ font-family:italic; background-color:green}', 'p{font-family:bold; text-align:center}']
})
export class NotificationComponent {

}
