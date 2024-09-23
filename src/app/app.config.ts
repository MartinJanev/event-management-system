import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { FirebaseApp } from '@angular/fire/app';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

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
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};

/*
const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
*/
