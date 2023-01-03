import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Nav/nav";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Nav/>
            <About/>
            <Experience/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    );
}


export default App;
