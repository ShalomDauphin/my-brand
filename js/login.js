import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBHJaSDsOpneMcMfFK8uYYTaDhKjcZfkUY",
    authDomain: "login-signup-d11d8.firebaseapp.com",
    projectId: "login-signup-d11d8",
    storageBucket: "login-signup-d11d8.appspot.com",
    messagingSenderId: "113980751877",
    appId: "1:113980751877:web:a3a2d88456fbb8c6d15c6c"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
  const database = getDatabase(app);

lgnbtn.addEventListener('click', (e) => {

    var loginEmail = document.getElementById("email").value;
    var loginPassword = document.getElementById("password").value;
   
     signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    //   window.open("index.html");
      var lgDate = new Date();
      update(ref(database, 'users/' + user.uid), {
          last_login: lgDate,
      }).then(() => {
        //   window.open("index.html");
          window.open("Admin/admin/posts/index.html");
        //   alert('Loged in successfully');
      }).catch((error) => {
          alert(error);
      });
  })
  .catch((error) => {
    const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
  });


    // Register

    
});

   

