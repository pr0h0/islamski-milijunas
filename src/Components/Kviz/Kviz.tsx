import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Pitanje from "./components/Pitanje";
import Odgovori from "./components/Odgovori";
import Modal from "../Modal/Modal";

import { iPitanje } from "../../interfaces/iPitanje";
import { Link, useNavigate } from "react-router-dom";
import { shuffleArray } from "../../utils/helper";
import { iOdgovor } from "../../interfaces/iOdgovor";
import iModal from "../../interfaces/iModal";

import _pitanja from "../../assets/pitanja.json";

const getPitanja: () => iPitanje[] = () => [...shuffleArray(_pitanja.pitanja)];

const Kviz = () => {
  const navigate = useNavigate();
  const [trenutnoPitanje, setTrenutnoPitanje] = useState<iPitanje | null>(null);
  const [trenutnoPitanjeIndex, setTrenutnoPitanjeIndex] = useState(1);

  const [modalData, setModalData] = useState<iModal | null>(null);

  const pitanjaRef = useRef(getPitanja());
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (!pitanjaRef.current) return;
    const pitanje = pitanjaRef.current.pop() as iPitanje;

    setTrenutnoPitanje(pitanje);
  }, []);

  useEffect(() => {
    if (!trenutnoPitanje) return;
    setTrenutnoPitanje((pitanje) => ({
      ...(pitanje as iPitanje),
      odgovor: shuffleArray((pitanje as iPitanje).odgovori),
    }));
  }, [trenutnoPitanje?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!trenutnoPitanje) return null;

  const handleOdgovorClick = (odgovor: iOdgovor) => {
    if (timeoutRef.current) return;
    timeoutRef.current = setTimeout(() => {
      if (odgovor.tacan && trenutnoPitanjeIndex !== 15) {
        setTrenutnoPitanje(pitanjaRef.current.pop() as iPitanje);
        setTrenutnoPitanjeIndex((index) => index + 1);
      } else {
        setModalData({
          show: true,
          onClick: handleModalClose,
          content:
            odgovor.tacan && trenutnoPitanjeIndex === 15
              ? "Cestitamo, pobjedili ste"
              : [
                  "Izgubili ste",
                  `Tacan odgovor je: ${
                    trenutnoPitanje.odgovori.find((odgovor) => odgovor.tacan)
                      ?.odgovor
                  }`,
                ],
        });
      }

      timeoutRef.current = null;
    }, 500);
  };

  const handleModalClose = () => {
    setModalData(null);
    navigate("/");
  };

  return (
    <>
      <_Kviz>
        <Link to="/">&lt; Nazad</Link>
        <Sidebar active={trenutnoPitanjeIndex} />
        <Pitanje pitanje={trenutnoPitanje.pitanje} />
        <Odgovori
          odgovori={trenutnoPitanje.odgovori}
          onClick={handleOdgovorClick}
        />
      </_Kviz>
      {modalData && <Modal {...modalData} />}
    </>
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
