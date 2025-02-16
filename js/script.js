let veggie = document.getElementById("vegetable");
let detailed_product = document.getElementById("detailed-prdt");
let wheat = document.getElementById("wheat");
let soyabean = document.getElementById("soyabean");
let sesame = document.getElementById("sesame");
let millets = document.getElementById("millets");
let peanut_butter = document.getElementById("peanut_butter");
let backToVeg = document.getElementById("backToVeg");

if (sessionStorage.getItem("prdt")) {
  let current_product = sessionStorage.getItem("current_product");
  console.log(current_product);
  if (current_product == wheat.id) {
    veggie.style.display = "none";
    detailed_product.style.display = "flex";
    wheat.style.display = "flex";
    soyabean.style.display = "none";
    sesame.style.display = "none";
    millets.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (current_product == soyabean.id) {
    veggie.style.display = "none";
    detailed_product.style.display = "flex";
    wheat.style.display = "none";
    soyabean.style.display = "flex";
    sesame.style.display = "none";
    millets.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (current_product == sesame.id) {
    veggie.style.display = "none";
    detailed_product.style.display = "flex";
    wheat.style.display = "none";
    soyabean.style.display = "none";
    sesame.style.display = "flex";
    millets.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (current_product == millets.id) {
    veggie.style.display = "none";
    detailed_product.style.display = "flex";
    millets.style.display = "flex";
    wheat.style.display = "none";
    soyabean.style.display = "none";
    sesame.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (current_product == peanut_butter.id) {
    console.log("peanut_butter");
    veggie.style.display = "none";
    detailed_product.style.display = "flex";
    millets.style.display = "none";
    wheat.style.display = "none";
    soyabean.style.display = "none";
    sesame.style.display = "none";
    peanut_butter.style.display = "flex";
  }
  sessionStorage.clear();
}
backToVeg.addEventListener("click", () => {
  veggie.style.display = "block";
  wheat.style.display = "none";
  soyabean.style.display = "none";
  sesame.style.display = "none";
  millets.style.display = "none";
  peanut_butter.style.display = "none";
  detailed_product.style.display = "none";
});
function myfunc(value) {
  console.log(value);
  veggie.style.display = "none";
  detailed_product.style.display = "flex";
  if (value == wheat.id) {
    wheat.style.display = "flex";
    soyabean.style.display = "none";
    sesame.style.display = "none";
    millets.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (value == soyabean.id) {
    wheat.style.display = "none";
    soyabean.style.display = "flex";
    sesame.style.display = "none";
    millets.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (value == sesame.id) {
    wheat.style.display = "none";
    soyabean.style.display = "none";
    sesame.style.display = "flex";
    millets.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (value == millets.id) {
    millets.style.display = "flex";
    wheat.style.display = "none";
    soyabean.style.display = "none";
    sesame.style.display = "none";
    peanut_butter.style.display = "none";
  } else if (value == peanut_butter.id) {
    console.log("peanut_butter");
    millets.style.display = "none";
    wheat.style.display = "none";
    soyabean.style.display = "none";
    sesame.style.display = "none";
    peanut_butter.style.display = "flex";
  }
}

function sendMail() {
  event.preventDefault();
  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("msg").value,
  };
  // generate a five digit number for the contact_number variable
  // these IDs from the previous steps
  emailjs.send("service_27njxms", "template_9kyub2g", templateParams).then(
    function () {
      alert("Message has been sent");
    },
    function (error) {
      alert("error in sending enquiry", error);
    }
  );
}

function sendProduct(value) {
  sessionStorage.setItem("current_product", value);
  location.href = "products.html";
}
