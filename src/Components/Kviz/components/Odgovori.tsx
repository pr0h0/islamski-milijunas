import styled from "styled-components";
import { iOdgovor } from "../../../interfaces/iOdgovor";
import Odgovor from "./Odgovor";

interface iProps {
  odgovori: iOdgovor[];
}

const Odgovori = ({ odgovori }: iProps) => {
  return (
    <_Odgovori>
      {odgovori.map((odgovor, i) => (
        <Odgovor key={i} {...odgovor} />
      ))}
    </_Odgovori>
  );
};

export default Odgovori;

const _Odgovori = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
`;
