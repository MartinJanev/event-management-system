import {ApplicationConfig} from '@angular/core';
import {initializeApp, provideFirebaseApp} from '@angular/fire/app';
import {getAuth, provideAuth} from '@angular/fire/auth';
import {getFirestore, provideFirestore} from '@angular/fire/firestore';
import {provideRouter} from '@angular/router';
import routeConfig from './routes';
import {provideHttpClient} from '@angular/common/http';
import {FIREBASE_OPTIONS} from '@angular/fire/compat';

const firebaseConfig = {
  apiKey: "AIzaSyCVf3vZyj3CBXU8y3Sw_fLC1UceRsBZr1A",
  authDomain: "event-management-system-99c7f.firebaseapp.com",
  projectId: "event-management-system-99c7f",
  storageBucket: "event-management-system-99c7f.appspot.com",
  messagingSenderId: "194301657901",
  appId: "1:194301657901:web:78d5d394fdd9079f7a09a4"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    {provide: FIREBASE_OPTIONS, useValue: firebaseConfig}
  ],
};
