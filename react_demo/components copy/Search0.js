// A basic HTML form which doesn't do anything other than render the form
export default function Search0() {
    // Looks like plain vanilla HTML, but is actually JSX
    return (
      <div style={
        { display: "flex", 
        flexDirection: "column", 
        alignItems: "center", 
        borderBottom: '1px solid black', 
        paddingBottom: "30px",
        border: "1px solid black",
        padding: "20px" }
        }
      >
        
        <h3>Basic Search Form0</h3>
        <h5>I don't do anything!</h5>

        <label htmlFor="search">Search: </label>
        <input id="search" type="text" />
      </div>
    )
  }
  