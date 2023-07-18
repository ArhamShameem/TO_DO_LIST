import React from "react";
import Button from "@mui/material/Button";
import { useState } from "react";

const TodoInput = ({ addList }) => {
  const [task, setTask] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const addTask = () => {
    if (task.trim()) {
      addList(task);
      setTask("");
    }
  };

  return (
    <div className="flex justify-center items-center gap-5">
      <div className="mt-20 w-full flex flex-row justify-center items-center">
        <input
          type="text"
          placeholder="Enter task here! "
          className="bg-gray-600 bg-opacity-50 w-[80%] md:w-[30%] h-10 rounded-3xl text-center mt-20"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyPress={handleKeyPress} // Handle keypress event
        />
        <div className="mt-20 ml-5">
          <Button
            variant="contained"
            disableElevation
            onClick={addTask}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
