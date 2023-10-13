const indirizzo = new URLSearchParams(location.search);
const eventId = indirizzo.get("eventId");
console.log(eventId);

const mioForm = document.getElementById("form");
mioForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("Name");
  const descriptionInput = document.getElementById("Description");
  const brandInput = document.getElementById("Brand");
  const imageInput = document.getElementById("ImageUrl");
  const priceInput = document.getElementById("Price");

  const nuovoProdotto = {
    name: nameInput.value,
    description: descriptionInput.value,
    brand: brandInput.value,
    imageUrl: imageInput.value,
    price: priceInput.value,
  };

  if (eventId) {
    fetch(`https://striveschool-api.herokuapp.com/api/product/${eventId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZmZiMDEzOWM0MzAwMTg4MTQ1OWIiLCJpYXQiOjE2OTcxODU3MTIsImV4cCI6MTY5ODM5NTMxMn0.w1OmeGGwVswEOnb_oiIqMWl2vdyfm1TcsDJ8JN-GDSE",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log("ok");
          return res.json();
        } else {
          throw new Error("errore");
        }
      })
      .then((eDett) => {
        nameInput.value = eDett.name;
        descriptionInput.value = eDett.description;
        brandInput.value = eDett.brand;
        imageInput.value = eDett.imageUrl;
        priceInput.value = eDett.price;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  let method1 = "POST";
  if (eventId) {
    method1 = "PUT";
  }

  let url1 = "https://striveschool-api.herokuapp.com/api/product";
  if (eventId) {
    url1 = `https://striveschool-api.herokuapp.com/api/product/${eventId}`;
  }

  fetch(url1, {
    method: method1,
    body: JSON.stringify(nuovoProdotto),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTI4ZmZiMDEzOWM0MzAwMTg4MTQ1OWIiLCJpYXQiOjE2OTcxODU3MTIsImV4cCI6MTY5ODM5NTMxMn0.w1OmeGGwVswEOnb_oiIqMWl2vdyfm1TcsDJ8JN-GDSE",
    },
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});
