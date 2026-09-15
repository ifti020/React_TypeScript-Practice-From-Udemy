// create our first components in react
export function TodoRowItem(props) {

    const rowNumber = props.todo.rowNumber
    const rowDescription = props.todo.rowDescription
    const rowAssigned = props.todo.rowAssigned

    return (
        <tr>
            <td>{rowNumber}</td>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>

        </tr>

    )
}
