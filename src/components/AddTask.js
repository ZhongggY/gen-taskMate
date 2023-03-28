export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const submitHandler = function (e) {
    e.preventDefault();
    // if we have this task, we go for the editor, otherwise we create a task!
    if (task.id) {
      const date = new Date();
      const updateTask = tasklist.map((eachTask) =>
        eachTask.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : eachTask
      );
      setTasklist(updateTask);
      setTask({});
    } else {
      const date = new Date();
      console.log(e.target.task.value);
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTasklist([...tasklist, newTask]);
      setTask({});
    }
  };
  return (
    <section className="addTask">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="task"
          value={task.name || ""}
          onChange={(event) => setTask({ ...task, name: event.target.value })}
          autoComplete="off"
          placeholder="eg:Today I am doing my exercise"
          maxLength={25}
        />

        <button type="submit">{task.id ? "update" : "add"}</button>
      </form>
    </section>
  );
};
