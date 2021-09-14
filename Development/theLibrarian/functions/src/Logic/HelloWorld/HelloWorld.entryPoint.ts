import * as functions from 'firebase-functions';

export const _helloWorld = functions.https.onRequest(
  (request, response) => {
    console.log('Hello World');
    response.set('Access-Control-Allow-Origin', '*');
    response.status(200).send('Hello from Firebase!');
  }
);
