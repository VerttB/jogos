
import { JogoMemoria } from './components/JogoDaMemoria/JogoMemoria'
import { JogoDaVelha } from './components/JogoDaVelha/Jogo'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { MenuSecundario } from './components/MenuSecundario'
import { useNavigate } from 'react-router-dom'
import MenuPrincipal from './components/MenuPrincipal'
import { jogosPath } from './constants/jogosPath/jogosPath'
function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        {jogosPath.map((jp) => <Route path={jp.caminho} element={jp.componente}/>)} 
        {/* // <Route path='/' element={<MenuPrincipal/>}></Route>
        // <Route path="/jogo-da-memoria" element={<JogoMemoria/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
