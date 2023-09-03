import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faPen,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const App = () => {
    // Tasks (Todo List) State
    const [toDo, settoDO] = useState([
        { id: 1, title: "Task 1", status: false },
        { id: 2, title: "Task 2", status: false },
    ]);
    // Temp State
    const [newTask, setnewTask] = useState("");
    const [updateData, setupdateData] = useState("");

    // Add Task
    const addTask = () => {
        //
    };

    // Delete Task
    const deleteTask = (id) => {
        //
    };

    // Mark Done
    const markDone = (id) => {
        //
    };

    // Cancel Update
    const cancelUpdate = () => {
        //
    };

    // Change Task
    const changeTask = (e) => {
        //
    };

    // Update Tastk
    const updateTask = () => {
        //
    };

    return (
        <div className="container App">
            <br></br>
            <h2>To Do List App (ReactJS)</h2>
            <br></br>

            {/* Display Todos */}
            {toDo && toDo.length ? "" : "No Task..."}
            {toDo &&
                toDo.map((task, index) => {
                    return (
                        <React.Fragment key={task.id}>
                            <div className="col taskBg">
                                <div className={task.status ? "done" : ""}>
                                    <span className="taskNumber">
                                        {index + 1}{" "}
                                    </span>
                                    <span className="taskText">
                                        {task.title}{" "}
                                    </span>
                                </div>
                                <div className="iconsWrap">
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                        ></FontAwesomeIcon>
                                    </span>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faPen}
                                        ></FontAwesomeIcon>
                                    </span>
                                    <span>
                                        <FontAwesomeIcon
                                            icon={faTrashCan}
                                        ></FontAwesomeIcon>
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                })}
        </div>
    );
};

export default App;
