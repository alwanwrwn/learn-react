import Tab from "./components/Tab";

function App() {
  // const list = ["Alwan", "Wirawan", "Habib", "John"];
  //
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  //
  //

  const status_list = ["in progress", "to do", "done", "in review"];

  return (
    <>
      <div className="container py-2">
        <div className="row">
          <h1 className="col-11">
            <b>Task Management</b>
          </h1>
          <button
            type="button"
            className="btn btn-primary col-1"
            data-bs-toggle="modal"
            data-bs-target="#newTaskModal"
            id="addButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              className="bi bi-plus-lg"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
              />
            </svg>
          </button>
        </div>

        <div className="row py-2 overflow-hidden">
          {status_list.map((stat) => (
            <Tab status={stat} key={stat} />
          ))}
        </div>
      </div>
      {/* <ListGroup items={list} heading="Tes" onSelectItem={handleSelectItem} /> */}
    </>
  );
}

export default App;
