let todos = [];
const delay = () => new Promise((res) => setTimeout(() => res(), 1200));

export async function getTodos() {
  await delay();
  return todos;
}

export async function addTodo(todo) {
  await delay();
  todos = [...todos, todo];
  return todos;
}
