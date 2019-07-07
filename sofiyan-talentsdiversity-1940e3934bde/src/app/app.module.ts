import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { EmailComposer } from '@ionic-native/email-composer';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { ListPage } from '../pages/list/list';
import { EntreprisePage } from '../pages/entreprise/entreprise';
import { EmailProvider } from '../providers/email/email';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListPage,
    EntreprisePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListPage,
    EntreprisePage
  ],
  providers: [
    StatusBar, 
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    HttpClient,
    HttpClientModule,
    EmailComposer,
    EmailProvider
  ]
})
export class AppModule {}
