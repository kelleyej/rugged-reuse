
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
        <section class='main-container'>
            <section class={checked ? 'dayCamping' : 'nightCamping'}>
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
                <button onClick={handleClick} class='toggle'><div class={checked ? 'circle' : 'nightCircle'}>{checked ? '🌕' : '☀️'}</div><div class={checked ? 'time' : 'nightTime'}>{checked ? 'PM' : 'AM'}</div></button>
            </section>
            <form>
                <label>Email</label>
                <input type='text' />
                <label>Password</label>
                <input type='text' />
                <button type='submit'>Login</button>
            </form>
        </section>


    )
}