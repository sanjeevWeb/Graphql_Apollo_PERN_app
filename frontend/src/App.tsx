import { useQuery, useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { CREATE_TODO, GET_TODOS, TOGGLE_TODO } from "./queries/todoQuery";
import { Todo, todoType } from "./types";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const { data, loading, error } = useQuery<todoType>(GET_TODOS)
  const [createTodo, { data: newTodo, loading: cLoading, error: cError }] = useMutation(CREATE_TODO)
  const [toggleTodoStatus] = useMutation(TOGGLE_TODO)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // console.log(todo);
    createTodo({ variables: { todo: todo } })
    if (cError) alert(cError.message)

    setTodo("")
  }

  const handleToggle = (data: boolean, id: number) => {
    const updateTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, completed: data }
      }
      else {
        return item
      }
    })
    toggleTodoStatus({ variables: { id: id, data: data } })
    setTodos(updateTodos)
  }

  useEffect(() => {
    if (data?.todos) {
      setTodos(data?.todos)
    }
  }, [data])

  useEffect(() => {
    if (newTodo && newTodo?.createTodo) {
      setTodos([newTodo?.createTodo, ...todos])
    }
  }, [newTodo])


  return (
    <div className="h-screen flex justify-center items-center bg-blue-50">
      <div className="w-full px-2 md:w-[600px] rounded-md bg-blue-100 h-[60vh]">
        <h1 className="text-xl font-bold my-2">List your plans here please...</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="w-full h-10 p-2 outline-none rounded-md bg-white"
            placeholder="Enter your todo here.."
            value={todo}
            onChange={e => setTodo(e.target.value)}
            disabled={cLoading}
          />
        </form>
        <div className="h=[50vh] mt-4">
          {loading && <p>Loading ...</p>}
          {error && <p className="text-red-500">{error.message}</p>}

          {
            todos && todos.map((todo) => {
              return (
                <div key={todo.id} className="flex justify-between items-center bg-blue-400 rounded-md p-2 mb-2">
                  <p className={todo.completed ? 'line-through' : ''}>{todo.todo}</p>
                  <input type="checkbox" checked={todo.completed} onChange={(e) => handleToggle(e.target.checked, todo.id)} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
