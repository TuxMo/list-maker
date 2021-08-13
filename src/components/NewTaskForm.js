import {Component} from "react";

export default class NewTaskForm extends Component {
    constructor(props) {
        super(props);
        this.state = {taskName: '', priority: 'high'}
    }

    handleFormSubmit(evt) {
        evt.preventDefault()
        this.props.onAddTask(this.state)
    }

    handleInputChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }

    render() {
        return <div>
            <form onSubmit={this.handleFormSubmit.bind(this)}>
                <label>
                    Task Name:
                    <input
                        value={this.state.taskName}
                        name="taskName"
                        type="text"
                        placeholder="Enter task"
                        onChange={this.handleInputChange.bind(this)}/>
                </label>

                <label>
                    Priority:
                    <select name="priority"
                            value={this.state.priority}
                            onChange={this.handleInputChange.bind(this)}>
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </label>

                <input type="submit" value="Add Task"/>
            </form>
        </div>;
    }
}
