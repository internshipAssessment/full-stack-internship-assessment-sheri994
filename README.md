Welcome to your assessment!  
This is a **40-minute timed test** covering **Python**, **Node.js (Express)**, and **React**.  
You’ll complete small tasks in each stack and push your code — the autograder will check your work.

---

## 🕒 Time Limit
You have **40 minutes** total.  
Focus on correctness and passing tests — partial credit is possible.

---

## 📂 Repository Structure

─ .github/workflows/classroom-autograde.yml # Autograding workflow
│
├─ python/ # Python task
│ ├─ task.py # implement here
│ ├─ app.py # runner
│ └─ tests/test_task.py
│
├─ node/ # Node.js task
│ ├─ app.js # implement here
│ ├─ server.js
│ ├─ tests/app.spec.js
│ ├─ jest.config.js
│ └─ package.json
│
├─ react/ # React task
│ ├─ src/Counter.jsx # implement here
│ ├─ src/App.jsx
│ ├─ src/main.jsx
│ ├─ src/tests/Counter.test.jsx
│ ├─ vite.config.js
│ └─ package.json
│
└─ README.md


---

## 🎯 Tasks

### 1. Python (30 pts) — `top_k_words`
**File:** `python/task.py`  

Implement:

```python
def top_k_words(text: str, k: int):
    """
    Return top-k most frequent words (case-insensitive).
    Ties: sort alphabetically.
    Ignore non-words.
    """


Input: string + integer k

Output: list of top-k words

Rules:

Case-insensitive

Ties broken alphabetically

If k <= 0 → return []

If no valid words → return []

Run tests:

cd python
pytest -q

2. Node.js (40 pts) — POST /api/sum

File: node/app.js

Implement a POST endpoint:

Route: /api/sum

Input JSON: { "a": number, "b": number }

Output JSON: { "sum": a+b }

Validation: If invalid → status 400 + { "error": "Invalid input" }

Run tests:

cd node
npm install
npm test

3. React (30 pts) — Counter Component

File: react/src/Counter.jsx

Implement:

Displays a count (data-testid="count")

Buttons: + and –

+ increments

– decrements, but never below 0

Disable the – button at 0

Accepts initial prop (default 0)

Run tests:

cd react
npm install
npm test

✅ How to Submit

Implement solutions in:

python/task.py

node/app.js

react/src/Counter.jsx

Run tests locally (optional but recommended).

Commit & push your changes:

git add .
git commit -m "Completed assessment"
git push


GitHub Classroom Autograder will run automatically.

📊 Scoring

Python: 30 points

Node.js: 40 points

React: 30 points

Passing threshold: 70/100

Each test passed = points earned.

⚠️ Rules

Do not modify test files or workflow files.

Only edit the files marked as implement here.

Work independently.

Manage your time — 40 minutes maximum.

🏁 Good Luck!

Focus on clean, working code. Passing tests = success 🚀