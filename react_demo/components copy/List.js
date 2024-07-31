// Importing 'persons' object from App.js
const List = ({persons}) => {
    return (
      <div style={mapExStyle}>
        <h3>List example using map method</h3>
        <h5>Using another component inside the map method</h5>
        {/* Iterating through every element of 'persons' object */}
         <ul>
          {persons.map((item) => (
            // Passing iterable element into 'Item' component
            <Item key={item.id} item={item} />
          ))}
      </ul>
      </div>
     
    )
  }

  // Component could be declared elsewhere
  const Item = (props) => {
    const { item } = props;
    return (
      <li>
        <span><a href={item.ip_address}>{item.ip_address}</a></span>
        <span>{item.first_last}</span>
        <span>{item.last_last}</span>
        <span>{item.email}</span>
      </li>
    )
  }

  const mapExStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid black",
    width: "80%",
    margin: "50px 0px",
  }

export default List;