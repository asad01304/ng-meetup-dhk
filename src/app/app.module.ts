import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

//import { ArticlesModule } from './articles/articles.module';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { appRoutes } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { IsLoggedInGuard } from './guard/is-logged-in.guard';
import { HeaderComponent } from './header/header.component';
import { TitleCasePipe } from './pipes/title-case.pipe';

export const firebaseConfig = {
  apiKey: "AIzaSyAVSayPImoU-wCm0U5wpdI3w72omyKibO8",
  authDomain: "ng-meetup-demo17.firebaseapp.com",
  databaseURL: "https://ng-meetup-demo17.firebaseio.com",
  projectId: "ng-meetup-demo17",
  storageBucket: "ng-meetup-demo17.appspot.com",
  messagingSenderId: "671661327858"
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeaderComponent,
    TitleCasePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    //ArticlesModule
  ],
  providers: [
    IsLoggedInGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
