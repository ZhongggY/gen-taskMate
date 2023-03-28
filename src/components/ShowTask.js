export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const editHanlde = function (id) {
    const selectedTask = tasklist.find((task) => task.id === id);
    setTask(selectedTask);
  };
  const deleteHanlde = function (id) {
    const updateTasklist = tasklist.filter((task) => task.id !== id);
    setTasklist(updateTasklist);
  };
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">To Do</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={() => setTasklist([])}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i
              onClick={() => editHanlde(task.id)}
              className="bi bi-pencil-square"
            ></i>
            {/* handle delete  */}
            <i
              onClick={() => deleteHanlde(task.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
