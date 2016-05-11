import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {SubList} from 'sublist/sublist.component';
import { MdIconRegistry } from '@angular2-material/icon';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';
import { Angular2cliAppComponent } from 'clicomponent/angular2cli.component';

bootstrap(AppComponent, [
  MdIconRegistry,
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS
]);

