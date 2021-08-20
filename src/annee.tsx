interface props {
    annee: string;
    setAnnee: React.Dispatch<React.SetStateAction<string>>;
  }

  export function EntreeAnnee(props: props) {
    return (
      <div className= "annee"> 
      <label> A quelle période votre logement a-t-il été construit? </label>
      <select value={props.annee} onChange={(e) => props.setAnnee(e.target.value )}>
        {" "}
        <option value="< 1946">Avant 1946</option>
        <option value="1946-1970">Entre 1946 et 1970</option>
        <option value="1971-1990">Entre 1971 et 1990</option>
        <option value="> 1990">Après 1990</option>
      </select>
      <label>{props.annee}</label>

      </div>
    )

  }
