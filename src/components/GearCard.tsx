import './GearCard.css';

export default function GearCard({ title, image, description, id }) {
    return (
        <section>
            <h3>{title}</h3>
            <img className='gear-image' src={`http://127.0.0.1:8000/${image}`} />
            <p>{description}</p>
        </section>
    )
}