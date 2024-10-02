import dayCamping from '../assets/day-camping.jpeg';
import nightCamping from '../assets/night-camping.jpeg';
import './Header.css';
import { useState, useRef } from 'react'
import sound from '../assets/campfire.mp3'

export default function Header() {
    const [checked, setChecked] = useState(false)
    const [audioChecked, setAudioChecked] = useState(false)
    const myRef = useRef();
    function handleClick() {
        setChecked(!checked)
    }


    function startAudio() {
        myRef.current.play();
        setAudioChecked(true);
    };

    function pauseAudio() {
        myRef.current.pause();
        setAudioChecked(false);
    };

    return (

        <header>
            <h1>Rugged Reuse</h1>
            <audio loop
                ref={myRef}
                src={sound}
            />
            {audioChecked ? (
                <button onClick={pauseAudio}>pause</button>
            ) : (
                <button onClick={startAudio}>start</button>
            )}
            <img class='camping-image' src={checked ? dayCamping : nightCamping} />

            <div class={checked ? 'fire' : 'nightFire'}>
                <img class='camping-fire' src='https://media.baamboozle.com/uploads/images/1197896/1677692362_34951_gif-url.gif' />
            </div>
            <input type='checkbox' checked={checked} onClick={handleClick} />

        </header>
    )
}