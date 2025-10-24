function sendMail(){
const parms = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
message: document.getElementById("message").value,
};


emailjs.send("service_mx3f9xj","template_h4euvtu",parms).then(()=> alert("Email Sent!!!").catch(()=>alert("Email not sent!!!")));

// emailjs
// .send("service_aujbxln", "template_mg97won", parms)
// .then(() => {
// alert("Email sent successfully!");
// })
// .catch((error) => {
// console.log("Error sending email:", error);
// alert("Failed to send email. Please try again.");
// });
}