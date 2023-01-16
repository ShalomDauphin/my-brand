
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBNIvrxSz7SBk_Y_oJEiHDwf3jx-zUAoZA",
    authDomain: "contact-form-bfbc8.firebaseapp.com",
    databaseURL: "https://contact-form-bfbc8-default-rtdb.firebaseio.com",
    projectId: "contact-form-bfbc8",
    storageBucket: "contact-form-bfbc8.appspot.com",
    messagingSenderId: "636157029699",
    appId: "1:636157029699:web:4b60368af608f2ddaa13f6"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference to my db

const contactFormDB = firebase.database().ref('contactForm');

document.getElementById("contactForm").addEventListener("submit", submitForm)

function submitForm(e) {
    e.preventDefault();

    var names = getElementVal("name");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("msgContent");
    // console.log(names, emailid, msgContent);

    saveMessage(names, emailid, msgContent)

    // validate

    
        if (document.myForm.name.value == "") {
            alert("Please provide your name!");
            document.myForm.name.focus();
            return false;
        } else if (document.myForm.email.value == "") {
            alert("Please provide your Email!");
            document.myForm.email.focus();
            return false;
        } else if (document.myForm.msgContent.value == "") {
            alert("Please Provide the message!");
            document.myForm.msgContent.focus();
            return false;
        }
        else {
            // enable alert
            document.querySelector(".alert").style.display = "block";

            // remove the alert
            setTimeout(() => {
                document.querySelector(".alert").style.display = "none";
            }, 3000);

            // reset the form
            // document.getElementById("contactForm").reset();
        }
    document.getElementById("contactForm").reset();
    // enable alert
    // document.querySelector(".alert").style.display = "block";

    // remove the alert
    // setTimeout(() => {
    //     document.querySelector(".alert").style.display = "none";
    // }, 3000);

    // reset the form
    // document.getElementById("contactForm").reset();
}

const saveMessage = (names, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        names: names,
        emailid: emailid,
        msgContent: msgContent,
    });
};
const getElementVal = (id) => {
    return document.getElementById(id).value;
};