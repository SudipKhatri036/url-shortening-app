import GlobalStyles from "./styles/GlobalStyles";
import Footer from "./ui/Footer";
import GetStarted from "./ui/GetStarted";
import Header from "./ui/Header";
import Hero from "./ui/Hero";
import Statistics from "./ui/Statistics";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <Statistics />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}

export default App;
