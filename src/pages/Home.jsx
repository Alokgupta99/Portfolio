import react from 'react'
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Work></Work>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}
export default Home;