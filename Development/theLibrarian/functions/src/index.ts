import * as admin from 'firebase-admin';
admin.initializeApp();
// <-----!important do not put anything above this line!----->
import { _helloWorld } from './Logic/HelloWorld/HelloWorld.entryPoint';

export const helloWorld = _helloWorld;
