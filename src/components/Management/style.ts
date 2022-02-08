import { keyframes } from "@stitches/react";
import styled from "styled-components";

export const TypeText = styled.text`
  font-size: 0.87rem;
  font-family: "Open Sans";
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const IconButton = styled.button`
 
  &:hover: {
    backgroundcolor: violet.violet3;
  }
  &:focus: {
    boxshadow: 0 0 0 1px black;
  }
  cursor: pointer;
`;
export const itemStyles = {
  all: "unset",
  fontSize: '0.75rem',
  border:'none',
  lineHeight: 1,
  color: "#707070",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: '1.56rem',
  padding: "0 0.31rem",
  position: "relative",
  paddingLeft: '1.56rem',
  userSelect: "none",
  fontFamily: "Open Sans",
  "&[data-disabled]": {
  
    pointerEvents: "",
  },

  "&:focus": {
    backgroundColor: "var(--background)",
    color: "#707070",
  },
};

export const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

export const Box = styled.div``;
