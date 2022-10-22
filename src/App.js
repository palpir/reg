import {Route, Routes} from 'react-router-dom';
import Product from './Pages/Product/Product.jsx';
import AnotherAccount from './Pages/AnotherAccount/AnotherAccount.jsx';
import MyAccount from './Pages/MyAccount/MyAccount.jsx';
import AddPost from './Pages/AddPost/AddPost.jsx';
import BisnessAccount from './Pages/BisnessAccount/BisnessAccount.jsx';
import Home from './Pages/Home/Home.jsx';
import React, { useEffect } from 'react';

import './scss/style.scss';
import Header from './layout/Header/Header.jsx';

function App() {
  const [user, setUser] = React.useState({}); 

  useEffect(()=>{
    if(JSON.parse(localStorage.getItem('user')) !== null) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  },[]);

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/MyAccount" element={<MyAccount/>} />
        <Route path="/BisnessAccount" element={<BisnessAccount/>} />
        <Route path="/AnotherAccount" element={<AnotherAccount/>} />
        <Route path="/AddPost" element={<AddPost/>} />
        <Route path="/Product" element={<Product/>} />
     </Routes>
    </div>
  );
}

export default App;
