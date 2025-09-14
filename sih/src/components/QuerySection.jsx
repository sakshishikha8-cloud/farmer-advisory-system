import { useState } from "react";
import MicrophoneButton from "./MicrophoneButton";
import MostAskedQuestions from "./MostAskedQuestions";
import "../styles/QuerySection.css";

function QuerySection() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (text) => {
    if (!text.trim()) return;
    setResult(`You asked: ${text}`);
  };

  const handleQuestionSelect = (selectedQuestion) => {
    setQuery(selectedQuestion);
    setShowSuggestions(false);
    handleSubmit(selectedQuestion);
  };

  return (
    <section id="query" className="query-section">
      <h2>Ask me anything</h2>

      {/* Circular Spline Viewer */}
      <div className="query-spline-circle">
        <spline-viewer url="https://prod.spline.design/KNvm0F5ZCt9Zdwvc/scene.splinecode"></spline-viewer>
        <div className="watermark-cover"></div> {/* ✅ hides the watermark */}
      </div>

      {/* Input + Mic */}
      <div className="query-box">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit(query)}
          placeholder="Type or speak your question..."
          className="query-input"
          onFocus={() => setShowSuggestions(true)}
        />
        <MicrophoneButton
          onResult={(speech) => {
            setQuery(speech);
            handleSubmit(speech);
          }}
        />
      </div>

      {result && <p className="query-result">{result}</p>}
      {showSuggestions && <MostAskedQuestions onQuestionSelect={handleQuestionSelect} />}
    </section>
  );
}

export default QuerySection;
