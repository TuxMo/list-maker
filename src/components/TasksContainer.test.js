import {fireEvent, render, screen} from '@testing-library/react';
import TasksContainer from "./TasksContainer";

test("renders no tasks", () => {
    render(<TasksContainer/>);

    const task = screen.queryByRole('listitem');

    expect(task).toBeNull();
})

test("adds new task to the list", () => {
    render(<TasksContainer />);

    let taskNameInput = screen.getByLabelText("Task Name:");
    let priorityInput = screen.getByLabelText("Priority:");
    let submitButton = screen.getByRole("button", {name: "Add Task"});

    fireEvent.change(taskNameInput, {target: {value: "test task name"}})
    fireEvent.change(priorityInput, {target: {value: "medium"}})
    fireEvent.click(submitButton)

    const task = screen.queryByRole('listitem');

    expect(task.textContent).toEqual('[medium] test task name')
})
