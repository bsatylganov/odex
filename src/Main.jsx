import React from 'react';
import './App.css'
import bur1 from './бурана1_pixian_ai.png'
import bur5 from './юурана5_pixian_ai.png'
import but7 from './бурана7_pixian_ai.png'
import ros5 from './роса5_pixian_ai.png'
import ros7 from './роса7_pixian_ai.png'
import kag1 from './kag1.png'
import kag2 from './kag2.png'
import alkash from './348146064033211.png'

const Main = () => {
    return (
        <div className='main'>
            {/* <img src={alkash} className='alkash'/> */}
            <div className='bur_block'>
                <img src={bur1}/>
                <p>Бурана 1л 450c</p>
                <img src={but7}/>
                <p>Бурана 0,7л 330с</p>
                <img src={bur5}/>
                <p>Бурана 0,48л 280с</p>
                <img src={ros7}/>
                <p>Чистые росы 0,7л 440с</p>
                <img src={ros5}/>
                <p>Чистые росы 0,5л 320с</p>
                <img src={kag2}/>
                <p>Каганат 0,7л 470с</p>
                <img src={kag1}/>
                <p>Каганат 0,5л 390с</p>
            </div>
        </div>
    );
}

export default Main;
