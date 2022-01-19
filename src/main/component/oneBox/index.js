import Item from "./item";
const OneBox = (props) => {
  const { Data, addComponent, removeComponent } = props;
  const handleClick = () => {
    addComponent({
      id: +new Date(), //唯一key
    });
  };
  return (
    <div className="onebox">
      <span>Prepare to study</span>
      <div>
        {Data?.map((item) => (
          <Item key={item.id} DragStart removeComponent={removeComponent} listInfo={item} />
        ))}
        <button button onClick={handleClick}>
          +
        </button>
      </div>
    </div>
  );
};
export default OneBox;
