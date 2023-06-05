import React from "react";
import {
  Select as MUISelect,
  MenuItem as MUIMenuItem,
  FormControl as MUIFormControl,
} from "@mui/material";

import { Icon } from "../Icon/Icon";

import {
  FieldWrapper,
  Wrapper,
  Label,
  RangeWrapper,
  Description,
  IconWrapper,
} from "./CharacterFormDialogRangeFieldStyles";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: "200px",
    },
  },
};
export const CharacterFormDialogRangeField = ({
  icon,
  type,
  name,
  start,
  end,
}: {
  icon?: string;
  type?: string;
  name?: string;
  start: number;
  end: number;
}) => {
  const currentMenuItems = [];
  const desiredMenuItems = [];

  for (let i = start; i < end; i++) {
    currentMenuItems.push(<MUIMenuItem value={i}>{i}</MUIMenuItem>);
  }

  for (let i = start + 1; i <= end; i++) {
    desiredMenuItems.push(<MUIMenuItem value={i}>{i}</MUIMenuItem>);
  }

  return (
    <Wrapper>
      {icon && type && name && (
        <Description>
          <IconWrapper>
            <Icon url={icon} name={name} size={"24px"} />
          </IconWrapper>
          {type}: {name}
        </Description>
      )}
      <RangeWrapper>
        <FieldWrapper>
          <Label>Current</Label>
          <MUIFormControl
            size="small"
            sx={{ minWidth: "80px", marginRight: "18px" }}
          >
            <MUISelect
              label={start}
              defaultValue={start}
              sx={{ "& legend": { display: "none" }, "& fieldset": { top: 0 } }}
              MenuProps={MenuProps}
            >
              {currentMenuItems}
            </MUISelect>
          </MUIFormControl>
        </FieldWrapper>
        <FieldWrapper>
          <Label>Desired</Label>
          <MUIFormControl size="small" sx={{ minWidth: "80px" }}>
            <MUISelect
              label={end}
              defaultValue={end}
              sx={{ "& legend": { display: "none" }, "& fieldset": { top: 0 } }}
              MenuProps={MenuProps}
            >
              {desiredMenuItems}
            </MUISelect>
          </MUIFormControl>
        </FieldWrapper>
      </RangeWrapper>
    </Wrapper>
  );
};
