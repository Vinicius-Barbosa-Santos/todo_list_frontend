/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TaskItem = ({task}) => {
    return(
        <div>
            <h1>{task.description}</h1>
        </div>
    )
}

export default TaskItem