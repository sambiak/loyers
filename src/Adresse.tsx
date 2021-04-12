import React, { useState } from "react";

export function Adresse(props:any) {
    const [name, setName] = useState("");
  
    const handleSubmit = (evt:any) => {
        evt.preventDefault();
        alert(`Submitting Adresse ${name}`)
    }
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Adresse:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  
}
