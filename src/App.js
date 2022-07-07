import logo from './logo.svg';
import './App.css';
import PersonCard from './components/SomeComponent';
function App() {
  return (
    <div className="App">
        <PersonCard 
        firstName="Juan" lastName="Santiago" 
        age = {24}
        hairColor = "Black"
        />
        <PersonCard 
        lastName="Smith" firstName="John"  
        age = {88}
        hairColor = "Brown"
        />
        <PersonCard 
        firstName="Fillmore" lastName="Millard" 
        age = {50}
        hairColor = "Brown"
        />
        <PersonCard 
        firstName="Smith" lastName="Maria" 
        age = {62}
        hairColor = "Black"
        />
    </div>
  );
}

export default App;
