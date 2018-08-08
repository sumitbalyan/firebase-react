"# firebase-react" 

https://github.com/sumitbalyan/firebase-react.git

# ReactJs-Firebase
How to use firebase real time database in ReactJS

#Note change the config details in App.js according to your firebase project.
1. create firebase project https://firebase.google.com/docs/web/setup
2. create package.json using 
<br /> $ npm init and intall firebase using 
<br /> $ npm install --save firebase
3. Also install 
 <br /> $ npm install trim
 <br /> $ npm install component/trim
 <br /> for trim the string
4. download the project & run using command "npm start"

# Usage
<br /> import firebase
<br /> import * as firebase from 'firebase';

# initialize firebase in component's constructor

  var config = firebase.initializeApp({
  <br />  apiKey: '<your-api-key>',
   <br /> authDomain: '<your-auth-domain>',
  <br />  databaseURL: '<your-database-url>',
  <br />  projectId: '<your-cloud-firestore-project>',
   <br /> storageBucket: '<your-storage-bucket>',
  <br />  messagingSenderId: '<your-sender-id>'
 <br /> });
