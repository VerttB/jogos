
import { JogoMemoria } from './components/JogoDaMemoria/JogoMemoria'
import { JogoDaVelha } from './components/JogoDaVelha/Jogo'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { MenuSecundario } from './components/MenuSecundario'
function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/jogo-da-memoria/menu" element={<MenuSecundario/>}></Route>
        <Route path="/jogo-da-memoria/jogo" element={<JogoMemoria/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
