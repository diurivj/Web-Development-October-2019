document.addEventListener(
  "DOMContentLoaded",
  async () => {
    // axios.get('https://rickandmortyapi.com/api/character/')
    // .then(res => console.log(res))
    // .catch(err => console.error(err))

    try {
      const {
        data: { results }
      } = await axios.get("https://rickandmortyapi.com/api/character/");

      const ul = document.querySelector("#characters");

      results.forEach(character => {
        const liElement = document.createElement("li");
        const imgCharacter = document.createElement("img");
        const nameElement = document.createElement("p");
        liElement.className = "characters-li";
        nameElement.innerText = character.name;
        imgCharacter.src = character.image;
        liElement.appendChild(imgCharacter);
        liElement.appendChild(nameElement);
        ul.appendChild(liElement);
      });
    } catch (err) {
      console.error(err);
    }
  },
  false
);
