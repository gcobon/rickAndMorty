import { Character, Result } from './../models/result.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

const url = environment.url_base;
@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private pageBS = new BehaviorSubject<number>(1);

  page$ = this.pageBS.pipe(map((page) => ({ page })));

  constructor(private http: HttpClient) {}

  getAllCharacters(page: number): Promise<Result> {
    return new Promise((resolve) => {
      this.http
        .get<Result>(`${url}/character`, { params: { page } })
        .pipe(
          tap((res) => {
            resolve(res);
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

  nextPage(): void {
    this.pageBS.next(this.pageBS.value + 1);
  }

  prevPage(): void {
    this.pageBS.next(this.pageBS.value - 1);
  }

  resetPage(): void {
    this.pageBS.next(1);
  }
}
