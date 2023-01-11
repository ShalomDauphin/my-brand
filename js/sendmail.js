function sendEmail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        msgContent: document.getElementById("msgContent").value,
    };

    const serviceID = "service_evind2r";
    const templateID = "template_31jxcpj";
    
    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("msgContent").value = "";
        console.log(res);
    
    }).catch((err) => console.log(err));

}



