
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath:'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/api/todos/' }),
  tagTypes:['Todos'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => 'show',
    //   providesTags:["Todos"]
    }),
    // getTodosById: builder.query({
    //     query: (id) => `todos/${id}`,
    //     // providesTags:["Todos"]
    //   }),
    addTodo: builder.mutation({
      query: (newTodo) => ({
        url: 'add',
        method: 'POST',
        body: newTodo,
      }),
    //   invalidatesTags:["Todos"]
    }),
    updateTodo: builder.mutation({
      query: ( id, ...updateData ) => ({
        url: `edit/${id}`,
        method: 'PATCH',
        body: updateData,
      }),
    //   invalidatesTags:["Todos"]
    }),
    deleteTodo: builder.mutation({
      query: (id) =>
       ({
        
        url: `delete/${id}`,
        method: 'DELETE',
      }),
    //   invalidatesTags:["Todos"]
    }),
  }),
});

export const { useGetTodosQuery,useGetTodosByIdQuery,useAddTodoMutation, useUpdateTodoMutation, useDeleteTodoMutation } = api;
export default api;