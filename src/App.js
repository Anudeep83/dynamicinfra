import './App.css';
import ContactUs from './components/ContactUs/ContactUs.js';
import Form from './components/Form/Form';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Form/>
      <Home/>
      <ContactUs/>
    </div>
  );
}

export default App;
