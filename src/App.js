import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import Home from './pages/Home';
import About from './pages/About';
import UpdatesList from './pages/UpdatesList';
import AllNews from './pages/AllNews';
import NewsItemPage from './pages/NewsItemPage';
import Feedback from './pages/Feedback'
import DocumentationPage from './pages/DocumentationPage';
import TutorialPage from './pages/TutorialPage';

function App() {
  return (
    <Router>
      <Header />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/updates" element={<UpdatesList />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="/allNews" element={<AllNews />} />
          <Route path="/news/:id" element={<NewsItemPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
