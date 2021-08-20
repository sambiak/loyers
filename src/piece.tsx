interface props {
    piece: string;
    setPiece: React.Dispatch<React.SetStateAction<string>>;
  }

  export function EntreePiece(props: props) {
    return (
      <div className = "piece"> 
      <label> Combien de pièces votre logement possède-t-il? </label>
      <select value={props.piece} onChange={(e) => props.setPiece(e.target.value )}>
        {" "}
        <option value="1">1 pièce</option>
        <option value="2">2 pièces</option>
        <option value="3">3 pièces</option>
        <option value="4 et +">4 pièces et +</option>
      </select>
      <label>{props.piece}</label>

      </div>
    )

  }
