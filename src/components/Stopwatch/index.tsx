import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@mui/material';
import TimerDisplay from './TimerDisplay';
import SpeedControl from './SpeedControl';
import ControlButtons from './ControlButtons';
import LapsList from './LapsList';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState<number[]>([]);
  const [speed, setSpeed] = useState(1);
  
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


  useEffect(() => {
    if (isRunning) {
      const interval = 1000 / speed;
      intervalRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 100);
      }, interval);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, speed]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
    setSpeed(1);
  };

  const handleLap = () => {
    if (isRunning) {
      setLaps(prevLaps => [...prevLaps, time]);
    }
  };

  const handleIncreaseSpeed = () => {
    if (speed < 2) {
      setSpeed(prevSpeed => prevSpeed * 2);
    }
  };

  const handleDecreaseSpeed = () => {
    if (speed > 0.5) {
      setSpeed(prevSpeed => prevSpeed / 2);
    }
  };

  return (
    <Card 
      variant="outlined" 
      sx={{ 
        maxWidth: 600, 
        margin: '40px auto',
        borderRadius: 3,
        boxShadow: 3
      }}
    >
      <CardContent>
        <TimerDisplay time={time} speed={speed} lapsCount={laps.length} />
        <SpeedControl 
          speed={speed}
          onIncreaseSpeed={handleIncreaseSpeed}
          onDecreaseSpeed={handleDecreaseSpeed}
        />
        <ControlButtons 
          isRunning={isRunning}
          onStart={handleStart}
          onStop={handleStop}
          onLap={handleLap}
          onReset={handleReset}
        />
        <LapsList laps={laps} />
      </CardContent>
    </Card>
  );
};

export default Stopwatch;