import { Container, Typography, Box } from '@mui/material';
import Stopwatch from './components/Stopwatch';
import { AccessTime } from '@mui/icons-material';

const App = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <AccessTime color="primary" sx={{ fontSize: 40 }} />
        <Typography variant="h3" component="h1" fontWeight="bold">
          Секундомер с кругами
        </Typography>
      </Box>
      
      <Typography variant="body1" paragraph color="text.secondary">
        Демонстрация жизненного цикла React-компонентов с использованием хуков и Material UI
      </Typography>
      
      <Stopwatch />
    </Container>
  );
};

export default App;