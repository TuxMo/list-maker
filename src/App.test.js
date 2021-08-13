import {render, screen} from '@testing-library/react';
import App from './App';

jest.mock('./components/TasksContainer', () => () => {
    return <div data-testid="tasks-container"/>;
})

test("renders TasksContainer", () => {
    render(<App/>);
    expect(screen.getByTestId("tasks-container")).toBeInTheDocument()
})
