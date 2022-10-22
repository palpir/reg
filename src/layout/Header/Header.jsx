import React from 'react';
import {Link} from 'react-router-dom';
import Popup from '../../components/Popup/Popup.jsx';

const Header = ({user, setUser}) => {
  const[popup, setPopup]=React.useState(false);
  return (

    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <div className="header__left">
            <h1 className="header__title"><Link to="/">LALAFO</Link></h1>
            <Link  className="header__link" to="/">Для бизнесса</Link>
          </div>
          <div className="header__right">
            {
              (user.email) ? (<p> {user.name }</p>) : (
              <p onClick={()=>setPopup(true)} className="header__login">
              Войти - Зарегистрировать
            </p>)

            }
           
            <button type={"button"} className="header__btr">
              Подать заявку
            </button>
          </div>
        </nav>
      </div>
      {
        popup && <Popup user={user} setUser={setUser} setPopup={setPopup} popup={popup}/>
      }
    </header>
  )
}

export default Header

