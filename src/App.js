import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Container from "./components/Container";


function App() {
  return (
    <>
        <Header />
        <Banner />
        <Container>
        <h1>Catalogo de Filmes</h1>
        <p>Escolha a categoria que você mais ama e bom filme!</p>
        </Container>
        <Footer />
    </>
  );
}

export default App;
