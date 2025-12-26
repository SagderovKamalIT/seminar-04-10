import { Container, Grid, Typography, Box } from '@mui/material';
import Counter from './components/Counter';
import { Calculate as CalculateIcon } from '@mui/icons-material';

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <CalculateIcon color="primary" sx={{ fontSize: 40 }} />
        <Typography variant="h3" component="h1" fontWeight="bold">
          Демонстрация хука useCounter
        </Typography>
      </Box>

      <Typography variant="h6" color="text.secondary" paragraph>
        Хук useCounter принимает начальное значение (по умолчанию 0) и возвращает объект с состоянием и методами для управления счетчиком.
      </Typography>


      <Grid container spacing={4} sx={{ mt: 2 }}>
     
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              p: 3, 
              borderRadius: 3,
              bgcolor: 'primary.light',
              color: 'primary.contrastText',
              mb: 2
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Счетчик с начальным значением 5
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Этот компонент передает initialValue=5 в хук useCounter
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Counter initialValue={5} label="Счетчик #1" />
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              p: 3, 
              borderRadius: 3,
              bgcolor: 'secondary.light',
              color: 'secondary.contrastText',
              mb: 2
            }}
          >
            <Typography variant="h5" gutterBottom fontWeight="bold">
              Счетчик с начальным значением по умолчанию (0)
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Этот компонент не передает initialValue, поэтому используется значение по умолчанию 0
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Counter label="Счетчик #2" />
          </Box>
        </Grid>
      </Grid>

    </Container>
  );
};

export default App;