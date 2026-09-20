import {type FormEvent, useState} from 'react'

export function NewTodoForm( {addTodo}:{
    addTodo:(assigned:string , description:string) => boolean;
}) {
    const [assigned, setAssigned]= useState('')
    const [description, setDescription] = useState('')

    const handleSubmit = (e: FormEvent  ) => {
        e.preventDefault()

        if(assigned.trim() && description.trim()){
            addTodo(assigned.trim(),description.trim());

            setAssigned('');
            setDescription('');
        }
    }


    {
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Assigned</label>
                        <input
                            type="text"
                            required
                            value={assigned}
                            onChange={(e) => setAssigned(e.target.value)}>
                        </input>
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea
                            rows={3}
                            required
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} >
                            </textarea>

                    </div>
                    <button>Add Todo</button>
                </form>
            </div>
        )
    }
}