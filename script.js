function copyEmail(){
  const email = "spicy.velma@outlook.com";
  navigator.clipboard.writeText(email).then(() => {
    const msg = document.getElementById("copyMsg");
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 2000);
  });
}
