import Registro from './views/Registro'
import {BrowserRouter,Route} from "react-router-dom"
import Menu from './components/Menu'
import Login from './views/LogIn'
import ProductoLista from './views/ProductoLista'
import DetalleProducto from './components/DetalleProducto'
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <Menu />
    //   <Login />
    // </div>
    <BrowserRouter>
      <Menu />
      <Route path="/" exact component={Login} />
      <Route path="/registro" exact component={Registro} />
      <Route path="/productos" exact component={ProductoLista} />
      <Route path="/producto/:id" exact component={DetalleProducto} />
    </BrowserRouter>
  );
}

export default App;
