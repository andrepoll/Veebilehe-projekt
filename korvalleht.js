
// Tehtuks märkimine koostiosade ja valmistamisetappide jaoks
document.querySelectorAll("ul li, ol li").forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("completed");
        // Klõpsamise tagasiside
        item.style.backgroundColor = item.classList.contains("completed") ? "#d3ffd3" : "";
    });
});
