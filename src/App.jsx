import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [dots, setDots] = useState('');


  useEffect(() => {
    if (!started) return;

    if (progress < 100) {
      const timer = setTimeout(() => {
        setProgress((prev) => Math.min(prev + 2, 100));
      }, 50);
      return () => clearTimeout(timer);
    } else {
      const finishTimer = setTimeout(() => onFinish(), 300);
      return () => clearTimeout(finishTimer);
    }
  }, [progress, onFinish, started]);

  
  useEffect(() => {
    if (!started) return;

    const dotTimer = setInterval(() => {
      setDots((prev) => {
        if (prev === ' . . .') return ''; 
        if (prev === '') return ' .';
        return prev + ' .'; 
      });
    }, 500);

    return () => clearInterval(dotTimer);
  }, [started]);

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8 } }}
        className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50"
      >
        {!started ? (

          <motion.button
            onClick={() => setStarted(true)}
            whileTap={{ scale: 0.9 }} 
            whileHover={{ scale: 1.05 }} 
            className="px-8 py-4 text-2xl font-bold bg-white text-black rounded-lg transition"
            style={{ fontFamily: "VPPixel" }}
          >
            START
          </motion.button>
        ) : (

          <>
            <h1
              className="mb-8 text-white"
              style={{ fontFamily: "VPPixel", fontSize: "6rem", textAlign: "center" }}
            >
              Entering{dots}
            </h1>
            <div className="w-64 h-4 bg-gray-800 rounded overflow-hidden mb-4">
              <div
                className="h-4 rounded overflow-hidden mb-4"
                style={{ width: `${progress}%`, backgroundColor: "#ffffff" }}
              ></div>
            </div>
            <p className="text-white font-mono text-lg">{progress}%</p>
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
