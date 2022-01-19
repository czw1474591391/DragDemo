const ThreeBox = () => {
  const dragover = (e) => {
    e.preventDefault();
    e.target.style.border = "1px solid red";
  };
  const drop = (event) => {
    event.preventDefault();
    event.target.style.border = "none";
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  };
  return (
    <div className="threebox" onDragOver={dragover} onDrop={drop}>
      <span>Prepare to study</span>
      <div></div>
    </div>
  );
};
export default ThreeBox;
