// List of people using map with props passed from ancestor element
function People1(props) {
    return (
      <div style={mapExStyle}>
        <h3>People example 1</h3>
        <h5>Example using map with state passed via props</h5>
        <ul>
          {props.persons.map((person, index) => {
            return <li key={index}>
              <span><a href={person.ip_address}>{person.ip_address}</a></span>
              <span>{person.email}</span>
              <span>{person.first_name}</span>
              <span>{person.last_name}</span>
              </li>
          })}
       </ul>
      </div>
    )
  }

const mapExStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px solid black",
  width: "80%",
  marginTop: "50px"
}
  export default People1;