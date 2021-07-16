import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/shared/models/result.interface';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public characters!: Character[] | undefined;

  constructor(private globalService: GlobalService) {}

  ngOnInit(): void {
    this.onGetCharacters();
  }

  async onGetCharacters(): Promise<void> {
    this.characters = await this.globalService.getAllCharacters();
  }
}
