import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <_Home>
      <Link to="/kviz">Zapocni</Link>
    </_Home>
  );
};

export default Home;

const _Home = styled.div`
  width: 100%;
  max-width: 500px;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid #fff;

  a {
    padding: 20px 100px;
    border-radius: 20px;
    border: 1px solid #fffd;
    background-color: transparent;
    color: #fffd;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-size: 24px;
  }
`;
