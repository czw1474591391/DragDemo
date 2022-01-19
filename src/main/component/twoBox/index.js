const TwoBox = () => {
  const dragover = (e) => {
    e.preventDefault();
    e.target.style.border = "1px solid blue";
  };
  function drop(event) {
    event.preventDefault();
    event.target.style.border = "none";
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }
  return (
    <div className="twobox" onDrop={drop} onDragOver={dragover}>
      <span>Learning</span>
      <div></div>
    </div>
  );
};
export default TwoBox;
