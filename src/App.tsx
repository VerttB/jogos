
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { jogosPath } from './constants/jogosPath/jogosPath'

function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        {jogosPath.map((jp) => <Route key={jp.nome} path={jp.caminho} element={jp.componente}/>)} 
        {/* // <Route path='/' element={<MenuPrincipal/>}></Route>
        // <Route path="/jogo-da-memoria" element={<JogoMemoria/>}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
