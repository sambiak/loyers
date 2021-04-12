import React, { useState } from "react";

export function Adresse(props: any) {
  const [name, setName] = useState("");

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    let requete = `https://api-adresse.data.gouv.fr/search/?q=${name}`
    alert(`Requete ${requete}`);
    fetch(requete)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Adresse:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
