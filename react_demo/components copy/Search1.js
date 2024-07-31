// A Form that console logs what is typed into the input form
export default function Search1() {
    
    const handleChange = (e) => {
      // Synthetic event
      // A wrapper around the native browser events, providing cross-browser consistency
      console.log(e);
      // Value of target (here: the element)
      console.log(e.target.value);
    }

    return (
      <div style={searchStyle}>
        <h3>Basic Search Form1</h3>
        <h5>Handling text change in the browser console</h5>
        <label htmlFor="search">Search1: </label>
        <input id="search1" type="text" onChange={handleChange} />
      </div>
      
    )
  }
  
  const searchStyle = {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    borderBottom: '1px solid black', 
    paddingBottom: "30px",
    border: "1px solid black",
    padding: "20px",
    marginTop: "50px",
  }