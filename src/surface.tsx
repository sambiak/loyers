interface props {
  surface: number;
  setSurface: React.Dispatch<React.SetStateAction<number>>;
}

export function Entree_surface(props: props) {
  return (
    <div>
      <input
        type="number"
        value={props.surface}
        onChange={(e) => props.setSurface(parseInt(e.target.value, 10))}
      />
      <select value={props.surface} onChange={(e) => props.setSurface(parseInt(e.target.value, 10))}>
        {" "}
        <option value={0}>Grapefruit</option>
        <option value={1}>Lime</option>
        <option value={2}>Coconut</option>
        <option value={3}>Mango</option>
      </select>
    </div>
  );
}
