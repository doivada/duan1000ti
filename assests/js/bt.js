document.addEventListener("DOMContentLoaded", function () {
    fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            const articleList = document.getElementById("article-list");
            data.forEach(article => {
                const articleCard = document.createElement("div");
                articleCard.classList.add("article-card");
                articleCard.innerHTML = `
                    <img src="./assests/img/${article.image}" alt="${article.title}" style="width:100%">
                    <h3>${article.title}</h3>
                    <p>${article.description}</p>
                    <a href="article.html?id=${article.id}">Xem chi tiết</a>
                `;
                articleList.appendChild(articleCard);
            });
        });
});
