import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs/ContactUs.js';
import Form from './components/Form/Form';
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import PrivacyPolicy from './components/Packages/Packages.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Form />
            <Home />
            <ContactUs />
          </>
        } />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
