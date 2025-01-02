import './App.css';
import Slider from './Components/slider/task.jsx';
import Navbar from './Components/navbar/navbar.jsx';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Slider />} />         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
