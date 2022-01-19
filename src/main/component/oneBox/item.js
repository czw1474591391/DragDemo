import { useState } from "react";
import "./item.scss";
const Item = (props) => {
  const [HidIsShow, SetHidIsShow] = useState(false);
  const { listInfo, removeComponent } = props;
  const handleRemove = () => {
    removeComponent(listInfo.id);
  };
  const handleDragStart = (event) => {
    event.dataTransfer.setData("Text", event.target.id);
  };
  return (
    <div className="Items" draggable="true" onDragStart={handleDragStart} id={"id" + listInfo.id}>
      <input
        type="text"
        onMouseOver={() => {
          SetHidIsShow(true);
        }}
        onMouseOut={() => {
          SetHidIsShow(false);
        }}
      />
      {HidIsShow && <button onClick={handleRemove}>x</button>}
    </div>
  );
};
export default Item;
