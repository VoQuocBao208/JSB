const contactForm = document.getElementById("boss-contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageTextarea = document.getElementById("message");

function handleSubmitForm(e) {
  e.preventDefault();
  if (
    nameInput.value === "" ||
    emailInput.value === "" ||
    subjectInput.value === ""
  ) {
    alert("Gửi thông tin chưa thành công");
  } else {
    alert(`Thông tin của bạn:
        name: ${nameInput.value}
        email: ${emailInput.value}
        subject: ${subjectInput.value}
        message: ${messageTextarea.value}
        `);
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
  }
}

contactForm.addEventListener("submit", handleSubmitForm);




// const nenform = document.getElementById("nen-form")
// const nutxacnhan = document.getElementsByClassName("nut-xac");
// const nutmuahang = document.getElementsByClassName("nut-mua-hang");

// nutxacnhan.onclick = function(){
//   nenform.style.display='none';
// }
// nutmuahang.onclick = function(){
//   nenform.style.display='block';

// }