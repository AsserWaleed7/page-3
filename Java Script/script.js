document.getElementById("search-button").addEventListener("click", function() {
    let searchInput = document.getElementById("search-input").value;
    let message = document.getElementById("message");

    if (searchInput.trim() === "") {
        message.textContent = "يرجي إدخال كلمة للبحث.";
        message.classList.remove("success");
        message.classList.add("error");
    } else {
        message.textContent = "تم البحث عن: " + searchInput;
        message.classList.remove("error");
        message.classList.add("success");
    }
});