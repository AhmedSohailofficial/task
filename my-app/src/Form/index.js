

export default function Form({ submitButton, handleChange, value }) {
  return (
    <form>
      <label>
        Enter input data Id:
        <input type="text" value={value} onChange={handleChange} />
      </label>
     
       
    </form>
  );
}
