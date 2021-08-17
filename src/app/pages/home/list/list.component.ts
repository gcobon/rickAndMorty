import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Character, Result } from 'src/app/shared/models/result.interface';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public result!: Result;
  public characters!: Character[];
  public page!: number;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.subsPage();
  }

  subsPage(): void {
    this.globalService.page$
      .pipe(
        tap(async (value) => {
          this.page = value.page;
          await this.onGetCharacters();
        })
      )
      .subscribe();
  }

  async onGetCharacters(): Promise<void> {
    this.result = await this.globalService.getAllCharacters(this.page);
    this.characters = this.result.results!;
  }

  prev(): void {
    this.globalService.prevPage();
  }

  next(): void {
    this.globalService.nextPage();
  }

  onResetPages(): void {
    this.globalService.resetPage();
  }
}
