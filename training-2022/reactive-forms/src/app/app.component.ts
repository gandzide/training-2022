import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'reactive-forms';

  constructor(private activatedRoute: ActivatedRoute, private routes: Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.error('Og nooo, ', params);
    });

    this.routes.events.subscribe((event) => {
      console.warn('new event', event);
    });
    console.warn('full url is ===> ', this.routes.url);
  }
}
