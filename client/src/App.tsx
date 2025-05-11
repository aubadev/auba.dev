import { useEffect } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  // Disable right-click, selection, and copy for content protection
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    const handleSelectStart = (e: Event) => e.preventDefault();
    const handleCopy = (e: Event) => e.preventDefault();

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("selectstart", handleSelectStart);
    document.addEventListener("copy", handleCopy);

    // Spotlight hover effect
    const handleMouseMove = (e: MouseEvent) => {
      const spotlightElements = document.querySelectorAll<HTMLElement>('.spotlight');
      
      spotlightElements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          const xPercent = Math.round((x / rect.width) * 100);
          const yPercent = Math.round((y / rect.height) * 100);
          element.style.setProperty('--x', `${xPercent}%`);
          element.style.setProperty('--y', `${yPercent}%`);
        }
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("selectstart", handleSelectStart);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div className="bg-dark text-light font-sans min-h-screen overflow-x-hidden">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
          </main>
          <Footer />
          <BackToTop />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
