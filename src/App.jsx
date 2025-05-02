import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GradientLine from './components/GradientLine';

function App() {
  return (
    <ThemeProvider>
      <AppBackground />
    </ThemeProvider>
  );
}

function AppBackground() {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Blurred background image - fixed position to prevent reloading */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url("/images/background.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'blur(8px)',
          transform: 'scale(1.1)', // Prevents blur edges from showing
        }}
      ></div>

      {/* Overlay - fixed position */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundColor: isDarkMode ? 'rgba(8, 7, 6, 0.8)' : 'rgba(202, 209, 216, 0.8)',
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        <Router>
          <Navbar />
          <div className="navbar-line-container">
            <GradientLine className="w-full h-0.5" />
          </div>
          <main className={`max-w-screen-xl mx-auto px-4 md:px-8 py-8 pt-20 pb-32 flex-grow flex flex-col ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
