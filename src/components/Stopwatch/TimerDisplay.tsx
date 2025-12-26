import { Typography, Box, Paper, Chip } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { formatTime } from '../../utils/formatTime';

interface TimerDisplayProps {
  time: number;
  speed: number;
  lapsCount: number;
}

const TimerDisplay = ({ time, speed, lapsCount }: TimerDisplayProps) => {
  return (
    <Box>
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <AccessTime color="primary" sx={{ fontSize: 32 }} />
        <Typography variant="h4" component="h1" fontWeight="bold">
          Секундомер
        </Typography>
      </Box>

      <Paper 
        elevation={0} 
        sx={{ 
          p: 4, 
          textAlign: 'center',
          bgcolor: 'grey.50',
          borderRadius: 2,
          mb: 3
        }}
      >
        <Typography 
          variant="h2" 
          component="div" 
          fontFamily="monospace"
          fontWeight="bold"
          color="primary.main"
        >
          {formatTime(time)}
        </Typography>
        
        <Box display="flex" alignItems="center" justifyContent="center" gap={2} mt={2}>
          <Chip 
            label={`Скорость: ${speed}x`}
            color={speed === 1 ? "default" : speed > 1 ? "success" : "warning"}
            variant="outlined"
          />
          <Chip 
            label={`Кругов: ${lapsCount}`}
            color="info"
            variant="outlined"
          />
        </Box>
      </Paper>
    </Box>
  );
};

export default TimerDisplay;