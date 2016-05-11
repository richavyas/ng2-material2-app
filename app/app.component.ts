import {Component} from '@angular/core';
import {Route, Routes, ROUTER_DIRECTIVES} from '@angular/router';

import { MdButton } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdProgressBar } from '@angular2-material/progress-bar';
import { MdProgressCircle, MdSpinner } from '@angular2-material/progress-circle';
import { MdRadioButton } from '@angular2-material/radio';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MdToolbar } from '@angular2-material/toolbar';
import { Home } from './home/home.component';
import { List } from './list/list.component';
import { SubList} from 'sublist/sublist.component';
import { Angular2cliAppComponent} from 'clicomponent/angular2cli.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        MdButton,
        MD_CARD_DIRECTIVES,
        MdIcon,
        MD_INPUT_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MdProgressBar,
        MdProgressCircle,
        MdSpinner,
        MdRadioButton,
        MD_SIDENAV_DIRECTIVES,
        MdToolbar,
        Angular2cliAppComponent
    ]
})
@Routes([
  new Route({path: '/', component: Home}),
  new Route({path: '/list', component: List})/*,
  new Route({path: '/sublist', component: SubList})*/
])
export class AppComponent { }
