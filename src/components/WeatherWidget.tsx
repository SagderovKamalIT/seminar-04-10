import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Box,
  Button,
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
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery<WeatherData>({
    queryKey: ["weather"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.weatherapi.com/v1/current.json?key=a721a80956cf4029abc211807250606&q=Moscow&aqi=no"
      );

      if (!res.ok) {
        throw new Error("HTTP_ERROR");
      }

      return res.json();
    },
  });

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        }
      );

      if (!res.ok) {
        throw new Error("POST_ERROR");
      }

      return res.json();
    },
    onSuccess: () => {
     
      queryClient.invalidateQueries({ queryKey: ["weather"] });
    },
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }


  if (isError) {
    return (
      <Box mt={4}>
        <Alert severity="error">
          Не удалось загрузить погоду. Попробуйте позже.
        </Alert>
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


        <Box mt={3}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => mutation.mutate()}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Отправка..." : "Обновить данные"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default WeatherWidget;
