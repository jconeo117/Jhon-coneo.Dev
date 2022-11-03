import './App.css';
import {Header} from './containers/header' 
import {Inicio} from './containers/inicio'
import {About} from './containers/about'
import {Skills} from './containers/skills'
import {Expeducation} from './containers/exp_education'
import {Proyectos} from './containers/proyects'
import {Contac} from './containers/contact'
import {Footer} from './containers/footer'

function App() {
  return (
   <>
    <Header/>
    <Inicio/>
    <About/>
    <Skills/>
    <Expeducation/>
    <Proyectos/>
    <Contac/>
    <Footer/>
   </>
  );
}

export default App;
