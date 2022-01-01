const form = document.querySelector("form.contact-form");
form.addEventListener("submit", (e) => {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const subject = document.getElementById("subject");
  const msg = document.getElementById("msg");
  e.preventDefault();
  alert(
    `name : ${name.value}\nemail : ${email.value}\nsubject : ${subject.value}\nmessage : ${msg.value}`
  );
});
