function ListGroup() {
  const list = ["Alwan", "Wirawan", "Habib", "John"];

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {list.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
