import axios from "axios";

export async function getAIPlan(tasks) {
  const prompt = `
You are a thoughtful and intelligent AI daily planner.

Here’s a user’s list of tasks for today:
${tasks.map((t, i) => `${i + 1}. ${t}`).join("\n")}

Your job is to:
1. Organize the tasks into a realistic, productive schedule (between 8AM and 6PM).
2. Assign a suitable time to each task (e.g., 9AM, 2PM).
3. Add a fun and relevant emoji to each task (based on the nature of the task).
4. Prioritize time-sensitive or energy-heavy tasks earlier in the day.
5. Group similar or related tasks together for efficiency.
6. At the end, include:
    - a short explanation of your reasoning
    - a motivational quote that aligns with the overall theme of the day’s tasks 
      (e.g., wellness, learning, productivity, creativity, family, etc.)

Return only a valid JSON object with the following structure:
{
  "schedule": [
    { "time": "9AM", "task": "Go for a run", "emoji": "🏃" },
    { "time": "11AM", "task": "Prepare for meeting", "emoji": "📝" },
    ...
  ],
  "reasoning": "Explain how you structured the plan.",
  "quote": "A motivational quote that matches the theme of the above tasks."
}

Strictly return **only JSON**. Do not add commentary, headers, markdown, or code formatting.
`;

  try {
    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.8,
      },
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const raw = res.data.choices[0].message.content;

    console.log("🧠 Raw GPT Output:\n", raw);

    try {
      return JSON.parse(raw);
    } catch (err) {
      console.error("❌ Failed to parse JSON:", err.message);
      console.warn("GPT gave:", raw);

      // Retry with common fix for fancy quotes
      const fixed = raw
        .replace(/[\u2018\u2019]/g, "'") // single quotes
        .replace(/[\u201C\u201D]/g, '"'); // double quotes

      try {
        return JSON.parse(fixed);
      } catch (err2) {
        console.error("❌ Still failed after fix:", err2.message);
        return null;
      }
    }
  } catch (error) {
    console.error("OpenAI error:", error.response?.data || error.message);
    return null;
  }
}
