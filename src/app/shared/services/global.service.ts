import { Character, Result } from './../models/result.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const url = environment.url_base;
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Promise<Character[] | undefined> {
    return new Promise((resolve) => {
      this.http
        .get<Result>(`${url}/character`)
        .pipe(
          tap((res) => {
            resolve(res.results);
          })
        )
        .subscribe();
    });
  }

  getCharacterById(id: number): Promise<Character | undefined> {
    return new Promise((resolve) => {
      this.http
        .get<Character>(`${url}/character/${id}`)
        .pipe(
          tap((character) => {
            resolve(character);
          })
        )
        .subscribe();
    });
  }
}
