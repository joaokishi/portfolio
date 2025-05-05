import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GradientLine } from "../components/ui";
import { memo, useMemo } from "react";
import backgroundImage from "../assets/background.jpg";



const MainLayout = ({ children }) => {
  const { isDarkMode } = useTheme();

  // Memoize styles to prevent recalculations
  const backgroundStyle = useMemo(
    () => ({
      backgroundSize: "cover",
      backgroundPosition: "center",
      filter: "blur(8px)",  
      backgroundImage: `url(${backgroundImage})`
    
    }),
    []
  );
  const backgroundDivStyle = useMemo(() => ({
    }),
    []
  );

  const overlayStyle = useMemo(
    () => ({
      backgroundColor: isDarkMode ? "rgba(8, 7, 6, 0.8)" : "rgba(202, 209, 216, 0.8)",
    }),
    [isDarkMode]
  );

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Blurred background image - fixed position to prevent reloading */}
      <div
        className="fixed inset-0 z-0 "
        style={backgroundStyle}
      >      
       
      </div>
      {/* Overlay - fixed position */}
      <div
        className="fixed inset-0 z-0"
        style={overlayStyle}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full" >
        <Navbar />
        <div className="navbar-line-container">
          <GradientLine className="w-full h-0.5" />
        </div>
        <main
          className={`max-w-screen-xl mx-auto px-2 sm:px-4 md:px-8 flex-grow flex flex-col ${isDarkMode ? "text-white" : "text-gray-900"}`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default memo(MainLayout);
