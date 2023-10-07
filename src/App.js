import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleView from './pages/SingleView';
import Header from './components/Header';
import Footer from './components/Footer';
import './bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/view/:id' element={<SingleView/>}></Route>
 </Routes>     
 <Footer></Footer>
    </div>
  );
}

export default App;
