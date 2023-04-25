import { useEffect, useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Pitanje from "./components/Pitanje";
import Odgovori from "./components/Odgovori";

import _pitanja from "../../assets/pitanja.json";

const PITANJA: iPitanje[] = _pitanja.pitanja;

import { iPitanje } from "../../interfaces/iPitanje";
import { Link } from "react-router-dom";

const Kviz = () => {
  const [trenutnoPitanje, setTrenutnoPitanje] = useState<iPitanje | null>(null);
  const [trenutnoPitanjeIndex, setTrenutnoPitanjeIndex] = useState<number>(1);

  useEffect(() => {
    setTrenutnoPitanje(PITANJA[0]);
  }, []);

  console.log({ trenutnoPitanje, _pitanja });

  if (!trenutnoPitanje) return null;

  return (
    <_Kviz>
      <Link to="/">&lt; Nazad</Link>
      <Sidebar active={trenutnoPitanjeIndex} />
      <Pitanje pitanje={trenutnoPitanje.pitanje} />
      <Odgovori odgovori={trenutnoPitanje.odgovori} />
    </_Kviz>
  );
};

export default Kviz;

const _Kviz = styled.div`
  position: relative;

  width: 100%;
  max-width: 500px;
  border: 1px solid #fff;
  flex: 1;
  padding-right: 64px;
  padding-top: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  > a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    height: 64px;
    padding: 1rem;
    padding-right: 64px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    border: 1px solid #fff;
    color: #fffd;

    text-decoration: none;
    font-size: 24px;
  }
`;
