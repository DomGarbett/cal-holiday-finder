interface Props {
  handleChange: any;
  value: string;
}

function StartWeekSelector(props: Props) {
  return (
    <div className="col">
      <div className="start-week">Select Start Week</div>
      <select
        className="form-select"
        value={props.value}
        id="floatingSelect"
        onChange={props.handleChange}>
        <option value="A">A </option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
        <option value="G">G</option>
        <option value="H">H</option>
        <option value="I">I</option>
        <option value="J">J</option>
        <option value="K">K</option>
        <option value="L">L</option>
        <option value="M">M</option>
        <option value="N">N</option>
        <option value="O">O</option>
        <option value="P">P</option>
        <option value="Q">Q</option>
        <option value="R">R</option>
      </select>
    </div>
  );
}

export default StartWeekSelector;
