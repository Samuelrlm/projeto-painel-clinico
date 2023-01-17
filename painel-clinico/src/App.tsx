import { GlobalStyles } from './styles/global'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { PainelPage } from './pages/Painel'
import { PainelNone } from './pages/Painel_none'
import { LoginPage } from './pages/LoginPage'

function App() {

  return (
    <>
      <GlobalStyles/>
      <Router>
        <Routes>
          <Route path='/' element={<PainelNone/>}/>
          <Route path='/setor/:cd_setor' element={<PainelPage/>}/>
          <Route path='/login/:cd_paciente' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
