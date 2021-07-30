import Registro from './views/Registro'
import {BrowserRouter,Route} from "react-router-dom"
import Menu from './components/Menu'
import Login from './views/LogIn'
import ProductoLista from './views/ProductoLista'
import DetalleProducto from './components/DetalleProducto'
import UserProvider from './context/userProvider'
import './App.css';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Menu />
        <Route path="/" exact component={Login} />
        <Route path="/registro" exact component={Registro} />
        <Route path="/productos" exact component={ProductoLista} />
        <Route path="/producto/:id" exact component={DetalleProducto} />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
