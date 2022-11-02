import './App.css';
import {Header} from './containers/header' 
import {Inicio} from './containers/inicio'
import {About} from './containers/about'
import {Skills} from './containers/skills'
import {Exp_education} from './containers/exp_education'

function App() {
  return (
   <>
    <Header/>
    <Inicio/>
    <About/>
    <Skills/>
    <Exp_education/>
   </>
  );
}

export default App;
