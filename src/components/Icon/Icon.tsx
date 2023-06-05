import React from "react";
import { Box } from "@mui/material";

export const Icon = ({
  url,
  name,
  size = "48px",
}: {
  url: string;
  name: string;
  size: string;
}) => {
  return (
    <Box
      sx={{
        width: size,
        height: size,
        display: "inline-block",
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
