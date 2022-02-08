import { keyframes } from "@stitches/react";
import styled from "styled-components";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { blackA, violet } from "@radix-ui/colors";

export const TextAdd = styled.h1`
  font-size: 0.87rem;
  font-family: "Open Sans";
  display: flex;
  align-items: center;
  color: var(--lightColor);
  justify-content: center;
  padding: 0.5rem;
`;

export const StyledDescription = styled.text`
  margin: 0.62rem 0rem;
  color: 707070;
  font-family: "Open Sans";
  font-size: 1rem;
  line-height: 0.09rem;
`;

export const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

export const Flex = styled.div({ display: "flex",marginTop: 25, justifyContent: "flex-end"  });

export const Button = styled.button({
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 0.93rem",
  fontSize: "0.93rem",
  fontFamily: "Open Sans",
  lineHeight: 1,
  fontWeight: 500,
  height: '2.18rem',
  color: "#fff",
  background: "var(--blueColor)",
  boxShadow: `0 0.12rem 0.62rem ${blackA.blackA7}`,
  "&:focus": { boxShadow: `0 0 0 0.12rem black` },
  cursor: "pointer",
  "&:hover": {
    filter: "brightness(0.9)",
  },
  transition: "filter 0.2s",
  defaultVariants: {
    variant: "violet",
  },
});

export const IconButton = styled.button({
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: '1.56rem',
  maxwidth: '1.56rem',
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: violet.violet11,
  position: "absolute",
  top: 10,
  right: 10,
  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 0.12rem ${violet.violet7}` },
});

export const Fieldset = styled.fieldset({
  all: "unset",
  display: "flex",
  gap: 20,
  marginTop: 20,
  alignItems: "center",
  marginBottom: 15,
  width:'100%',
});


export const Label = styled.label({
  fontSize: 15,
  color: "var(--ColorName)",
  maxWidth: '6.25rem',
  textAlign: "left",
  width:100,
});

export const Input = styled.input({
  all: "unset",
  flex: "1",
  width:100,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 0.62rem",
  fontSize: "0.93rem",
  lineHeight: 1,
  color: "var(--ColorName)",
  boxShadow: "0 0 0 0.06rem  var(--ColorName)",
  height: '2.18rem',
  "&:focus": { boxShadow: "0 0 0 0.12rem var(--blueColor)" },
});

export const InputImage = styled.input({
  width: "3.12rem",
  flex: "1",
  display: "inline-flex",
  borderRadius: 4,
  padding: "0 0.75rem",
  fontSize: 15,
  lineHeight: 1,
  color: "var(--ColorName)",
  boxShadow: "0 0 0 0.06rem  var(--ColorName)",
  height: '6.25rem',
  "&:focus": { boxShadow: "0 0 0 0.12rem var(--blueColor)" },
});