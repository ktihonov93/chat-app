import './App.css';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Contact name="Marion Woods" avatar="https://randomuser.me/api/portraits/women/80.jpg" online/>
      <Contact name="Jessica Cruz" avatar="https://randomuser.me/api/portraits/women/62.jpg"/>
      <Contact name="Wyatt Herrera" avatar="https://randomuser.me/api/portraits/men/65.jpg" online/>
    </div>
  );
}

export default App;
