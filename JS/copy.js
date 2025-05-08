document.addEventListener("DOMContentLoaded", function () {
    const copyBtn = document.getElementById("copyBtn");
    const article = document.getElementById("articleContent");
    copyBtn.addEventListener("click", function () {
        if (article) {
            const text = article.innerText;
            navigator.clipboard.writeText(text)
                .then(() => {
                    alert("Article copied to clipboard!");
                })
                .catch(err => {
                    console.error("Failed to copy: ", err);
                    alert("Copy failed. Please try again.");
                });
        }
    });
});