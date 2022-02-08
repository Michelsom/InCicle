import { useContext, useState } from "react";

import * as S from "./style";

import { NewEvent } from "../../components/AddNewEvent";
import ModalInvite from "../../components/ModalInvite";
import { Header } from "../../components/Header";
import Dropdown from "../../components/Drop";
import { More } from "../../components/More";
import * as Icon from "../../assets";

import WebContext from "../../context/WebProvider";
import { Management } from "../../components/Management";



export function Dashboard() {
  const { filter, receptJson, receptManagement} = useContext(WebContext);
  const [dismiss, setDismiss] = useState(false);
  const response = receptManagement;

  return (
    <S.Container>
      <Header />
      <S.Box>
        <S.BoxPanel>
          <S.TitleDiv>
            <S.TextTitle>Endomarketing</S.TextTitle>
            <Dropdown />
            <S.ButtonAdd>
              <NewEvent />
            </S.ButtonAdd>
          </S.TitleDiv>
          {receptJson
            .filter((i) => (filter ? i.type === filter : i))
            .map((e) => (
              <S.ComponentsDiv key={e.id}>
                <img src={e.file.url} width={73} height={73} />
                <S.DivTexts>
                  <S.PrimaryText>{e.title}</S.PrimaryText>
                  <S.ViewDataAndNameEvent>
                    <S.Communication type={e.type}>
                      {e.type === "event"
                        ? "EVENTO"
                        : e.type === "release"
                        ? "COMUNICADO"
                        : e.type === "publication"
                        ? "PUBLICAÇÃO"
                        : "NOVO MODELO"}
                    </S.Communication>
                    <S.DataEvent>{e.info.place}</S.DataEvent>
                    <S.DataEvent>| {e.info.date} |</S.DataEvent>
                    {e.invited_people ? (
                      <ModalInvite InvitePeople={e.invited_people} />
                    ) : null}
                  </S.ViewDataAndNameEvent>
                  <S.DescriptionText>{e.description}</S.DescriptionText>
                </S.DivTexts>
                <More id={e.id} />
              </S.ComponentsDiv>
            ))}
        </S.BoxPanel>
        <S.SubCategory>
          {dismiss === false ? (
            <S.Content>
              <S.TitleInContent>Endomarketing</S.TitleInContent>
              <S.TextInContent>
                Endomarketing está relacionado às ações de treinamento ou
                qualificação dos colaboradores da empresa visando um melhor
                serviço para o cliente. Marketing interno, devido ao nome, é
                usualmente confundido com Endomarketing mesmo sendo conceitos
                diferentes.
              </S.TextInContent>
              <S.ButtonContent
                onClick={() => {
                  setDismiss(true);
                }}
              >
                <S.TextDispenser>DISPENSAR</S.TextDispenser>
              </S.ButtonContent>
            </S.Content>
          ) : (
            <div style={{ display: "none" }} />
          )}
          <S.Warnings>
            <S.TextDispenser>Quadros de Gestão à Vista</S.TextDispenser>
            {response.map(({ boards }) =>
              boards.map(({ title, resume_files }) => (
                <>
                  <S.DivDemonstrative>
                    <S.ContentText>
                      <S.TextDemonst>{title}</S.TextDemonst>
                      <S.ButtonResearch>
                        <img src={Icon.Word} style={{ marginLeft: 10 }} />
                      </S.ButtonResearch>
                      <Management title={title}  />
                    </S.ContentText>
                    {resume_files.map(({ file }) => (
                      <img
                        src={file}
                        width={60}
                        height={60}
                        style={{ marginLeft: 4 }}
                      />
                    ))}
                  </S.DivDemonstrative>
                </>
              ))
            )}
          </S.Warnings>
        </S.SubCategory>
      </S.Box>
    </S.Container>
  );
}
