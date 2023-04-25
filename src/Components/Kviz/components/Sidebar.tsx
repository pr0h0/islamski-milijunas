import styled from "styled-components";

const Sidebar = ({ active }: { active: number }) => {
  return (
    <_Sidebar>
      {new Array(15)
        .fill(0)
        .map((_, i) => (
          <div key={i} className={active === i + 1 ? "active" : ""}>
            <span>{i + 1}</span>
          </div>
        ))
        .reverse()}
    </_Sidebar>
  );
};

export default Sidebar;

const _Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  width: 64px;

  background-color: #fff;

  > div {
    display: flex
    align-items: center;
    justify-content: center;
    width: 100%;
    flex: 1;

    border: 1px solid #fff;

    &.active {
      background-color: var(--main-color);
      span {
        color: #fff;
      }
    }
    > span {
      font-size: 1.5rem;
      font-weight: 700;
      color: #000;
      width: fit-content;
      height: fit-content;
    }
  }
`;
