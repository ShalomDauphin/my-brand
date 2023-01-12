import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

import {getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDeudG46HZgxssELLQgmv7J9P4XKg1HZ2w",
    authDomain: "signup-7e854.firebaseapp.com",
    databaseURL: "https://signup-7e854-default-rtdb.firebaseio.com",
    projectId: "signup-7e854",
    storageBucket: "signup-7e854.appspot.com",
    messagingSenderId: "566819141176",
    appId: "1:566819141176:web:4a9564d3d00c5ac61418cd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
const auth = getAuth();
  const database = getDatabase(app);

signbtn.addEventListener('click', (e) => {

    // Register

    var email = document.getElementById('email').value;
    var names = document.getElementById('names').value;
    var password = document.getElementById('password').value;

       

  createUserWithEmailAndPassword(auth,email,names, password )
    .then((userCredential) => {
     // Signed in 
      const user = userCredential.user;

      set(ref(database, 'users/' + user.uid),{
      
          email: email,
          names: names,
      })

        alert('user created!');
        window.open("Admin/admin/posts/index.html");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage);
    // ..
    });
    
});

   

