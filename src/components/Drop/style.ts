import { blackA, mauve, violet } from "@radix-ui/colors";
import { keyframes } from "@stitches/react";
import styled from "styled-components";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

export const TypeText = styled.text`
  font-size: 0.87rem;
  font-family: "Open Sans";
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`;

export const IconButton = styled.button`
  font-family: "Open Sans";
  height: 2.4rem;
  max-width: 5.9rem;
  display: flex;
  align-items: center;
  border-radius: 0.2rem;
  margin-left: 18rem;
  border: 0.06rem solid var(--colorButton);
  justify-content: center;
  color: violet.violet11;
  background: var(--lightColor);
  box-shadow: 0 0.06rem 0.06rem ${blackA.blackA7};
  &:hover: {
    background-color: violet.violet3;
  }
  &:focus: {
    box-shadow: 0 0 0 0.06rem black;
  }
  cursor: pointer;
`;

export const ButtonProps = styled.button`
  font-Size: 13px;
  border: none;
  line-Height: 0.06rem;
  color: #707070;
  border-Radius: 3px;
  display: flex;
  align-Items: center;
  height: 1.56rem;
  padding: 0 1.56rem;
  position: relative;
  padding-Left: 1.56rem;
  user-Select: none;
  background: transparent;
  font-Family:' Open Sans';
  &:focus: {
    backgroundColor:var(--background);
    color: #707070;
  },
  &:hover {
  transition: filter 0.2s;
  filter: brightness(0.9);
  cursor: pointer;

}

`;
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

export const StyledContent = styled.div.attrs(
  (DropdownMenuPrimitive.Content,
  {
    minWidth: "12.5rem",
    backgroundColor: "white",
    border: "none",
    borderRadius: 6,
    padding: 5,
    boxShadow:
      "0px 5px 19px -10px rgba(22, 23, 24, 0.35), 0px 5px 10px -15px rgba(22, 23, 24, 0.2)",
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform, opacity",
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
      },
    },
  })
);
export const Box = styled.div``;
