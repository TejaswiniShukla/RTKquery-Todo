import React from 'react';
import {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useGetTodosByIdQuery,
  useGetTodosQuery,
  useUpdateTodoMutation,
} from './apislice';

export default function App() {
  const { data: todos,isLoading,isSuccess,isError,error,refetch } = useGetTodosQuery();
  const [addTodo]=useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  
  // // const TodoDetails=({id})=>{
  // //   const {data:todoDetails,isLoading}=useGetTodosByIdQuery(id);
  // //   if(isLoading) {return <p>load chal rhi hai wait kariye</p>}
  // //   return <div>
  // //     <p>byId------</p>
  // //     {todoDetails&& todoDetails.title}
  // //     </div>
  // // }
    
  const newTodo = {
    "title": "Hi my name is sundari",
  };
  const addItem =async () => {
    await addTodo(newTodo)
    refetch()

  };
  // const updatedTodo = {
  //   "title": "tu tu hai whi dil ne jise",

  // };
  const updateItem = async(id) => {
    await updateTodo(id)
    refetch()
  };

  const deleteItem =async (id) => {
    await deleteTodo(id);
    refetch()
  };

  // if(isLoading){
  //   return <p>still fetching data please wait a litte................----------------</p>
  // }
  // else if(isError){
  //   return <p>{error}</p>
  // }

  return (
    <div className="maindiv">
      <h2>To Do List</h2>
       <div className="main2">
        <div className="child1">
        
          
        
          <button onClick={addItem}>+</button>
          <div className="child2">
            <ul>
              {todos?.map((todo) => (
                <li key={todo._id}>
                 
                    <>
                      <strong>Todo Title:</strong> {todo.title}
                      <br></br>
                      <span>{todo._id}</span>
                      {/* <TodoDetails id={todo.id}/> */}
                      <br />
                      <button onClick={() => deleteItem(todo._id)}>Delete</button>
                      <button onClick={() => updateItem(todo._id)}>Update</button>
                      
                    </>
              
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div> 
    </div>
  );
}

