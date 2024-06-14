const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    //for (let i = 0; i < response.data.length; i++) {
    //console.log(response.data[i].name);
    // }
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("This code will be called");
  });
