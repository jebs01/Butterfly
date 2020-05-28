import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorApp-SPA';

  menuItems: MenuItem[];

  ngOnInit() {
    
    this.menuItems = [
      {label: 'About', icon: 'fa fa-home', routerLink: ['/about']},
      {label: 'Calculate', icon: 'fa fa-calculator', routerLink: ['/calculate']},
      {label: 'View', icon: 'fa fa-clock-o', routerLink: ['/view']},
      {label: 'Info', icon: 'fa fa-tasks', routerLink: ['/info']},
    ]

}
}
