export default function Tasks(props) {
    return <div>
        <h1>{props.title}</h1>
        <ul>
            {props.tasks.map(task => <li key={task.taskName}>{`[${task.priority}] ${task.taskName}`}</li>)}
        </ul>
    </div>
}
