import { Component } from '@angular/core';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
  selector: 'list',
  directives: [MD_LIST_DIRECTIVES],
  templateUrl: 'app/list/list.component.html'
})
export class List {}