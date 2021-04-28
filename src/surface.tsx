interface props {
  surface: number;
  setSurface: React.Dispatch<React.SetStateAction<number>>;
}

export function Entree_surface(props: props) {
  return (
    <div className = "surface"> 
      <label>La surface de votre logmement (en m²)</label>
      <input
        type="number"
        value={props.surface}
        onChange={(e) => props.setSurface(parseInt(e.target.value, 10))}
      />
     
    </div>
  );
}
