let vege = document.getElementById("vegetable");
let deprdt = document.getElementById("detailed-prdt");
let wheat = document.getElementById("wheat");
let soyabean = document.getElementById("soyabean");
let sesame = document.getElementById("sesame");
let millets = document.getElementById("millets");
let backToVeg = document.getElementById("backToVeg");
if (sessionStorage.getItem("prdt")) {
    let prdt = sessionStorage.getItem("prdt");
    console.log(prdt);
    if (prdt == wheat.id) {
        vege.style.display = "none";
        deprdt.style.display = "flex";
        wheat.style.display = "flex";
        soyabean.style.display = "none";
        sesame.style.display = "none";
        millets.style.display = "none";
    }
    else if (prdt == soyabean.id) {
        vege.style.display = "none";
        deprdt.style.display = "flex";
        wheat.style.display = "none";
        soyabean.style.display = "flex";
        sesame.style.display = "none";
        millets.style.display = "none";
    }
    else if (prdt == sesame.id) {
        vege.style.display = "none";
        deprdt.style.display = "flex";
        wheat.style.display = "none";
        soyabean.style.display = "none";
        sesame.style.display = "flex";
        millets.style.display = "none";
    }
    else if (prdt == millets.id) {
        vege.style.display = "none";
        deprdt.style.display = "flex";
        millets.style.display = "flex";
        wheat.style.display = "none";
        soyabean.style.display = "none";
        sesame.style.display = "none";
    }
    sessionStorage.clear()
}
backToVeg.addEventListener('click', () => {
    vege.style.display = "block";
    wheat.style.display = "none";
    soyabean.style.display = "none";
    sesame.style.display = "none";
    millets.style.display = "none";
    deprdt.style.display = "none";
})
function myfunc(value) {
    vege.style.display = "none";
    deprdt.style.display = "flex";
    if (value == wheat.id) {
        wheat.style.display = "flex";
        soyabean.style.display = "none";
        sesame.style.display = "none";
        millets.style.display = "none";
    }
    else if (value == soyabean.id) {
        wheat.style.display = "none";
        soyabean.style.display = "flex";
        sesame.style.display = "none";
        millets.style.display = "none";
    }
    else if (value == sesame.id) {
        wheat.style.display = "none";
        soyabean.style.display = "none";
        sesame.style.display = "flex";
        millets.style.display = "none";
    }
    else if (value == millets.id) {
        millets.style.display = "flex";
        wheat.style.display = "none";
        soyabean.style.display = "none";
        sesame.style.display = "none";
    }
}

function navFunc() {
    let x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.classList.add("responsive");
    } else {
        x.classList.add("nav");
    }
}

function sendMail() {
    event.preventDefault();
    var templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('msg').value
    };
    // generate a five digit number for the contact_number variable
    // these IDs from the previous steps
    emailjs.send("service_q77om57", "template_8s9f24h", templateParams)
        .then(function () {
            alert("Message has been sent");
        }, function (error) {
            alert("error in sending enquiry", error);
        });
}

function sendPrdt(value) {
    sessionStorage.setItem("prdt", value);
    location.href = "products.html";
}