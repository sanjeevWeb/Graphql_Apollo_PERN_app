export interface Todo {
    __typename: string;
    id:         number;
    todo:       string;
    completed:  boolean;
    created_at: Date;
}

export interface todoType {
    todos: Todo[];
}