const accordionItems = document.querySelectorAll(".accordion-item");

console.log(accordionItems);

accordionItems.forEach(function (accordionItem) {
    const btn = accordionItem.querySelector(".accordion-btn");

    const content = accordionItem.querySelector(".accordion-content");

    btn.addEventListener("click", function () {
        accordionItem.classList.toggle("active");

        if (accordionItem.classList.contains("active")) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });
});
