import useCounter from '../../hooks/useCounter';
import { 
  Box, 
  Button, 
  Typography, 
  Stack,
  IconButton,
  Card,
  CardContent,
  CardActions
} from '@mui/material';
import { 
  Add as AddIcon, 
  Remove as RemoveIcon,
  RestartAlt as ResetIcon,
  FormatListNumbered as CounterIcon
} from '@mui/icons-material';

interface CounterProps {
  initialValue?: number;
  label?: string;
}

const Counter = ({ initialValue, label }: CounterProps) => {
  const { count, increment, decrement, reset } = useCounter(initialValue);

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        minWidth: 300,
        maxWidth: 400,
        borderRadius: 3,
        boxShadow: 3,
        background: 'linear-gradient(145deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" gap={1} mb={2}>
          <CounterIcon color="primary" />
          <Typography variant="h5" component="div" fontWeight="bold">
            {label || 'Счетчик'}
          </Typography>
        </Box>

        <Typography 
          variant="h2" 
          component="div" 
          textAlign="center"
          sx={{ 
            my: 3,
            color: count > 0 ? 'success.main' : count < 0 ? 'error.main' : 'text.primary',
            fontWeight: 'bold',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}
        >
          {count}
        </Typography>

        <Typography variant="caption" color="text.secondary" display="block" textAlign="center">
          Начальное значение: {initialValue || 0}
        </Typography>
      </CardContent>

      <CardActions sx={{ p: 2, pt: 0 }}>
        <Stack direction="row" spacing={2} width="100%" justifyContent="center">
          <IconButton
            onClick={decrement}
            color="error"
            size="large"
            sx={{ 
              bgcolor: 'error.light',
              '&:hover': { bgcolor: 'error.main' },
              width: 56,
              height: 56
            }}
            title="Уменьшить на 1"
          >
            <RemoveIcon />
          </IconButton>

          <Button
            variant="outlined"
            onClick={reset}
            startIcon={<ResetIcon />}
            color="secondary"
            sx={{ 
              fontWeight: 'bold',
              px: 3
            }}
          >
            Сброс
          </Button>

          <IconButton
            onClick={increment}
            color="success"
            size="large"
            sx={{ 
              bgcolor: 'success.light',
              '&:hover': { bgcolor: 'success.main' },
              width: 56,
              height: 56
            }}
            title="Увеличить на 1"
          >
            <AddIcon />
          </IconButton>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default Counter;