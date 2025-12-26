import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, Chip, IconButton } from '@mui/material';
import { Flag } from '@mui/icons-material';
import { formatTime } from '../../utils/formatTime';

interface LapsListProps {
  laps: number[];
}

const LapsList = ({ laps }: LapsListProps) => {
  const getLapDifference = (index: number): number => {
    if (index === 0) return laps[0];
    return laps[index] - laps[index - 1];
  };

  if (laps.length === 0) {
    return null;
  }

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Записанные круги
      </Typography>
      <Paper variant="outlined" sx={{ maxHeight: 300, overflow: 'auto' }}>
        <List>
          {laps.map((lapTime, index) => (
            <ListItem
              key={index}
              divider={index < laps.length - 1}
              sx={{
                bgcolor: index % 2 === 0 ? 'action.hover' : 'transparent'
              }}
            >
              <ListItemText
                primary={
                  <Box display="flex" alignItems="center" gap={2}>
                    <Chip 
                      label={`Круг ${index + 1}`}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                    <Typography variant="body1" fontFamily="monospace">
                      {formatTime(lapTime)}
                    </Typography>
                  </Box>
                }
                secondary={
                  <Typography variant="caption" color="text.secondary">
                    Разница: {formatTime(getLapDifference(index))}
                  </Typography>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" size="small">
                  <Flag color="action" />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

export default LapsList;