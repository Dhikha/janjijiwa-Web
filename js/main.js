var nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 70) {
    nav.classList.add("bg-white", "navbar-reduce");
  } else {
    nav.classList.remove("bg-white", "navbar-reduce");
  }
});

function validasi() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  if (name != "" && email != "" && subject != "" && message != "") {
    alert(
      "        TERIMAKASIH TELAH MENGHUBUNGI KAMI! \n" +
        "\n Mohon Beri Kami Waktu Untuk Membalas Pesan Anda!!"
    );
  } else {
    alert("Maaf, tolong di isi dengan benar!");
  }
}
