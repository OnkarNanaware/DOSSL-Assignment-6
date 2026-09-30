const {
    addTask,
    deleteTask,
    completeTask
} = require("../script");

describe("Student Task Manager", () => {

    test("should add a new task", () => {
        const tasks = [];

        const result = addTask(tasks, "Complete Jenkins Assignment");

        expect(result).toHaveLength(1);
        expect(result[0].title).toBe("Complete Jenkins Assignment");
        expect(result[0].completed).toBe(false);
    });

    test("should delete a task", () => {
        const tasks = [
            {
                id: 1,
                title: "Task 1",
                completed: false
            }
        ];

        const result = deleteTask(tasks, 1);

        expect(result).toHaveLength(0);
    });

    test("should complete a task", () => {
        const tasks = [
            {
                id: 1,
                title: "Task 1",
                completed: false
            }
        ];

        const result = completeTask(tasks, 1);

        expect(result[0].completed).toBe(true);
    });
});
