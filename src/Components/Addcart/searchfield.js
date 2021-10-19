// import React from "react";
// import ReactDOM from "react-dom";
// import API from "./mockAPI"


// function Searchfield() {
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const[items,setItems] = React.useState();
// //   const [searchResults, setSearchResults] = React.useState([]);
//   console.log(searchTerm)
//   console.log(items)
//   console.log(API)

//   const handleChange = e => {
//     setSearchTerm(e.target.value);
//   };
//   React.useEffect(() => {
//     // console.log(items.map(person =>person.name)
//     const results = items.filter(person =>
//       person.name.toLowerCase().includes(searchTerm)
//     );
//     setItems(results);
//   }, [searchTerm]);
//   return (
//     <div className="App">
//       <input
//         type="text"
//         placeholder="Search"
//         value={searchTerm}
//         onChange={handleChange}
//       />
//       {/* <ul>
//         {items.map(item => (
//           <li>{item}</li>
//         ))}
//       </ul> */}
//     </div>
//   );
// }

// export default Searchfield;