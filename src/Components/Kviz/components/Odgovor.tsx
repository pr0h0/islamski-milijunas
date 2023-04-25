import styled from "styled-components";
import { iOdgovor } from "../../../interfaces/iOdgovor";

interface iProps extends iOdgovor {
  nesto?: string;
}

const Odgovor = ({ odgovor }: iProps) => {
  return <_Odgovor>{odgovor}</_Odgovor>;
};

export default Odgovor;

const _Odgovor = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem;

  border: 1px solid #fff;
  color: #fffd;
`;
