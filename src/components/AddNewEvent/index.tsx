import { styled } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Add } from "../../assets";
import * as S from "./style";

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: blackA.blackA9,
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${S.overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
});

const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: "white",
  borderRadius: 6,
  boxShadow:
    "hsl(206 22% 7% / 35%) 0rem 0.6rem 2.37rem -0.6rem, hsl(206 22% 7% / 20%) 0rem 0.6rem 1.25rem -0.93rem",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "200vw",
  maxWidth: "34.37rem",
  maxHeight: "185vh",
  padding: 25,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${S.contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
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

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogContent = Content;
const DialogDescription = S.StyledDescription;
const DialogClose = DialogPrimitive.Close;

export const NewEvent = () => (
  <Dialog>
    <DialogTrigger asChild>
      <S.TextAdd>
        CRIAR
        <img src={Add} style={{ marginLeft: 30, marginBottom: 2 }} />
      </S.TextAdd>
    </DialogTrigger>
    <DialogContent>
      <DialogDescription>Adicione novos eventos</DialogDescription>
      <S.Fieldset>
        <S.Label >Nome do evento</S.Label>
        <S.Input id="evento"  placeholder="Dia do Dev" />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="date">Data</S.Label>
        <S.Input id="data" type="date" placeholder="Ex:08/02/2022" />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="name">Descrição</S.Label>
        <S.Input id="name" placeholder="Ex:Evento referente ao dia ..." />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="name">Tipo</S.Label>
        <S.Input id="name"placeholder="Ex:COMUNICADO" />
      </S.Fieldset>
      <S.Fieldset>
        <S.Label htmlFor="name">Adicionar imagem</S.Label>
        <S.InputImage id="name" type="file"  />
      </S.Fieldset>
      <S.Flex>
        <DialogClose asChild>
          <S.Button aria-label="Close">Criar novo evento</S.Button>
        </DialogClose>
      </S.Flex>
      <DialogClose asChild>
        <S.IconButton>
          <Cross2Icon />
        </S.IconButton>
      </DialogClose>
    </DialogContent>
  </Dialog>
);
