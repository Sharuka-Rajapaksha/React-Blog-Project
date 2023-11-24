import logo from './logo.svg';
import './App.css';


function MainPage(){
	return(
		<h1> Welcome to React! </h1>
	);
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my app</h1>
      <MainPage/>
    </div>
  );
}

export default App;
