import Shopdashbord from "./Components/ShopDashBoard";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/shopdashbord' element={<Shopdashbord/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
