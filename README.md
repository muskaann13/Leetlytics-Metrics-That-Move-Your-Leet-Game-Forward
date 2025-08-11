<!DOCTYPE html>
<html lang="en">
<!-- <head>
  <meta charset="UTF-8">
  <title>Leetlytics README</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 2em auto;
      max-width: 800px;
      padding: 0 1em;
    }
    h1, h2, h3 {
      color: #333;
      margin-top: 1.5em;
    }
    pre {
      background: #f5f5f5;
      padding: 1em;
      overflow-x: auto;
    }
    code {
      background: #eee;
      padding: 0 0.3em;
      border-radius: 3px;
    }
    ul {
      margin-left: 1.2em;
    }
  </style>
</head> -->
<body>

  <h1>Leetlytics</h1>
  <p><strong>Metrics that move your Leet game forward.</strong><br>
     Track your LeetCode activity—questions solved, total submissions, active streaks—all on one intuitive dashboard.</p>

  <h2>🧩 Table of Contents</h2>
  <ul>
    <li><a href="#features">Features</a></li>
    <li><a href="#tech-stack">Tech Stack</a></li>
    <li><a href="#demo">Demo</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#api-reference">API Reference</a></li>
    <li><a href="#contributing">Contributing</a></li>
  </ul>

  <h2 id="features">Features</h2>
  <ul>
    <li>Real-time stats: total problems solved, submission count, and active days/streaks</li>
    <li>Interactive, responsive interface built with plain HTML, CSS, and JavaScript</li>
    <li>Clean visualization—minimum distractions, maximum insight</li>
  </ul>

  <h2 id="tech-stack">Tech Stack</h2>
  <ul>
    <li>HTML &amp; CSS – structure and styling</li>
    <li>JavaScript – data fetching and UI updates</li>
    <li>LeetCode Stats API – <code>https://leetcode-stats-api.herokuapp.com/${username}</code> for real-time user data</li>
  </ul>

  <h2 id="demo">Demo</h2>
  <img width="600px" height="600px" alt="leetlytics" src="https://github.com/user-attachments/assets/b8bd281a-5da5-4905-94b3-5862f05e9918" />


  <h2 id="getting-started">Getting Started</h2>
  <h3>Prerequisites</h3>
  <ul>
    <li>A modern web browser</li>
    <li>(Optional) Local server such as Live Server for easier development & testing</li>
  </ul>

  <h3>Installation</h3>
  <pre><code>git clone https://github.com/your-username/leetlytics.git
cd leetlytics</code></pre>
  <p>Open <code>index.html</code> in your browser, or start a local server:</p>
  <pre><code>live-server</code></pre>

  <h2 id="usage">Usage</h2>
  <ol>
    <li>Enter your LeetCode username on the input field.</li>
    <li>Click “Submit” to fetch your live stats.</li>
    <li>View key metrics like solved problem count, submission trends, and streak details.</li>
  </ol>

  <h2 id="api-reference">API Reference</h2>
  <p>The app fetches live stats from the LeetCode Stats API endpoint:</p>
  <pre><code>https://leetcode-stats-api.herokuapp.com/${username}</code></pre>
  <p>Typical JSON response includes fields like:</p>
  <ul>
    <li><code>totalSolved</code>, <code>easySolved</code>, <code>mediumSolved</code>, <code>hardSolved</code></li>
    <li><code>acceptanceRate</code>, <code>ranking</code>, <code>contributionPoints</code></li>
    <li><code>submissionCalendar</code> for daily activity</li>
  </ul>

  <h2 id="contributing">Contributing</h2>
  <p>Contributions welcome! Please:</p>
  <ol>
    <li>Fork the project</li>
    <li>Create a feature branch (<code>git checkout -b feature/YourFeature</code>)</li>
    <li>Commit your changes (<code>git commit -m "Add your feature"</code>)</li>
    <li>Push to your branch (<code>git push origin feature/YourFeature</code>)</li>
    <li>Open a Pull Request for review</li>
  </ol>

</body>
</html>
