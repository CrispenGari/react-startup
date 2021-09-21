import React from "react";
import "./Controls.css";
import { BiSave } from "react-icons/bi";
import { GrFormAdd, GrCut } from "react-icons/gr";
import { MdContentCopy } from "react-icons/md";
import { FaPaste, FaRegKeyboard } from "react-icons/fa";
import { IoRefresh } from "react-icons/io5";
import { BsPlayFill, BsStopFill, BsFillSkipForwardFill } from "react-icons/bs";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const Controls = ({ setLines, lines, textType, setTextType }) => {
  const addLines = () => {
    return setLines([...lines, null]);
  };

  const removeLines = () => {
    if (lines.length !== 1) {
      setLines(Array(lines.length - 1).fill(null));
    }
  };
  return (
    <div className="controls">
      <p title="Save and Checkpoint">
        <BiSave className="control__icon" />
      </p>
      <p title="insert cell bellow" onClick={addLines}>
        <GrFormAdd className="control__icon" />
      </p>
      <div className="control__merged__container">
        <p title="cut selected cells" onClick={removeLines}>
          <GrCut className="control__icon" />
        </p>
        <p title="copy selected cells">
          <MdContentCopy className="control__icon" />
        </p>
        <p title="paste cells bellow">
          <FaPaste className="control__icon" />
        </p>
      </div>
      <div className="control__merged__container">
        <p title="move selected cells up">
          <BiUpArrowAlt className="control__icon" />
        </p>
        <p title="move selected cells down">
          <BiDownArrowAlt className="control__icon" />
        </p>
      </div>
      <div className="control__merged__container">
        <p title="run selected cell bellow">
          <BsPlayFill className="control__icon" /> Run
        </p>
        <p title="interupt the kernel">
          <BsStopFill className="control__icon" />
        </p>
        <p title="restart the kernel (with dialog)">
          <IoRefresh className="control__icon" />
        </p>
        <p title="restart the kernel, and then rerun the whole notebook (with dialog)">
          <BsFillSkipForwardFill className="control__icon" />
        </p>
      </div>
      <select
        className="control__select"
        value={textType}
        onChange={(e) => setTextType(e.target.value)}
      >
        {["Code", "Markdown", "Raw NBConvert", "Heading"].map((opt, i) => {
          return (
            <option value={opt} key={i}>
              {opt}
            </option>
          );
        })}
      </select>
      <p title="open the command palette">
        <FaRegKeyboard />
      </p>
    </div>
  );
};

export default Controls;
