import { Component } from '@angular/core';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  selector: 'home',
  directives: [MD_CARD_DIRECTIVES],
  templateUrl: 'app/home/home.component.html'
})
export class Home {}