import './Category.css';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GearCard from './GearCard.tsx'

export default function Category() {
    const [gear, setGear] = useState([])
    let { category } = useParams()
    console.log(gear)
    useEffect(() => {
        fetch('http://127.0.0.1:8000/gear/')
            .then(response => response.json())
            .then(data => setGear(data.filter(item => item.category === category)))
    }, [])
    const gearGrid = gear.map(group => {
        return (

            <GearCard
                image={group.image}
                title={group.title}
                description={group.description}
                key={group.id}
            />
        )
    })



    return (
        <section className="gear-container">
            {gearGrid}
        </section>
    )


}