import { Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import 'hammerjs';

import { from } from 'rxjs';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';
import { myAnimation } from './animations/fade-in.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimation],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'payments';
  logged: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }


}
