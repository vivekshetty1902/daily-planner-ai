🧠 Daily Planner AI

An AI-powered day planning app that turns your to-do list into an intelligent, emoji-rich schedule — built with **React**, **OpenAI**, and **Tailwind CSS**.

🚀 [Live Demo](https://daily-planner-ai.vercel.app/)  
📂 [GitHub Repo](https://github.com/vivekshetty1902/daily-planner-ai)

---

✨ Features

✅ Auto-prioritized day planner  
✅ Intelligent time-slot allocation (8AM–6PM)  
✅ Emojis based on task category (🏃, 📚, 💼, etc.)  
✅ Thoughtful scheduling rationale from AI  
✅ Motivational quote based on your tasks  

---

💻 Tech Stack

| Area            | Tools / Frameworks                          |
|-----------------|---------------------------------------------|
| Frontend        | React, Vite, Tailwind CSS                   |
| Animations      | Framer Motion, React Spinners               |
| AI Integration  | OpenAI API (GPT-3.5-Turbo)                  |
| State Handling  | React Hooks (`useState`)                    |
| Dev Tools       | VS Code, GitHub Copilot, Replit AI, Cursor AI |
| Deployment      | Vercel                                      |
| Version Control | Git & GitHub                                |

---

🤖 AI Tools Used

- **ChatGPT (GPT-4 + GPT-3.5)** — For prompt design, core logic & schedule generation  
- **GitHub Copilot** — Autocompletion for layout, Tailwind classes & API logic  
- **Cursor AI / Replit AI** — Real-time coding/debugging suggestions  
- **AI Testing** — GPT-generated test prompts & fallback scenarios  

---

⚙️ Where AI Needed Help (Human-in-the-loop)

🔒 **Secret Scanning**: AI didn’t warn about committed `.env` — fixed manually using `git filter-branch`  
🎯 **Quote Relevance**: Default quotes felt generic — tuned prompt to align quote with task themes  
💥 **LLM Failures**: Wrote JSON parsing recovery for hallucinations / malformed responses  
🎨 **UX Tweaks**: Emoji spacing, delay-tuned animation, and loader refinement done by hand  

---

🎨 UI Highlights

- Smooth Framer Motion animations on task load  
- Emoji-enhanced cards for quick visual context  
- Responsive layout with polished spacing  
- Spinner shown while LLM fetches plan  
- Error fallback & “Regenerate Plan” option

---

## 🧪 Sample Input

Record YouTube video  
Post on LinkedIn  
Read 10 pages of book  
Meal prep for the week

### 🧠 Output Example

| Time    | Task                        | Emoji |
|---------|-----------------------------|-------|
| 8AM     | Meal prep for the week      | 🍳    |
| 9:30AM  | Read 10 pages of book       | 📚    |
| 11AM    | Record YouTube video        | 🎥    |
| 1PM     | Post on LinkedIn            | 💼    |

**Reasoning**: Prioritized healthy routine, followed by mental & creative tasks.  
**Quote**: _“Success is the sum of small efforts repeated day in and day out.”_

---

## 📦 Project Structure

```
📁 src/
  ├── App.jsx           # Main UI logic + animations
  ├── openai.js         # Prompting & API interaction
📄 .env.local            # API key (not pushed)
📄 index.html / tailwind.config.js / postcss.config.js
```

---

## 📬 Contact

**Vivek Kothuru**  
📍 Based in Seattle, WA — open to remote or hybrid roles  
🔗 [LinkedIn](https://www.linkedin.com/in/vivek-k-759577203/)
📧 vivek.kothuru@gmail.com

---

> ⚡ Built in ~6 hours using AI-first development: GPT, Copilot, Cursor, and caffeine-fueled curiosity ☕
```
