import styled from "styled-components";

export const Container = styled.main`
  max-width: 82.5rem;
  width: 1320px;
  margin: 0 auto;
  padding: 2.5rem 1rem;
  height: 62.5rem;
`;
export const Box = styled.div`
  display: flex;
  margin-top: 2.25rem;
  flex-direction: row;
  justify-content: center;
  
`;
export const BoxPanel = styled.div`
  width: 70%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 37.5rem;
`;

export const SubCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 37.5rem;
`;

export const TitleDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: -0.7rem;
  flex-direction: row;
  align-items: center;
  height: 4.87rem;
  margin-bottom: 1rem;
`;
export const ComponentsDiv = styled.div`
  max-width: 57.68rem;
  margin-top: 0.9rem;
  height: 5.81rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  align-items: center;
  justify-content: center;
  background: var(--lightColor);
  display: flex;
  flex-direction: row;
`;

export const TextTitle = styled.text`
  width: 50%;
  font-size: 2.18rem;
  font-family: "Open Sans";
  align-items: center;
`;

export const ButtonType = styled.button`
  cursor: pointer;
  width: 5.9rem;
  height: 2.4rem;
  margin-left: 13rem;
  border: 1px solid var(--colorButton);
  border-radius: 4.5px;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const ButtonAdd = styled.button`
  width: 5.9rem;
  height: 2.4rem;
  margin-left: 1rem;
  background: var(--blueColor);
  border: 1px solid var(--colorButton);
  border-radius: 4.5px;
  transition: filter 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const Content = styled.div`
  background: var(--yellowColor);
  margin-top: 5.9rem;
  padding: 1.3rem 1.2rem;
  border: 1px solid #dcd1c0;
  width: 17.43rem;
  height: 19.31;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Warnings = styled.div`
  margin-top: 30px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  padding: 0.5rem;
  width: 279px;
  height: 333px;
  border-radius: 0.4rem;
  background: var(--lightColor);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const TitleInContent = styled.text`
  font-family: "Open Sans";
  font-size: 1rem;
  font-style: normal;
  height: 3.7rem;
  font-weight: 700;
  text-align: left;
`;
export const TextInContent = styled.text`
  width: 15rem;
  font-family: "Open Sans";
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;
export const ButtonContent = styled.button`
  width: 112px;
  height: 37px;
  border-radius: 0.2rem;
  border: 1px solid #707070;
  background: #fff2de;
  margin-top: 2rem;
  transition: filter 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const TextDispenser = styled.text`
  font-family: "Open Sans";
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 700;
  color: #707070;

  text-align: left;
`;
export const DivDemonstrative = styled.div`
  background: #3489b11a;
  height: 86px;
  margin-top: 0.5rem;
  width: 262px;
  top: 36px;
  border-radius: 0px;
`;
export const ContentText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0.2rem;
  justify-content: center;
`;
export const ContentImage = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
`;
export const TextDemonst = styled.text`
  font-family: "Open Sans";
  font-size: 0.8rem;
  color: #707070;
  font-style: normal;
  width: 80%;
  font-weight: 400;

  text-align: left;
`;

export const ButtonResearch = styled.button`
  border: none;
  background: transparent;
  transition: filter 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;
export const DivTexts = styled.div`
  width: 46.80rem;
  padding: 8px;
  margin-left: 1rem;
  height: 5.93rem;
`;

export const DescriptionText = styled.text`
  font-family: "Open Sans";
  font-size: 13px;
  font-style: normal;
  max-width: 10rem;
  -webkit-line-clamp: 1;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ViewDataAndNameEvent = styled.div`
  align-items: center;
  display: flex;
  height: 25px;
  align-items:center;
`;
export const PrimaryText = styled.text`
  font-family: "Open Sans";
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  color: #707070;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
`;

interface colors {
  type: string;
}
export const Communication = styled.text<colors>`
  font-family: "Open Sans";
  color: #ffffff;
  background: ${({ type }: colors) =>
    type === "release" ? "#3489B1" : type === "event" ? "#EE8686" : "#707070"};
  padding: 0.2rem 0.2rem;
  font-size: 9px;
  font-style: normal;
  font-weight: 700;
  line-height: 7px;
  letter-spacing: 0em;
  text-align: left;
`;
export const DataEvent = styled.text`
  font-family: "Open Sans";
  font-size: 9px;
  margin-left: 1rem;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #707070;
`;

export const ButtonInvite = styled.button`
  border: none;
  background: transparent;
  transition: filter 0.2s;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
  }
`;
