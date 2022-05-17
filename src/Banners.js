import axios from "axios";
import { useEffect, useState } from "react";
import  Loader  from './components/Loader/Loader';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Banners = () => {
    const [items, setItems] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() =>{
        getItems();
    }, []);

    const getItems = async() =>{
        await axios.get('https://fortnite-api.com/v1/banners')
        .then(response => {
            setItems(response.data.data);
            setShowLoader(false);
        });
    }
    return(
        <>
       { showLoader && <Loader/>}
       <Container sx={{ py: 1 }} maxWidth="lg">
        <Grid container spacing={3}>
        { items && items.length > 0 && 
            items.map((el, index) => {
                return <Grid item key={`${el.id}${index}`} xs={12} sm={6} md={3}>
                        <Card key={`${el.id}${index}`}
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundImage: 'linear-gradient(blue, violet)' }}
                        >
                        <CardMedia
                            component="img"
                            sx={{
                            pt: '12%',
                            }}
                            image={el.images.icon}
                            alt={el.category}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {el.category}
                            </Typography>
                            <Typography >
                            {el.description}
                            </Typography>
                        </CardContent>
                        </Card>
                    </Grid>})
        }
        </Grid>
        </Container>
        </>
    )
}

export default Banners;