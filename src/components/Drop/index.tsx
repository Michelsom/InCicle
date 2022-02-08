import { styled } from "@stitches/react";
import * as S from "./style";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { IconPolygon } from "../../assets";
import { useContext } from "react";
import WebContext from "../../context/WebProvider";

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: "12.5rem",
  backgroundColor: "white",
  border: "none",
  borderRadius: "0.37rem",
  padding: "0.31rem",
  boxShadow:
    "0rem 0.31rem 1.18rem -0.62rem rgba(22, 23, 24, 0.35), 0rem 0.31rem 0.62rem -0.93rem rgba(22, 23, 24, 0.2)",
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
const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: "var(--background)",
  margin: 5,
});

const itemStyles = {
  all: "unset",
  fontSize: 13,
  lineHeight: 1,
  color: "red",
  borderRadius: 3,
  display: "flex",
  alignItems: "center",
  height: 25,
  padding: "0 5px",
  position: "relative",
  paddingLeft: 25,
  userSelect: "none",

  "&[data-disabled]": {
    color: "blue",
    pointerEvents: "none",
  },

  "&:focus": {
    backgroundColor: "#f4f4f4",
    color: "#ffffff",
  },
};
const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });

export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuSeparator = StyledSeparator;
export const Dropdown = () => {
  const { setFilter } = useContext(WebContext);
  return (
    <S.Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <S.IconButton>
            <S.TypeText>
              TIPO
              <img
                src={IconPolygon}
                style={{ marginLeft: 30, marginBottom: 2 }}
              />
            </S.TypeText>
          </S.IconButton>
        </DropdownMenuTrigger>

        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
            <S.ButtonProps
              onClick={() => {
                setFilter("release");
              }}
            >
              COMUNICADO
            </S.ButtonProps>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <S.ButtonProps
              onClick={() => {
                setFilter("publication");
              }}
            >
              PUBLICAÇÃO
            </S.ButtonProps>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <S.ButtonProps
              onClick={() => {
                setFilter("event");
              }}
            >
              EVENTO
            </S.ButtonProps>
          </DropdownMenuItem>
          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <S.ButtonProps
              onClick={() => {
                setFilter(undefined);
              }}
            >
              TODOS
            </S.ButtonProps>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </S.Box>
  );
};

export default Dropdown;
