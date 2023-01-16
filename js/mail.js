
  function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "shalomdauphin1@gmail.com",
      Password: "Nyarwaya@4321",
      To: 'shalomdauphin1@gmail.com',
      From: document.getElementById("email").value,
      Subject: "New Message",
      Body:
        "Name: " + document.getElementById("name").value
        + "<br > Email: " + document.getElementById("email").value
        + "<br > Message: " + document.getElementById("msgContent").value
        
    }).then(
      message => alert("Message Sent!")
    );
  }
