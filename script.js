const tabs = document.querySelectorAll(".tab");
const pages = document.querySelectorAll(".page");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.page;

    tabs.forEach(t => t.classList.remove("active"));
    pages.forEach(p => p.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

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
