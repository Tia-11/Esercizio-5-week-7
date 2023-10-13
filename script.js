const cardProdotti = function (arrayProdotti) {
  const row = document.getElementById("productsRow");
  arrayProdotti.forEach((e) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-sm-6", "col-md-4");
    newCol.innerHTML = `<div class="card mt-3 mb-3" style=' height: 38em'>
    <img class="card-img-top" src="${e.imageUrl}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title fs-4">${e.name}</h5>
      <h5 class="card-title fs-6">${e.brand}</h5>
      <p class="card-text">${e.description}</p>
      <p class="card-text fw-bold">${e.price}€</p>
      <a href="./details.html?eventId=${e._id}" class="btn btn-secondary">Details</a>
    </div>
  </div> `;
    row.appendChild(newCol);
  });
};

const prodotti = function () {
  fetch("https://striveschool-api.herokuapp.com/api/product", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZmZiMDEzOWM0MzAwMTg4MTQ1OWIiLCJpYXQiOjE2OTcxODU3MTIsImV4cCI6MTY5ODM5NTMxMn0.w1OmeGGwVswEOnb_oiIqMWl2vdyfm1TcsDJ8JN-GDSE",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new error("Errore con il server");
      }
    })

    .then((events) => {
      console.log(events);
      cardProdotti(events);
    })

    .catch((err) => {
      console.log("errore", err);
    });
};

prodotti();
