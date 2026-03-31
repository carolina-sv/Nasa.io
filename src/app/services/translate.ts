import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslateService {
  private baseUrl = 'https://api.mymemory.translated.net/get';

  constructor(private http: HttpClient) {}

  translate(text: string): Observable<string> {
    const url = `${this.baseUrl}?q=${encodeURIComponent(text)}&langpair=en|pt`;
    return this.http.get<any>(url).pipe(
      map(res => res.responseData.translatedText)
    );
  }
}