import { useState } from "react";
import Question from "./components/Question";
import data from "./data";

const App = () => {
  const [showId, setShowId] = useState(null);

  const handleShowQuestion = (id) => {
    if (showId === id) {
      setShowId(null);
    } else {
      setShowId(id);
    }
  };

  return (
    <main>
      <div className="card">
        <h2>Questions</h2>
        <div className="questions-container">
          {data.map((question) => (
            <Question
              key={question.id}
              {...question}
              showId={showId}
              onShow={handleShowQuestion}
            />
          ))}
        </div>
      </div>
    </main>
  );
};
export default App;
