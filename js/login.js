function validasi() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username != "" && password != "") {
    alert("SELAMAT! \n" + "\n Anda Telah Berhasil Login!!");
  } else {
    alert("Maaf, tolong di isi dengan benar!");
  }
}
