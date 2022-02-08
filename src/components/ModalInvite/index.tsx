import React from "react";
import { styled, keyframes } from "@stitches/react";
import { blackA, mauve } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as S from "./style";
import { UserDefault } from "../../assets";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90vw",
  maxWidth: "48.12rem",
  maxHeight: "85vh",
  padding: "1.56rem",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "&:focus": { outline: "none" },
});

function Content({ children, ...props }) {
  return (
    <DialogPrimitive.Portal>
      <StyledOverlay />
      <StyledContent {...props}>{children}</StyledContent>
    </DialogPrimitive.Portal>
  );
}

// Exports
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = Content;
const DialogTitle = S.StyledTitle;
const DialogDescription = S.StyledDescription;
const DialogClose = DialogPrimitive.Close;

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: "1.56rem",
  width: "1.56rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#707070",
  position: "absolute",
  top: 10,
  right: 10,
  "&:hover": { backgroundColor: "#fff" },
  "&:focus": { boxShadow: `0 0 0 2px #707070` },
  cursor: "pointer",
});

interface invited_people {
  id: number;
  name: string;
  confirmed_presence: boolean;
  avatar: string;
  username: string;
}

const ModalInvite = ({ InvitePeople }: { InvitePeople: invited_people[] }) => (
  <Dialog>
    <DialogTrigger asChild>
      <S.Button>
        {InvitePeople.filter((e) => e.confirmed_presence === true).length > 1
          ?`${InvitePeople.filter((e) => e.confirmed_presence === true).length} CONFIRMAÇÕES DE ${InvitePeople.length} `
          : `${InvitePeople.filter((e) => e.confirmed_presence === true).length} CONFIRMAÇÃO DE ${InvitePeople.length} ` 
        }</S.Button>
    </DialogTrigger>
    <DialogContent>
      <DialogTitle>Convidados</DialogTitle>

      <DialogDescription>
        {InvitePeople.map((e) => (
          <S.Content key={e.id}>
            <div style={{ display: "flex", flexDirection: "column", marginBottom: 10, marginTop: 10 }}>
              <img src={ e.avatar} width={70} height={70} />
            </div>
            <S.NameText >
             {e.name}
            </S.NameText>
              <S.UserName >{e.username}</S.UserName>
            <div style={{ display: "flex", flexDirection: "column",marginLeft:10 }}>
              <S.Confirmation>
                {e.confirmed_presence === true
                  ? "PRESENÇA CONFIRMADA"
                  : "SEM CONFIRMAÇÃO "}
              </S.Confirmation>
            </div>
          </S.Content>
        ))}
      </DialogDescription>
      <DialogClose asChild>
        <IconButton>
          <Cross2Icon />
        </IconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);

export default ModalInvite;
