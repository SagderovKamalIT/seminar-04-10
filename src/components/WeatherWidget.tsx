import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";

interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
    };
  };
}

function WeatherWidget() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(
      "https://api.weatherapi.com/v1/current.json?key=a721a80956cf4029abc211807250606&q=Moscow&aqi=no"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP_${res.status}`);
        }
        return res.json();
      })
      .then((data: WeatherData) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        let message =
          "Не удалось загрузить погоду. Проверьте интернет-соединение.";

        if (err.message.startsWith("HTTP_")) {
          message = "Сервер не отвечает. Попробуйте позже.";
        }

        setError(message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }


  if (error) {
    return (
      <Box mt={4}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Card sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Погода в {data!.location.name}
        </Typography>

        <Typography color="text.secondary" gutterBottom>
          {data!.location.country}
        </Typography>

        <Typography variant="h4" mt={2}>
          {data!.current.temp_c} °C
        </Typography>

        <Typography mt={1}>
          {data!.current.condition.text}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default WeatherWidget;
