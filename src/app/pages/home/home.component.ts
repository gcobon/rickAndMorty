import { tap } from 'rxjs/operators';
import { GlobalService } from 'src/app/shared/services/global.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public items!: MenuItem[];
  public activeItem!: MenuItem;
  public page!: number;
  private subs!: Subscription;


  constructor(private globalService: GlobalService) {}

  ngOnDestroy(): void {
      this.subs.unsubscribe();
  }

  ngOnInit(): void {
    this.subsPage();
    this.initMenu();
  }

  initMenu(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/' },
      { label: 'About', icon: 'pi pi-fw pi-calendar', routerLink: 'about' },
    ];
    this.activeItem = this.items[0];
  }

  subsPage(): void {
    this.subs = this.globalService.page$
      .pipe(tap((value) => (this.page = value.page)))
      .subscribe();
  }
}
