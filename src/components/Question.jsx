import { FaPlus, FaMinus } from "react-icons/fa6";

const Question = ({ id, info, title, showId, onShow }) => {
  const showQuestion = showId === id;
  return (
    <div className="question" onClick={() => onShow(id)}>
      <div className="top">
        <h3 className="title">{title}</h3>
        <span className="icon">{showQuestion ? <FaMinus /> : <FaPlus />}</span>
      </div>
      {showQuestion && <h4 className="info">{info}</h4>}
    </div>
  );
};

export default Question;
