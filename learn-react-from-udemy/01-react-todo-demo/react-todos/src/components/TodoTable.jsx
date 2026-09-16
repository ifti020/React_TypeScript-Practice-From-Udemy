import { TodoRowItem } from './TodoRowItem'

export function TodoTable(props)
{
    return (
        <table>

            <thead>
            <tr>
                <th>#</th>
                <th>Description</th>
                <th>Assigned</th>
            </tr>
            </thead>

            <tbody>
                {/*<TodoRowItem todo={props.todos[0]}/>*/}
                {/*<TodoRowItem todo={props.todos[1]}/>*/}
                {/*<TodoRowItem todo={props.todos[2]}/>*/}
                {/*<TodoRowItem todo={props.todos[3]}/>*/}


            {/*now using react loops*/}
                {props.todos.map(todo => (
                    <TodoRowItem key={todo.rowNumber} todo={todo}  deleteTodo={props.deleteTodo}/>

                ))}

            </tbody>


        </table>

    )
}