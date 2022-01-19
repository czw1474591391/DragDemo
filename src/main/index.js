import { useState, useCallback } from "react";
import OneBox from "./component/oneBox";
import TwoBox from "./component/twoBox";
import ThreeBox from "./component/threeBox";
import "./index.scss";
const MainPage = () => {
  const [Data, SetData] = useState([]);
  const addComponent = useCallback(
    (parameter) => {
      SetData([...Data, parameter]);
    },
    [Data]
  );
  const removeComponent = useCallback(
    (itemId) => {
      SetData(Data.filter((value) => value.id !== itemId));
      //筛去删除的项
    },
    [Data]
  );
  return (
    <div className="MainContent">
      <OneBox Data={Data} addComponent={addComponent} removeComponent={removeComponent} />
      <TwoBox />
      <ThreeBox />
    </div>
  );
};
export default MainPage;
