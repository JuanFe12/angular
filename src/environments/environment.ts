// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //Configuracion de la app web en firebase
  firebase: {
    apiKey: "AIzaSyADJMAMCwHPaQRDiKkiohbDzAPbeB8Sk7s",
    authDomain: "personal-48424.firebaseapp.com",
    databaseURL: "https://personal-48424.firebaseio.com",
    projectId: "personal-48424",
    storageBucket: "personal-48424.appspot.com",
    messagingSenderId: "792429034367",
    appId: "1:792429034367:web:b37c061ec3e884ea"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
