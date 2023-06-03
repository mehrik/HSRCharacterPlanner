import React from "react";
import { Box } from "@mui/material";

type AvatarSize = "sm" | "md";

export const CharacterAvatar = ({
  url,
  name,
  size,
}: {
  url: string | undefined;
  name: string | undefined;
  size: AvatarSize;
}) => {
  const small = {
    width: 78,
    height: 78,
  };

  const medium = {
    width: 100,
    height: 100,
  };

  let boxSize = small;

  switch (size) {
    case "sm":
      boxSize = small;
      break;
    case "md":
      boxSize = medium;
      break;
    default:
  }

  return (
    <Box
      sx={{
        ...boxSize,
        outline: "2px solid #FFFFFF",
        borderRadius: "16px",
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
