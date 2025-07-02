
const ListComponent = ({ items, renderItem }) => {
  if (!items || items.length === 0) {
    return <div className="empty-list">No items to display</div>;
  }

  return (
    <ul className="list">
      {items.map((item, index) => (
        <li key={item.id || index} className="list-item-container">
          {renderItem ? renderItem(item) : item.toString()}
        </li>
      ))}
    </ul>
  );
};

export default ListComponent;