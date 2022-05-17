import axios from "axios";
import { useEffect, useState } from "react";
import  Loader  from './components/Loader/Loader';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

const Skin = () => {
    const [items, setItems] = useState([]);
    const [showLoader, setShowLoader] = useState(true);
    useEffect(() => {
        getItems();
    }, []);

    const getItems = async() =>{
        await axios.get('https://fortnite-api.theapinetwork.com/upcoming/get')
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
            items.map(el => {
                return <Grid item key={el.item.itemId} xs={12} sm={6} md={3}>
                        <Card key={el.item.itemId}
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundImage: 'linear-gradient(red, yellow)' }}
                        >
                        <CardMedia
                            component="img"
                            sx={{
                            pt: '12%',
                            }}
                            image={el.item.images.icon}
                            alt={el.item.name}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                            {el.item.name}
                            </Typography>
                            <Typography>
                            {el.item.description}
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

export default Skin;