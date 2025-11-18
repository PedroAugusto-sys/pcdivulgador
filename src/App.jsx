import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ProjectDetail from './components/Projects/ProjectDetail'
import Contact from './components/Contact/Contact'
import 'animate.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/projetos" element={<Projects />} />
            <Route path="/projetos/:id" element={<ProjectDetail />} />
            <Route path="/contato" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

