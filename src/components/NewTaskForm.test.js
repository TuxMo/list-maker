import {fireEvent, render, screen} from '@testing-library/react';
import NewTaskForm from "./NewTaskForm";

test("has inputs to receive new task information", () => {
    render(<NewTaskForm/>);
    expect(screen.getByPlaceholderText("Enter task")).toBeInTheDocument();
    expect(screen.getByLabelText("Priority:")).toBeInTheDocument();
    expect(screen.getByRole('button', {name: "Add Task"})).toBeInTheDocument();
})

test("calls callback with form data on submit", (nowIAmDone) => {
    let addTaskListener = (task) => {
        expect(task.taskName).toBe("test task name");
        expect(task.priority).toBe("medium");
        nowIAmDone();
    };

    render(<NewTaskForm onAddTask={addTaskListener}/>);
    let taskNameInput = screen.getByLabelText("Task Name:");
    let priorityInput = screen.getByLabelText("Priority:");
    let submitButton = screen.getByRole("button", {name: "Add Task"});

    fireEvent.change(taskNameInput, {target: {value: "test task name"}})
    fireEvent.change(priorityInput, {target: {value: "medium"}})
    fireEvent.click(submitButton)
})
