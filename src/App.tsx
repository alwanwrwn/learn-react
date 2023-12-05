import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

function App() {
  const list = ["Alwan", "Wirawan", "Habib", "John"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      {/* <ListGroup items={list} heading="Tes" onSelectItem={handleSelectItem} /> */}
      <Alert>Tes nih</Alert>
    </div>
  );
}

export default App;
