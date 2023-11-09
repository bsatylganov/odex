import './App.css'
import logo from './4nxpbpgttzemiwcb.png'
import logo2 from './4nepbq6ttueajwfofzeadwf94nhpdygtoe.png'

function Header() {
  return (
    <div>
        <header className='header'>
            <div className='head'>
                {/* <p className='text'>Одэкс</p> */}
                <img src={logo}/>
                <img src={logo2}/>
            </div>
        </header>
    </div>
  );
}

export default Header
