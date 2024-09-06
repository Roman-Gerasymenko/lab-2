const cards = [
  {
    category: "category1",
    image:
      "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png",
    description: "Item 1",
  },
  {
    category: "category2",
    image:
      "https://images.unsplash.com/photo-1622629797619-c100e3e67e2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Item 2",
  },
  {
    category: "category1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnzNLGSaX-dWnhwxEyR_v9XCd3tGiNCRPLnQ&s",
    description: "Item 3",
  },
];

window.onload = function () {
  loadCards();
  setTimeout(showSubscriptionBox, 5000);
  setTimeout(showAdBox, 10000);

  document.getElementById("subscribe-button").onclick = subscribe;
  document.getElementById("close-subscription-button").onclick = closeBox;
  document.getElementById("close-ad-button").onclick = closeAd;
};

function loadCards(filter = "all") {
  const container = document.getElementById("card-container");
  container.innerHTML = "";
  cards.forEach((card) => {
    if (filter === "all" || filter === card.category) {
      const cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.innerHTML = `
                <img src="${card.image}" alt="Image">
                <p>${card.description}</p>
            `;
      container.appendChild(cardElement);
    }
  });
}

function filterCards() {
  const filter = document.getElementById("filter").value;
  loadCards(filter);
}

function showSubscriptionBox() {
  document.getElementById("subscription-box").classList.remove("hidden");
}

function closeBox() {
  document.getElementById("subscription-box").classList.add("hidden");
}

function subscribe() {
  alert("Thank you for subscribing!");
  closeBox();
}

function showAdBox() {
  document.getElementById("ad-box").classList.remove("hidden");
}

function closeAd() {
  document.getElementById("ad-box").classList.add("hidden");
}
