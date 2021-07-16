import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/shared/models/result.interface';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  public character!: Character | undefined;
  constructor(
    private ruta: ActivatedRoute,
    private globalService: GlobalService
  ) {}

  ngOnInit(): void {
    this.getCharacterById();
  }

  async getCharacterById(): Promise<void> {
    const id: number = this.ruta.snapshot.params.id;

    this.character = await this.globalService.getCharacterById(Number(id));
  }
}
