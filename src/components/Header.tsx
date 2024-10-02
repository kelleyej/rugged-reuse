import dayCamping from '../assets/day-camping.jpeg';
import nightCamping from '../assets/night-camping.jpeg';
import './Header.css';
import { useState } from 'react'

export default function Header() {
    const [checked, setChecked] = useState(false)

    function handleClick() {
        setChecked(!checked)
    }
    console.log(checked)
    return (
        <header>

            <img class='camping-image' src={checked ? dayCamping : nightCamping} />

            <div class={checked ? 'fire' : 'nightFire'}>
                <img class='camping-fire' src='https://media.baamboozle.com/uploads/images/1197896/1677692362_34951_gif-url.gif' />
            </div>
            <input type='checkbox' checked={checked} onClick={handleClick} />

        </header>
    )
}