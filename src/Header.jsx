import './App.css'
import logo from './logo.png'
import logo2 from './4nepbq6ttueajwfofzeadwf94nhpdygtoe.png'

function Header() {
  return (
    <div>
        <header className='header'>
            <div className='head'>
                {/* <p className='text'>Одэкс</p> */}
                <img src={logo}/>
                <p>"Отборное зерно, тщательная перегонка, идеальная чистота - наша водка"</p>
            </div>
        </header>
    </div>
  );
}

export default Header
