import React, { useState } from "react";
import { getAIPlan } from "./openai";
import ClipLoader from "react-spinners/ClipLoader";
import { motion } from "framer-motion";

function App() {
  const [tasks, setTasks] = useState(`Record YouTube video
Post on LinkedIn
Read 10 pages of book
Meal prep for the week`);
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState([]);
  const [reasoning, setReasoning] = useState("");
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");
  const [lastTaskList, setLastTaskList] = useState([]);

  const handlePlan = async (overrideTaskList = null) => {
    setLoading(true);
    setError("");
    setPlan([]);
    setReasoning("");
    setQuote("");

    const taskList = overrideTaskList || tasks.split("\n").filter(Boolean);
    setLastTaskList(taskList);

    const result = await getAIPlan(taskList);

    if (result && result.schedule) {
      setPlan(result.schedule);
      setReasoning(result.reasoning || "");
      setQuote(result.quote || "");
    } else {
      setError("⚠️ Oops! AI couldn't understand the request.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 tracking-tight">
          <span role="img" aria-label="brain">🧠</span> PlanSmarter AI
        </h1>
        <p className="text-gray-500 text-sm mt-1">Supercharge your day with GPT-powered planning</p>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-start p-6">
        <textarea
          rows="5"
          className="w-full max-w-md p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4"
          placeholder="Enter your top tasks, one per line..."
          value={tasks}
          onChange={(e) => setTasks(e.target.value)}
        />

        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={() => handlePlan()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Generate Plan
          </button>

          {plan.length > 0 && (
            <button
              onClick={() => handlePlan(lastTaskList)}
              className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition duration-300 shadow"
            >
              🔄 Regenerate Plan
            </button>
          )}
        </div>

        {loading && (
          <div className="mt-4 flex flex-col items-center">
            <ClipLoader color="#2563EB" loading={loading} size={40} />
            <p className="text-sm text-gray-500 mt-2">Planning your day with AI...</p>
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded shadow">
            {error}
          </div>
        )}

        {plan.length > 0 && (
          <motion.div
            className="mt-8 max-w-xl w-full bg-white p-6 rounded-2xl shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              📅 Your AI-Powered Plan
            </h2>
            {plan.map((item, index) => (
              <motion.div
                key={index}
                className="mb-3 flex items-center space-x-3 text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="text-xl">{item.emoji}</span>
                <strong className="w-20 text-right">{item.time}</strong>
                <span>{item.task}</span>
              </motion.div>
            ))}

            {reasoning && (
              <p className="mt-6 text-sm text-gray-600 italic leading-relaxed">
                {reasoning}
              </p>
            )}

            {quote && (
              <p className="mt-4 text-center text-md text-blue-700 font-medium">
                “{quote}”
              </p>
            )}
          </motion.div>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center text-blue-800 text-sm py-4 border-t bg-white shadow-inner">
        Built with 💙 using React, Vite & OpenAI API
        </footer>

    </div>
  );
}

export default App;
