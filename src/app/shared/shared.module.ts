import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyAVSayPImoU-wCm0U5wpdI3w72omyKibO8",
  authDomain: "ng-meetup-demo17.firebaseapp.com",
  databaseURL: "https://ng-meetup-demo17.firebaseio.com",
  projectId: "ng-meetup-demo17",
  storageBucket: "ng-meetup-demo17.appspot.com",
  messagingSenderId: "671661327858"
};


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    HttpClientModule,
    AngularFireModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: []
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []      
    };
  }}
