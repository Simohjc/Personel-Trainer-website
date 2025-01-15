function toggleMenu() {
    var x = document.getElementById("navDemo");
    if (x.classList.contains("d-none")) {
        x.classList.remove("d-none");
    } else {
        x.classList.add("d-none");
    }
}