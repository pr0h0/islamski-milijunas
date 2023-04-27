import styled from "styled-components";

interface iProps {
  pitanje: string;
}

const Pitanje = ({ pitanje }: iProps) => {
  return <_Pitanje>{pitanje}</_Pitanje>;
};

export default Pitanje;

const _Pitanje = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  color: #fffd;
  font-size: 24px;
  text-align: center;
  height: calc(100vh / 2 - 64px / 2);
`;
