import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Hero from "./ui/Hero";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}

export default App;
