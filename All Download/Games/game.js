document.getElementById("copyBtn").addEventListener("click", function (e) {
    e.preventDefault();

    const copyBtn = this;
    const originalText = copyBtn.textContent;

    // بنسخ لينك التحميل
    const downloadLink = document.querySelector(".big-btn a").href;

    navigator.clipboard.writeText(downloadLink).then(function () {
        copyBtn.textContent = "Copied!";
        copyBtn.classList.add("copied"); 

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.classList.remove("copied");
        }, 2000);
    }).catch(function (err) {
        copyBtn.textContent = "Failed!";
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 3000);
    });
});
