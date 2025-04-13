```md
# 🧠 Daily Planner AI

**AI-powered day planning app that turns your tasks into an intelligent, emoji-rich schedule — built with React, OpenAI GPT, and Tailwind CSS.**

🚀 [Live Demo](https://daily-planner-ai.vercel.app/)  
📂 [View Code on GitHub](https://github.com/vivekshetty1902/daily-planner-ai)

---

## ✨ What It Does

Give it a list of tasks — and Daily Planner AI will:

✅ Prioritize them intelligently  
✅ Assign time slots (8AM–6PM)  
✅ Add meaningful emojis based on task type  
✅ Provide reasoning for the ordering  
✅ End with a motivational quote tailored to your day

---

## 🧠 Built With AI First

This project makes extensive use of AI at every stage:

- 🤖 **ChatGPT (GPT-3.5)** – for schedule generation, reasoning, quote theming  
- 🧠 **Prompt Engineering** – carefully tuned system prompt for consistent JSON output  
- 💡 **GitHub Copilot** – assisted with UI building, form handling, and error logic  
- 🔍 **Replit AI / Cursor AI** – used for debugging and code assistance  
- 🛠️ **GPT-Aided Testing** – generated test inputs and fallback conditions

---

## 🛠 Tech Stack & Tools

| Category        | Tech/Tool Used                             |
|-----------------|---------------------------------------------|
| Frontend        | React, Vite, JSX, Tailwind CSS              |
| AI Integration  | OpenAI API (GPT-3.5-Turbo)                  |
| State Handling  | React Hooks (`useState`)                    |
| Animations      | Framer Motion, React Spinners               |
| Deployment      | Vercel                                      |
| Version Control | Git, GitHub                                 |
| Dev Tools       | VS Code, GitHub Copilot, ChatGPT            |

---

## 🎨 UI Highlights

- Responsive, clean design with Tailwind  
- Smooth animations (Framer Motion) on task load  
- Emoji-enhanced task cards for quick scanning  
- Live loading spinner while LLM fetches data  
- Custom error + retry logic for resilience

---

## 🔐 AI + Engineering Edge

🧠 GPT was powerful — but I had to **step in** when:

- OpenAI API returned invalid JSON → I wrote robust parsing + retry logic  
- Secrets leaked in `.env.local` → I used `git filter-branch` to scrub Git history  
- GPT quotes were too generic → I fine-tuned prompts to match quote tone to task themes  
- Component animations needed UX tuning → manually crafted Framer Motion transitions

---

## 🧪 Example Input

```
Record YouTube video  
Post on LinkedIn  
Read 10 pages of book  
Meal prep for the week  
```

### Output:

📅 **AI-Powered Plan**  
🕗 8AM: Meal prep for the week 🍳  
🕤 9:30AM: Read 10 pages of book 📚  
🕚 11AM: Record YouTube video 🎥  
🕐 1PM: Post on LinkedIn 💼

*“Success is the sum of small efforts repeated day in and day out.”*

---

## 💬 Let's Connect

If you're a recruiter or fellow engineer interested in creative AI + product work — feel free to connect!

🔗 [LinkedIn](https://www.linkedin.com/in/vivekkothuru)  
✉️ vivekkothuru@gmail.com

---

> ⚡ Built in ~6 hours using ChatGPT, Copilot, and caffeine-fueled curiosity.
```

---

Let me know if you want to add badges, contributor info, or a cool GIF preview of the app!
