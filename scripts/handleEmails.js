const sendEmail = () => {
    let user = {
        plan: document.querySelector(".plan-name").innerText,
        name: document.getElementById("user-name").value,
        email: document.getElementById("user-email").value,
        phone: document.getElementById("user-phone").value,
        contactChoice: document.querySelector('input[name="contact-method"]:checked').value,
        projectDescription: document.querySelector(".bottom-input").value
    }

    emailjs.send("service_webVertex", "template_webVertex", user).then(console.log("Success!"))
}
const sendForm = () => {
    if (
        document.querySelector(".plan-name").innerText.trim() === "" ||
        document.getElementById("user-name").value.trim() === "" ||
        document.getElementById("user-email").value.trim() === "" ||
        document.getElementById("user-phone").value.trim() === "" ||
        !document.querySelector('input[name="contact-method"]:checked') || 
        document.querySelector(".bottom-input").value.trim() === ""
    ) {
        alert("Please fill out every input field");
    } else {
        sendEmail()
        setTimeout(function(){
            document.querySelector(".root").style.opacity = "0"
            document.querySelector(".success-window").style.display = "flex"
        }, 1000)
        formSent = true
        localStorage.setItem("is form sent", JSON.stringify(formSent))
    }
}
