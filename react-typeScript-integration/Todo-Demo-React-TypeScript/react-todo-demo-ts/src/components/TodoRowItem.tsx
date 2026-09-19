// create our first components in react
import type { TodoRowItemProps} from "../types/todo.ts";

export function TodoRowItem(props:TodoRowItemProps) {

    const rowNumber = props.todo.rowNumber
    const rowDescription = props.todo.rowDescription
    const rowAssigned = props.todo.rowAssigned

    return (
        <tr onClick={() => props.deleteTodo(rowNumber)}>
            <td>{rowNumber}</td>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>

        </tr>

    )
}