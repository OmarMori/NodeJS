import logo from './logo.svg';
import './App.css';
import AdminLayout from './components/component.admin.layout'
import BookList from './components/component.booklist';
import { Route,Routes } from 'react-router-dom';
import BookNew from './components/component.book.new';
import Home from './components/component.home';


function App() {
  return (
    <>
    <Routes>
          <Route path={'/admin'} element={<AdminLayout/>}>
              <Route path={"books"} element={<BookList/>}></Route>
              <Route path={"books/new"} element={<BookNew/>}></Route>
            </Route>
            <Route path={"/"} element={<Home></Home>}></Route>
          
            

    </Routes>
    </>



  );
}

export default App;
