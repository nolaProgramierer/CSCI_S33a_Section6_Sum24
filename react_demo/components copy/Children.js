// Special children props
// Defines any content that you want between the opening and closing tags
const Children = (props) => {
    return (
      <div style={childrenStyle}>
        <h3>Children Example</h3>
        <li>{props.children} (ID: {props.id})</li>
      </div>
    ) 
  }

  const childrenStyle = {
    display: "flex", 
    flexDirection: "column", 
    alignItems: "center", 
    borderBottom: '1px solid black', 
    paddingBottom: "30px",
    border: "1px solid black",
    padding: "20px",
    marginTop: "50px",
  }
  
  export default Children;