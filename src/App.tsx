import { About, Contact, Footer, Hero, Navbar, Reviews, Services } from "./components";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider>
      <Toaster />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
