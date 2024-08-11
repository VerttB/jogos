
import { JogoMemoria } from './components/JogoDaMemoria/JogoMemoria'
import { JogoDaVelha } from './components/JogoDaVelha/Jogo'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { MenuSecundario } from './components/MenuSecundario'
import { useNavigate } from 'react-router-dom'
import MenuPrincipal from './components/MenuPrincipal'
function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuPrincipal/>}></Route>
        <Route path="/jogo-da-memoria" element={<JogoMemoria/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
