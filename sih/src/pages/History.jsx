import "../styles/History.css";

function History() {
  const qaData = [
    { q: "What is AI?", a: "AI is artificial intelligence that simulates human intelligence." },
    { q: "What is AgriAid?", a: "AgriAid helps farmers with smart agricultural solutions." },
    { q: "How can I use it?", a: "Simply type your query and get instant insights." },
  ];

  return (
    <div className="history-container">
      <h2>History</h2>
      <div className="qa-list">
        {qaData.map((item, index) => (
          <div key={index} className="qa-item">
            <p><strong>Q:</strong> {item.q}</p>
            <p><strong>A:</strong> {item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
