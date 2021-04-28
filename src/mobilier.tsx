interface props {
    mobilier: string;
    setMobilier: React.Dispatch<React.SetStateAction<string>>;
  }

  export function Entree_mobilier(props: props) {
    return (
      <div className= "mobilier"> 
      <label> Votre logement a été loué : </label>
      <select value={props.mobilier} onChange={(e) => props.setMobilier(e.target.value )}>
        {" "}
        <option value="meuble">Meublé</option>
        <option value="nonmeuble">Non meublé</option>
      </select>
      <label>{props.mobilier}</label>

      </div>
    )

  }
