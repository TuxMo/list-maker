import {Component} from "react";
import NewTaskForm from "./NewTaskForm";
import Tasks from "./Tasks";

export default class TasksContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [] };
    }

    addTaskListener(task) {
        const { tasks } = this.state;
        this.setState({ tasks: [...tasks, task]})
    }

    render() {
        return <>
            <NewTaskForm onAddTask={this.addTaskListener.bind(this)} />
            <Tasks title="Task List" tasks={this.state.tasks}/>
        </>
    }
}