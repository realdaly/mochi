import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import DetailsPage from "./DetailsPage"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>

            <Route path="/" element={<Home />} />
            
            <Route path="details/:type/:id" element={<DetailsPage />} />

          </Routes>
        </div>
      </div>
      
    </Router>
  )
}

export default App;
