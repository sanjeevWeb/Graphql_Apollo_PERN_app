const todoSchema = `#graphql

scalar Date

type ResponseType {
    message:String
}

type Todo {
    id: Int!
    todo: String
    completed: Boolean
    created_at: Date
}

type Query {
    todos: [Todo]
    getTodo(id:Int): Todo

}

type Mutation {
    createTodo(todo:String): Todo
    updateTodo(id:Int, todo:String): ResponseType
    toggleTodoStatus(id:Int, data:Boolean): ResponseType
    deleteTodo(id:Int): ResponseType
}

`;
export default todoSchema;
