
function Code(props){
  const{name,age,city,state}=props
  return (
    <div>
      <h2> welcome: {name} </h2>
      <h2> age: {age} </h2>
      <h2> city: {city} </h2>
      <h2>state:{state}</h2>
    </div>
  ); 
}

export default Code;