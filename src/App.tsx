
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { jogosPath } from './constants/jogosPath'
import MenuPrincipal from './pages/MenuPrincipal'
import { ErrorPage } from './pages/ErrorPage'


function App() {
  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MenuPrincipal></MenuPrincipal>}></Route>
        <Route path='*' element={<ErrorPage/>}/>
        
        {jogosPath.map((jp) => <Route key={jp.nome} path={jp.caminho} element={jp.componente}/>)} 
      </Routes>
    </BrowserRouter>
  )
}

export default App
