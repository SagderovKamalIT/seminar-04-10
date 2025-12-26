import { CardActions, Button } from '@mui/material';
import { PlayArrow, Pause, Flag, Replay } from '@mui/icons-material';

interface ControlButtonsProps {
  isRunning: boolean;
  onStart: () => void;
  onStop: () => void;
  onLap: () => void;
  onReset: () => void;
}

const ControlButtons = ({ isRunning, onStart, onStop, onLap, onReset }: ControlButtonsProps) => {
  return (
    <CardActions sx={{ justifyContent: 'center', gap: 2, mb: 3 }}>
      {!isRunning ? (
        <Button
          variant="contained"
          onClick={onStart}
          startIcon={<PlayArrow />}
          size="large"
          color="success"
          sx={{ minWidth: 120 }}
        >
          Старт
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={onStop}
          startIcon={<Pause />}
          size="large"
          color="error"
          sx={{ minWidth: 120 }}
        >
          Стоп
        </Button>
      )}
      
      <Button
        variant="outlined"
        onClick={onLap}
        disabled={!isRunning}
        startIcon={<Flag />}
        size="large"
        color="info"
        sx={{ minWidth: 120 }}
      >
        Круг
      </Button>
      
      <Button
        variant="outlined"
        onClick={onReset}
        startIcon={<Replay />}
        size="large"
        color="secondary"
        sx={{ minWidth: 120 }}
      >
        Сброс
      </Button>
    </CardActions>
  );
};

export default ControlButtons;