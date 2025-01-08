const { PetStoreClient } = require("@unbranded/petstore");

const client = new PetStoreClient("http://localhost:5118", {
    allowInsecureConnection: true,
  });
async function listPets() {
    // list all pets
    console.log("Listing all pets...");
    const result = await client.pets.list();
    console.log(result);
  }

window.addEventListener("DOMContentLoaded", () => {
    const listPetsButton = document.getElementById("listPets");
    listPetsButton?.addEventListener("click", () => listPets());
});