import {Data, MyImage, ActionAlert} from './profile/Profile';

function App() {
  const myStyle = {color:'#white', fontSize: 15, fontWeight: 500, 
    backgroundColor: "#808080", textAlign: "center"};
  const handleName = e => {
    e.preventDefault();
    alert("hakim");
  };
  return (
    <>
    <header style={myStyle}>
      <Data fullName ="hakim" bio ="27 years old " profession="etudiant"></Data>
      <MyImage>picture</MyImage>
      <br></br>
      <ActionAlert handleName={handleName}></ActionAlert>
    </header>
    </>
  );
}

export default App;
