// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCXUplO20cWIbing2TWF-m6zhHMoQJUFQ8",
    authDomain: "tasuyatsu.firebaseapp.com",
    databaseURL: "https://tasuyatsu.firebaseio.com",
    projectId: "tasuyatsu",
    storageBucket: "tasuyatsu.appspot.com",
    messagingSenderId: "24552721392"
  }
};
