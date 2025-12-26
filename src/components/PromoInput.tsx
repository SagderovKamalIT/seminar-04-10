import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Typography } from "@mui/material";

export default function PromoInput() {
  const [code, setCode] = useState("");
  const navigate = useNavigate();
  const correctCode = "DISCOUNT2025"; 

  useEffect(() => {
    if (code === correctCode) {
      navigate("activated");
    }
  }, [code, navigate]);

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Введите промокод:
      </Typography>
      <TextField
        label="Промокод"
        variant="outlined"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
    </Box>
  );
}
