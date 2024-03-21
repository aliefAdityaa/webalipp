// const form = document.querySelector("#contact-form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const email = document.querySelector("#exampleInputEmail1").value;
//   const pertanyaan = document.querySelector("#Pertanyaan").value;

//   // Kirim data formulir ke email Anda
//   // Ganti "your_email@domain.com" dengan alamat email Anda
//   sendEmail(email, pertanyaan, "adityaalief01@gmail.com");
// });

// function sendEmail(email, pertanyaan, tujuan) {
//   // Gunakan API email pihak ketiga, seperti SendGrid atau Mailgun
//   // Ganti "API_KEY" dengan API key Anda
//   // Ganti "YOUR_DOMAIN" dengan domain Anda
//   const data = {
//     from: email,
//     to: tujuan,
//     subject: "Pertanyaan dari website",
//     text: pertanyaan,
//   };

//   axios.post("https://api.sendgrid.com/v3/mail/send", data, {
//     headers: {
//       Authorization: `Bearer API_KEY`,
//     },
//   })
//     .then((response) => {
//       console.log("Email berhasil terkirim!");
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     });
// }
