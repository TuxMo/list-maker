import {render, screen} from '@testing-library/react';
import Tasks from "./Tasks";

test("displays title", () => {
    render(<Tasks title="a title" tasks={[]}/>);
    expect(screen.getByText("a title")).toBeInTheDocument();
})

test("displays one item", () => {
    let aTask = {taskName: "a task", priority: "low"};
    let taskList = [aTask];
    render(<Tasks title="a title" tasks={taskList}/>);
    // expect(screen.getByRole('listitem', {name: "[low] a task"})).toBeInTheDocument()
    let listItem = screen.getAllByRole('listitem');
    expect(listItem).toHaveLength(1)
    expect(listItem[0].textContent).toBe("[low] a task")
})

test("displays multiple items", () => {
    let aTask = {taskName: "a task", priority: "low"};
    let anotherTask = {taskName: "another task", priority: "medium"};
    let taskList = [aTask, anotherTask];
    render(<Tasks title="a title" tasks={taskList}/>);
    let listItem = screen.getAllByRole('listitem');
    expect(listItem).toHaveLength(2)
    expect(listItem[0].textContent).toBe("[low] a task")
    expect(listItem[1].textContent).toBe("[medium] another task")
})
