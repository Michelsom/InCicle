import { styled } from "@stitches/react";
import * as S from "./style";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Point, PointGray } from "../../assets";
import { useContext, useState } from "react";
import WebContext from "../../context/WebProvider";

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 200,
  backgroundColor: "white",
  border: "none",
  cursor: "pointer",
  padding: 5,
  boxShadow:
    "0px 5px 19px -10px rgba(22, 23, 24, 0.35), 0px 5px 10px -15px rgba(22, 23, 24, 0.2)",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    willChange: "transform, opacity",
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: S.slideDownAndFade },
      '&[data-side="right"]': { animationName: S.slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: S.slideUpAndFade },
      '&[data-side="left"]': { animationName: S.slideRightAndFade },
    },
  },
});
const StyledItem = styled(DropdownMenuPrimitive.Item, { ...S.itemStyles });

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;

export const Management = ({ title }: { title: string }) => {
  // const people = (invited_people);
const {removeItemFn}=useContext(WebContext)
  return (
    <S.Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img src={Point} style={{marginLeft:5}} />
        </DropdownMenuTrigger>
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() => {
              removeItemFn(title)
            }}
          >
        <DropdownMenuContent>
            <DropdownMenuItem>EXCLUIR EVENTO?</DropdownMenuItem>
        </DropdownMenuContent>
          </button>
      </DropdownMenu>
    </S.Box>
  );
};
