import { Box, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { FastForward, FastRewind } from '@mui/icons-material';

interface SpeedControlProps {
  speed: number;
  onIncreaseSpeed: () => void;
  onDecreaseSpeed: () => void;
}

const SpeedControl = ({ speed, onIncreaseSpeed, onDecreaseSpeed }: SpeedControlProps) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" gutterBottom>
        Управление скоростью
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="outlined"
            onClick={onDecreaseSpeed}
            disabled={speed <= 0.5}
            startIcon={<FastRewind />}
            color="warning"
          >
            Замедлить (0.5x)
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="outlined"
            onClick={onIncreaseSpeed}
            disabled={speed >= 2}
            startIcon={<FastForward />}
            color="success"
          >
            Ускорить (2x)
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SpeedControl;
