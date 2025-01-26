import { gql } from '@apollo/client'

export const GET_TODOS = gql`
#graphql

query GET_TODOS {
    todos {
        id
        todo
        completed
        created_at
    }
}
`

export const CREATE_TODO = gql`
#graphql

mutation CREATE_TODO($todo: String!) {
    createTodo(todo: $todo){
        id
        todo
        completed
        created_at
    }
}

`

export const TOGGLE_TODO = gql`
#graphql

    mutation ToggleComplete($id:Int!, $data:Boolean!){
        toggleTodoStatus(id:$id, data:$data){
            message
        }
    }
`