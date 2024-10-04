import './Gear.css'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import Tent from '../assets/tent.jpeg'
import Backpack from '../assets/backpack.jpeg'
import Lantern from '../assets/lantern.jpeg'
import Thermus from '../assets/thermus.jpeg'
import sleepingBag from '../assets/sleeping-bag.jpeg'
import Chair from '../assets/chair.jpeg'
import Compass from '../assets/compass.jpeg'
import Weather from '../assets/weather.jpeg'
import Cards from '../assets/cards.jpeg'
import { useState, useEffect } from 'react';

const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export default function Gear() {

    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch('http://127.0.0.1:8000/gear/')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])

    function handleSubmit(event) {
        let formData = new FormData()
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', image);
        formData.append('category', category)
        event.preventDefault()
        fetch('http://127.0.0.1:8000/gear/', {
            method: 'POST',
            body: formData
        })
    }

    return (
        <div className='main-gear'>
            <h1 className='gear-title'>Rugged Reuse</h1>
            <section className='gear-page'>

                <Box sx={{ width: '65%', height: 500, marginLeft: 5 }}>


                    <Masonry columns={3} spacing={2}>
                        {itemData.map((item, index) => (
                            <div key={index}>
                                <Label>{item.title}</Label>
                                <img className='cards'
                                    srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=162&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        display: 'block',
                                        width: '100%',
                                    }}
                                />
                            </div>
                        ))}
                    </Masonry>
                </Box>
                <section className='add-item'>
                    <h2>Add Item to Sell</h2>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <label htmlFor='title'>Title</label>
                        <input id='title' type='text' onChange={(event) => setTitle(event.target.value)} value={title} />
                        <label htmlFor='add-image' className='custom-add'>Add a Photo</label>
                        <input id='add-image' type='file' onChange={(event) => setImage(event.target.files[0])} />
                        <label htmlFor='descriptionText'>Description</label>
                        <textarea id='descriptionText' onChange={(event) => setDescription(event.target.value)} value={description} />
                        <p>You have {500 - description.length} characters left.</p>
                        <select onChange={(event) => setCategory(event.target.value)}>
                            <option value=''>Choose a Category</option>
                            <option value='tents'>Tents</option>
                            <option value='sleeping-bags'>Sleeping Bags</option>
                            <option value='entertainment'>Entertainment</option>
                        </select>
                        <button type='submit'>Submit</button>
                    </form>
                </section>
            </section>
        </div>



    );
}

const itemData = [
    {
        img: Tent,
        title: 'Tent'
    },
    {
        img: Backpack,
        title: 'Backpack'
    },
    {
        img: Lantern,
        title: 'Lantern'
    },
    {
        img: Thermus,
        title: 'Thermus'
    },
    {
        img: sleepingBag,
        title: 'Sleeping Bag'
    },
    {
        img: Chair,
        title: 'Chair'
    },
    {
        img: Compass,
        title: 'Compass'
    },
    {
        img: Weather,
        title: 'Weather'
    },
    {
        img: Cards,
        title: 'Entertainment'
    }
]