let button = document.querySelector("button");
btnclick = () => {
  console.log("button clicked");
  axios.get("https://swapi.dev/api/planets/2/").then((resp) => {
    for (i = 0; i < resp.data.residents.length; i++) {
      axios.get(resp.data.residents[i]).then((resid) => {
        const namish = document.createElement('h2')
        namish.textContent=`${resid.data.name}`
        document.body.appendChild(namish)
      });
    }
  });
};
button.addEventListener("click", btnclick);
