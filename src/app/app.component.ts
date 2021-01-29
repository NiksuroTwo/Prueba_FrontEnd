import { Component } from '@angular/core';
import { JsonService } from './json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendtest';

  constructor(public json: JsonService) {
    this.json.getJson('https://d2rpzhocglww2h.cloudfront.net/test/test.json').subscribe((res: any) => {
      console.log(res);
    });
  } 
}

