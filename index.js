const { Body } = require("node-fetch");

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: " ",
      email: " "
    })}
  
  function submitData(name, email){
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
      })}
   return fetch("http://localhost:3000/users", configurationObject)
    .then(function (response) {
      return response.json();
    })
    .then(function (object) {
      console.log(object.id);
     let data = document.getElementsByTagName("Body")[0]
      data.textContent = object.id   })
    .catch(function(error) {
      alert('Unauthorized Access');
      console.log(error.message);
      let body = document.getElementsByTagName("Body")[0]
      body.textContent = error.message
    })
}