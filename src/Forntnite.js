import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Fortnite = () => {
    return(
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Fortnite 🎮
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine.
          </Typography>
        </Container>
        </Box>
      </main>
    )
}

export default Fortnite;