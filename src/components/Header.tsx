import dayCamping from '../assets/day-camping.jpeg';
import './Header.css'

export default function Header() {
    return (
        <header>
            <img class='camping-image' src={dayCamping} />
        </header>
    )
}