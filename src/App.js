import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";
import Cards from "./components/Cards";


function App() {
  return (
    <>
        <Header />
        <Banner images="favoritos" />
        <Container>
        <h2>GEOGRAFIA</h2>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </Container>
        <Footer />
    </>
  );
}

export default App;
