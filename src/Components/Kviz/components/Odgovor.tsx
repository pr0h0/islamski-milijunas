import styled from "styled-components";
import { iOdgovor } from "../../../interfaces/iOdgovor";
import { useEffect, useState } from "react";

interface iProps {
  odgovor: iOdgovor;
  onClick: (odgovor: iOdgovor) => void;
}

const Odgovor = ({ odgovor, onClick }: iProps) => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    setIsClicked(false);
  }, [odgovor]);

  const handleClick = () => {
    setIsClicked(true);
    onClick(odgovor);
  };
  return (
    <_Odgovor onClick={handleClick} className={isClicked ? "active" : ""}>
      {odgovor.odgovor}
    </_Odgovor>
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

  transition: all 0.3s;

  &.active {
    background-color: #fffd;
    color: var(--main-color);
  }
`;
