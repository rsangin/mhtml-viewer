import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as mhtml2html from 'mhtml2html';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'mhtml-viewer';
  public html: string = '';

  constructor(private http: HttpClient) { }

  public async ngOnInit(): Promise<void> {
    const mhtml = await this.http.get<string>('/assets/test.mhtml', { responseType: 'text' as any }).toPromise();
    const html = mhtml2html.convert(mhtml);

    this.html = html.window.document.body.innerHTML;
    console.log(this.html);
  }
}
