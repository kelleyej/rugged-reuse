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

    return (

        <Box sx={{ width: 500, height: 500, marginLeft: 5 }}>


            <Masonry columns={3} spacing={2}>
                {itemData.map((item, index) => (
                    <div key={index}>
                        <Label>{item.title}</Label>
                        <img class='cards'
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
    }
]