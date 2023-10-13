const indirizzo = new URLSearchParams(location.search);
const eventId = indirizzo.get("eventId");
console.log(eventId);

const dettagliProdotto = function (dettagli) {
  const row = document.getElementById("rowDettagli");
  const newCol = document.createElement("div");
  newCol.innerHTML = `<div class="card mt-3 mb-5 text-align-center">
  <img class="card-img-top"   src="${dettagli.imageUrl}" alt="Card image cap">
  <div class="card-body ">
    <h5 class="card-title fs-1 text-center">${dettagli.name}</h5>
    <h5 class="card-title fs-4">${dettagli.brand}</h5>
    <p class="card-text fs-5">${dettagli.description}</p>
    <p class="card-text fw-bold fs-5">${dettagli.price}€</p>
    <a href="backoffice.html?eventId=${dettagli._id}" class="btn btn-secondary fs-5">Modify</a>
    <a href="#" class="btn btn-danger ms-3 fs-5" onclick="deleteProduct()" >Delete</a>
    
  </div>
  </div>`;
  row.appendChild(newCol);
};

const singoloProdotto = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    "Content-Type": "application/json",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZmZiMDEzOWM0MzAwMTg4MTQ1OWIiLCJpYXQiOjE2OTcxODU3MTIsImV4cCI6MTY5ODM5NTMxMn0.w1OmeGGwVswEOnb_oiIqMWl2vdyfm1TcsDJ8JN-GDSE",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nella richiesta");
      }
    })
    .then((eventData) => {
      console.log(eventData);
      dettagliProdotto(eventData);
    })
    .catch((err) => console.log(err));
};

singoloProdotto();

const deleteProduct = function () {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
    "Content-Type": "application/json",
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZmZiMDEzOWM0MzAwMTg4MTQ1OWIiLCJpYXQiOjE2OTcxODU3MTIsImV4cCI6MTY5ODM5NTMxMn0.w1OmeGGwVswEOnb_oiIqMWl2vdyfm1TcsDJ8JN-GDSE",
    },
  })
    .then((res) => {
      if (res.ok) {
        alert("Prodotto Eliminato!");
        location.assign("index.html");
      } else {
        alert("Problema con l'eliminazione!");
        throw new Error("errore");
      }
    })
    .catch((err) => console.log(err));
};
