const navLinks = document.querySelectorAll(".navbar a");
const pages = document.querySelectorAll(".page");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const pageId = link.getAttribute("data-page");

        navLinks.forEach(item => item.classList.remove("active"));
        pages.forEach(page => page.classList.remove("active"));

        link.classList.add("active");
        document.getElementById(pageId).classList.add("active");
    });
});

function copyEmail(){
    navigator.clipboard.writeText("spicy.velma@outlook.com");

    const message = document.getElementById("copyMessage");
    message.textContent = "Email copied!";

    setTimeout(() => {
        message.textContent = "";
    }, 2000);
}
