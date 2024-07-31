import { useState } from 'react';

import Search0 from './components/Search0.js';
import Search1 from './components/Search1.js';
import Search2 from './components/Search2.js';
import Search3 from './components/Search3.js';
import Children from './components/Children.js';
import SearchBar from './components/SearchBar.js';
import Overview  from './components/Overview.js';
import LoginForm from './components/LoginForm.js';
import CharCounter from './components/CharCounter.js';
import People0 from './components/People0.js';
import People1 from './components/People1.js';
import List from './components/List.js';


// A basic JS function
function showTitle(name) {
  return name;
  }


//-------------------------------------------------------------------
//App Component
//-------------------------------------------------------------------


function App() {

  const persons1 = [{"id":1,"first_name":"Sybille","last_name":"Teager","email":"steager0@cpanel.net","gender":"Female","ip_address":"237.175.8.222"},
{"id":2,"first_name":"Erwin","last_name":"Jeromson","email":"ejeromson1@yellowbook.com","gender":"Male","ip_address":"43.214.86.86"},
{"id":3,"first_name":"Aloysius","last_name":"Alflatt","email":"aalflatt2@cornell.edu","gender":"Male","ip_address":"192.176.30.240"},
{"id":4,"first_name":"Dorry","last_name":"Hawler","email":"dhawler3@topsy.com","gender":"Female","ip_address":"205.90.147.160"},
{"id":5,"first_name":"Lucio","last_name":"Kummerlowe","email":"lkummerlowe4@ning.com","gender":"Genderfluid","ip_address":"213.209.127.123"},
{"id":6,"first_name":"Amabel","last_name":"Ingerman","email":"aingerman5@state.tx.us","gender":"Female","ip_address":"47.15.20.228"},
{"id":7,"first_name":"Yvette","last_name":"Philpots","email":"yphilpots6@liveinternet.ru","gender":"Genderfluid","ip_address":"1.223.234.125"},
{"id":8,"first_name":"Cooper","last_name":"Wickie","email":"cwickie7@unicef.org","gender":"Male","ip_address":"123.140.68.26"},
{"id":9,"first_name":"Talbot","last_name":"Locock","email":"tlocock8@freewebs.com","gender":"Male","ip_address":"41.48.92.169"},
{"id":10,"first_name":"Alain","last_name":"Worrell","email":"aworrell9@census.gov","gender":"Male","ip_address":"9.254.121.32"}]

// Function for Search 3 in return statement
const handleSearch = (e) => {
  console.log(e.target.value)
}

// For lifting state in Searchbar and Overview components
const [searchTerm1, setSearchTerm1] = useState("");

function updateSearchTermHandler(e) {
  setSearchTerm1(e.target.value);
}


  return (
    <div style = {containerStyle}>
      <h1>{showTitle("Section 6 React Examples")}</h1>
      <hr style = {lineStyle}/>

      <Search0/>
      
      <Search1 />
      
      <Search2 />

      <Search3 onSearch={handleSearch}/>
     
      <Children id="ghl">Hello React</Children>

      <div style={siblingStyle}>
        {/* Passing props in from the App component  */}
        <SearchBar onUpdateSearch={updateSearchTermHandler} />
        <Overview currentTerm1={searchTerm1} />
      </div>
      
      <LoginForm />
      
      <CharCounter />
      
      <People0 />
      
      <People1 persons={persons1}/>
      
      <List persons={persons1} />
      
    </div>  
  );
}

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "30px"
}
const siblingStyle = {
  display: "flex",
  flexDirection: "column",
  border: "1px solid black",
  padding: "30px",
  margin: "30px 0 30px 0",
  backgroundColor: "beige",
}
const lineStyle = {
  color: "black",
  height: "1px",
  background: "black",
  borderColor: "black",
  width: "100%"
}

export default App;
