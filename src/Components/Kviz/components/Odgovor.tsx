import styled from "styled-components";
import { iOdgovor } from "../../../interfaces/iOdgovor";

interface iProps {
  odgovor: iOdgovor;
  onClick: (odgovor: iOdgovor) => void;
}

const Odgovor = ({ odgovor, onClick }: iProps) => {
  return (
    <_Odgovor onClick={() => onClick(odgovor)}>{odgovor.odgovor}</_Odgovor>
  );
};

export default Odgovor;

const _Odgovor = styled.div<{ onClick: () => void }>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;
  margin-block: 5px;

  border: 1px solid #fff;
  color: #fffd;
`;
