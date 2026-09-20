export type Todo={
    rowNumber: number;
    rowDescription: string;
    rowAssigned: string;
}

export type TodoTablePropps ={
    todos: Todo[];
    deleteTodo: (rowNumber: number) => void;
}

export type TodoRowItemProps ={
    todo: Todo;
    deleteTodo: (rowNumber: number) => void;
}