import React from "react";
import { Box } from "@mui/material";

export const Icon = ({ url, name }: { url: string; name: string }) => {
  return (
    <Box
      sx={{
        width: 48,
        height: 48,
      }}
    >
      <img
        src={`/resources/${url}`}
        alt={name}
        style={{ height: "100%", width: "100%", objectFit: "contain" }}
      />
    </Box>
  );
};
