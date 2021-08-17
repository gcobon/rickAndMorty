import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public items!: MenuItem[];
  public activeItem!: MenuItem;

  constructor() {}

  ngOnInit(): void {
    this.initMenu();
  }

  initMenu(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'About', icon: 'pi pi-fw pi-calendar', routerLink: 'about' },
    ];
    this.activeItem = this.items[0];
  }
}
