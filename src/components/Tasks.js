const tasks = [
    {
        id: 1,
        text: 'Chaotic Good',
        day: 'Feb 5 aat 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'STARZ',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Programacionn Web',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    }
];

const Tasks = () => {
    return (
        <>
            {tasks.map((task, index) => (
                <h3 key={index}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
