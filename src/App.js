
import {Header} from './containers/header/header' 
import {Inicio} from './containers/inicio/inicio'
import {About} from './containers/about/about'
import {Skills} from './containers/skills/skills'
import {Expeducation} from './containers/curriculum/curriculum'
import {Proyectos} from './containers/proyects/proyects'
import {Contac} from './containers/contact/contact'
import {Footer} from './containers/footer/footer'

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
