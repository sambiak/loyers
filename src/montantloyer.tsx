interface props {
    montant: number;
    setMontant: React.Dispatch<React.SetStateAction<number>>;
  }
  
  export function EntreeMontant(props: props) {
    return (
      <div className = "loyer">
        <label>Montant de votre loyer actuel (Charges non comprises)</label>
        <input
          type="number"
          value={props.montant}
          onChange={(e) => props.setMontant(parseInt(e.target.value, 10))}
        />
       
      </div>
    );
  }
  