// Module and Resource Data
const MODULES = [
    {
        id: 0,
        title: "Module 0: Bootcamp Overview & Setup",
        priority: "must-know",
        estimatedHours: 1,
        description: "Get oriented with the bootcamp structure and set up your development environment.",
        lessons: [
            {
                id: "m0-l1",
                title: "What to Expect at the Bootcamp",
                content: `
                    <h3>Welcome to AgentCore Bootcamp Prep!</h3>
                    <p>The AWS re:Invent AgentCore Bootcamp is a hands-on, 300-level (Advanced) workshop where you'll learn to build production-ready AI agents using the Strands SDK and Amazon Bedrock AgentCore.</p>

                    <h3>What You'll Build</h3>
                    <p>During the bootcamp, you'll create AI agents that can:</p>
                    <ul>
                        <li>Reason and plan using Large Language Models (LLMs)</li>
                        <li>Use tools to interact with external systems</li>
                        <li>Maintain memory across conversations</li>
                        <li>Handle enterprise-grade requirements (security, scalability, observability)</li>
                    </ul>

                    <h3>Key Technologies</h3>
                    <ul>
                        <li><strong>Strands SDK</strong>: An open-source Python framework for building AI agents with a model-driven approach</li>
                        <li><strong>Amazon Bedrock AgentCore</strong>: Enterprise platform with 7 managed services for deploying agents at scale</li>
                        <li><strong>Python</strong>: Primary programming language</li>
                        <li><strong>AWS Cloud</strong>: For hosting and deployment</li>
                    </ul>

                    <h3>Bootcamp Format</h3>
                    <p>The bootcamp is highly interactive and hands-on. You'll be coding throughout the session, so you must bring your laptop. Instructors will guide you through building agents step-by-step.</p>

                    <h3>Prerequisites Expected</h3>
                    <p>As a 300-level workshop, the bootcamp assumes:</p>
                    <ul>
                        <li>Basic Python programming knowledge</li>
                        <li>Familiarity with AWS concepts (IAM, regions, services)</li>
                        <li>Understanding of APIs and RESTful services</li>
                        <li>Basic command-line interface usage</li>
                    </ul>
                `
            },
            {
                id: "m0-l2",
                title: "Development Environment Setup",
                content: `
                    <h3>Required Tools</h3>
                    <p>Before the bootcamp, ensure you have these tools installed:</p>

                    <h4>1. Python 3.9 or Later</h4>
                    <p>Download from <a href="https://www.python.org/downloads/" target="_blank">python.org</a></p>
                    <pre><code># Verify installation
python --version
# or
python3 --version</code></pre>

                    <h4>2. pip (Python Package Manager)</h4>
                    <p>Usually comes with Python. Verify:</p>
                    <pre><code>pip --version</code></pre>

                    <h4>3. Virtual Environment Tool</h4>
                    <pre><code># Install virtualenv
pip install virtualenv

# Create a virtual environment
python -m venv agentcore-env

# Activate it (macOS/Linux)
source agentcore-env/bin/activate

# Activate it (Windows)
agentcore-env\\Scripts\\activate</code></pre>

                    <h4>4. AWS CLI</h4>
                    <p>Download from <a href="https://aws.amazon.com/cli/" target="_blank">AWS CLI page</a></p>
                    <pre><code># Verify installation
aws --version

# Configure with your credentials
aws configure</code></pre>

                    <h4>5. Code Editor</h4>
                    <p>Recommended options:</p>
                    <ul>
                        <li><strong>VS Code</strong> with Python extension</li>
                        <li><strong>Cursor</strong> (AI-enhanced editor, great for learning)</li>
                        <li><strong>PyCharm</strong></li>
                    </ul>

                    <h4>6. Git</h4>
                    <pre><code># Verify installation
git --version</code></pre>

                    <h3>AI Coding Assistants</h3>
                    <p>Since you're comfortable with AI coding assistants, these will be valuable:</p>
                    <ul>
                        <li><strong>Cursor</strong>: AI-first code editor</li>
                        <li><strong>GitHub Copilot</strong>: Code suggestions in VS Code</li>
                        <li><strong>Amazon Q Developer</strong>: AWS-focused AI assistant</li>
                    </ul>

                    <h3>AWS Account Setup</h3>
                    <p>The bootcamp will likely provide AWS accounts, but it's good to have your own for practice:</p>
                    <ol>
                        <li>Create an AWS account (if you don't have one)</li>
                        <li>Set up an IAM user with appropriate permissions</li>
                        <li>Enable Amazon Bedrock in your region</li>
                        <li>Request access to Claude models in Bedrock console</li>
                    </ol>

                    <h3>Test Your Setup</h3>
                    <pre><code># Install Strands SDK to test
pip install strands-agents

# Create a simple test file
# test_agent.py
from strands import Agent

print("Setup successful!")
</code></pre>
                `
            },
            {
                id: "m0-l3",
                title: "How to Use This Prep App",
                content: `
                    <h3>Navigation</h3>
                    <p>This app has four main sections:</p>
                    <ul>
                        <li><strong>Dashboard</strong>: Track your readiness score and progress</li>
                        <li><strong>Modules</strong>: Learn through structured lessons</li>
                        <li><strong>Assessments</strong>: Test your knowledge</li>
                        <li><strong>Resources</strong>: Access curated learning materials</li>
                    </ul>

                    <h3>Progress Tracking</h3>
                    <p>Your progress is saved automatically to your browser's local storage. For cross-device sync and cloud backup, click "Cloud Sync" in the top right to:</p>
                    <ul>
                        <li><strong>Choose a username</strong>: Pick a unique username (e.g., "eric", "sarah-pm", etc.)</li>
                        <li><strong>Auto-sync</strong>: Progress automatically syncs to the cloud after setup</li>
                        <li><strong>Access anywhere</strong>: Use the same username on other devices to sync your progress</li>
                        <li><strong>Cloud backup</strong>: Your learning history is safely stored online</li>
                    </ul>
                    <p><em>No passwords or personal info required - just pick a username! Without cloud sync, progress is only saved locally in your current browser.</em></p>

                    <h3>Readiness Score</h3>
                    <p>Your readiness score is calculated based on:</p>
                    <ul>
                        <li>Module completion (40%)</li>
                        <li>Lesson completion (30%)</li>
                        <li>Assessment scores (30%)</li>
                    </ul>
                    <p><strong>Target:</strong> Aim for 75%+ before the bootcamp.</p>

                    <h3>Learning Path</h3>
                    <p><strong>Must-Know Modules:</strong> Complete these first (Modules 0-6, 9)</p>
                    <p><strong>Nice-to-Know Modules:</strong> Optional but recommended (Modules 7-8)</p>

                    <h3>Study Schedule (5-6 weeks)</h3>
                    <p><strong>Week 1:</strong> Modules 0-1 (Python fundamentals)</p>
                    <p><strong>Week 2:</strong> Modules 2-3 (AI concepts + AWS)</p>
                    <p><strong>Week 3:</strong> Module 4 (AgentCore deep dive)</p>
                    <p><strong>Week 4:</strong> Modules 5-6 (Strands SDK + First Agent)</p>
                    <p><strong>Week 5:</strong> Modules 7-8 (Enterprise patterns)</p>
                    <p><strong>Week 6:</strong> Module 9 (Capstone project)</p>

                    <h3>Audio Learning</h3>
                    <p>Check the Resources tab for:</p>
                    <ul>
                        <li>Curated podcasts on AI agents</li>
                        <li>YouTube tutorials and talks</li>
                        <li>AWS documentation you can use with text-to-speech</li>
                    </ul>

                    <h3>Using AI Assistants</h3>
                    <p>Each module includes AI assistant prompts you can use with Cursor or other tools. Balance is key:</p>
                    <ul>
                        <li><strong>Learn fundamentals first</strong> (Modules 1-2): Minimal AI assistance</li>
                        <li><strong>Build with guidance</strong> (Modules 3-6): Use AI to accelerate</li>
                        <li><strong>Advanced topics</strong> (Modules 7-9): Leverage AI fully</li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                question: "What is the primary programming language used in the AgentCore bootcamp?",
                options: ["JavaScript", "Python", "Java", "Go"],
                correct: 1
            },
            {
                question: "What is Strands SDK?",
                options: [
                    "A database management tool",
                    "An open-source framework for building AI agents",
                    "A cloud storage service",
                    "A testing framework"
                ],
                correct: 1
            },
            {
                question: "What skill level is the bootcamp?",
                options: ["100 - Foundational", "200 - Intermediate", "300 - Advanced", "400 - Expert"],
                correct: 2
            }
        ]
    },
    {
        id: 1,
        title: "Module 1: Python Fundamentals for AI",
        priority: "must-know",
        estimatedHours: 8,
        description: "Master essential Python concepts needed for building AI agents, including functions, decorators, async programming, and common patterns.",
        lessons: [
            {
                id: "m1-l1",
                title: "Python Basics Review",
                content: `
                    <h3>Variables and Data Types</h3>
                    <pre><code># Basic types
name = "AgentCore"  # String
version = 1.0       # Float
is_ready = True     # Boolean
items = [1, 2, 3]   # List
config = {"key": "value"}  # Dictionary

# Type checking
print(type(name))  # <class 'str'>
</code></pre>

                    <h3>Control Flow</h3>
                    <pre><code># If statements
if score >= 75:
    print("Ready for bootcamp!")
elif score >= 50:
    print("Keep learning")
else:
    print("More practice needed")

# Loops
for module in modules:
    print(module.title)

# While loops
while not ready:
    study()
</code></pre>

                    <h3>Functions</h3>
                    <pre><code># Basic function
def greet(name):
    return f"Hello, {name}!"

# Default parameters
def create_agent(model="claude-4-sonnet", temperature=0.7):
    return Agent(model=model, temperature=temperature)

# Multiple return values
def get_stats():
    return 75, 100, "Excellent"

score, total, message = get_stats()
</code></pre>

                    <h3>Data Structures</h3>
                    <pre><code># Lists - ordered, mutable
agents = ["helper", "researcher", "coder"]
agents.append("planner")

# Dictionaries - key-value pairs
config = {
    "model": "claude-4-sonnet",
    "max_tokens": 4096,
    "tools": ["search", "calculator"]
}

# List comprehension (common in AI code)
squares = [x**2 for x in range(10)]
filtered = [x for x in items if x > 5]
</code></pre>

                    <h3>Practice Exercise</h3>
                    <p>Try creating a simple function that filters a list:</p>
                    <pre><code># Create a function that returns only even numbers
def filter_even(numbers):
    return [n for n in numbers if n % 2 == 0]

# Test it
result = filter_even([1, 2, 3, 4, 5, 6])
print(result)  # [2, 4, 6]
</code></pre>
                `
            },
            {
                id: "m1-l2",
                title: "Python Decorators (Critical for Strands)",
                content: `
                    <h3>What are Decorators?</h3>
                    <p>Decorators modify or enhance functions. Strands SDK uses them extensively to define agent tools.</p>

                    <h3>Basic Decorator Syntax</h3>
                    <pre><code># A decorator is a function that wraps another function
def my_decorator(func):
    def wrapper():
        print("Before function")
        func()
        print("After function")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")

say_hello()
# Output:
# Before function
# Hello!
# After function
</code></pre>

                    <h3>Decorators with Parameters</h3>
                    <pre><code>def repeat(times):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for _ in range(times):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@repeat(3)
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")
# Prints "Hello, Alice!" three times
</code></pre>

                    <h3>Strands SDK Tool Decorator</h3>
                    <p>This is how you'll define tools in the bootcamp:</p>
                    <pre><code>from strands import tool

@tool
def search_web(query: str) -> str:
    """Search the web for information.

    Args:
        query: The search query

    Returns:
        Search results as a string
    """
    # Implementation here
    return f"Results for: {query}"

# The @tool decorator tells Strands this function
# can be used by the AI agent
</code></pre>

                    <h3>Key Points for AI Agents</h3>
                    <ul>
                        <li>Decorators add metadata to functions</li>
                        <li>Strands uses <code>@tool</code> to register agent tools</li>
                        <li>Type hints (<code>query: str</code>) help the AI understand parameters</li>
                        <li>Docstrings describe what the tool does</li>
                    </ul>

                    <h3>Practice Exercise</h3>
                    <pre><code># Create a tool that calculates the area of a rectangle
from strands import tool

@tool
def calculate_area(length: float, width: float) -> float:
    """Calculate the area of a rectangle.

    Args:
        length: Length of the rectangle
        width: Width of the rectangle

    Returns:
        Area of the rectangle
    """
    return length * width
</code></pre>
                `
            },
            {
                id: "m1-l3",
                title: "Async/Await in Python",
                content: `
                    <h3>Why Async Programming?</h3>
                    <p>AI agents often need to wait for:</p>
                    <ul>
                        <li>LLM responses (can take seconds)</li>
                        <li>API calls to external services</li>
                        <li>Database queries</li>
                    </ul>
                    <p>Async programming allows other work to continue while waiting.</p>

                    <h3>Basic Async Syntax</h3>
                    <pre><code>import asyncio

# Define an async function
async def fetch_data():
    print("Fetching...")
    await asyncio.sleep(2)  # Simulate delay
    print("Done!")
    return {"data": "result"}

# Run async function
asyncio.run(fetch_data())
</code></pre>

                    <h3>Multiple Async Operations</h3>
                    <pre><code>async def call_llm(prompt):
    await asyncio.sleep(1)  # Simulate LLM call
    return f"Response to: {prompt}"

async def search_database(query):
    await asyncio.sleep(0.5)  # Simulate DB query
    return f"Results for: {query}"

async def main():
    # Run in parallel
    results = await asyncio.gather(
        call_llm("What is AI?"),
        search_database("agents")
    )
    print(results)

asyncio.run(main())
</code></pre>

                    <h3>Async in Strands SDK</h3>
                    <pre><code>from strands import Agent, tool
import asyncio

@tool
async def async_search(query: str) -> str:
    """Search asynchronously."""
    await asyncio.sleep(1)
    return f"Found: {query}"

async def main():
    agent = Agent(
        model="claude-4-sonnet",
        tools=[async_search]
    )

    response = await agent.run("Search for AgentCore docs")
    print(response)

asyncio.run(main())
</code></pre>

                    <h3>Key Concepts</h3>
                    <ul>
                        <li><code>async def</code> - Defines an async function</li>
                        <li><code>await</code> - Waits for an async operation</li>
                        <li><code>asyncio.gather()</code> - Runs multiple tasks in parallel</li>
                        <li><code>asyncio.run()</code> - Runs the main async function</li>
                    </ul>

                    <h3>Common Pattern in AI Agents</h3>
                    <pre><code>async def agent_workflow():
    # Start multiple tools in parallel
    results = await asyncio.gather(
        tool1.execute(),
        tool2.execute(),
        tool3.execute()
    )

    # Combine results
    final_output = combine(results)
    return final_output
</code></pre>
                `
            },
            {
                id: "m1-l4",
                title: "Python Classes and Objects",
                content: `
                    <h3>Classes for Agent Development</h3>
                    <p>Agents are typically defined as classes in Python frameworks.</p>

                    <h3>Basic Class Syntax</h3>
                    <pre><code>class SimpleAgent:
    def __init__(self, name, model):
        self.name = name
        self.model = model
        self.memory = []

    def respond(self, message):
        # Add to memory
        self.memory.append(message)
        return f"{self.name} processed: {message}"

# Create instance
agent = SimpleAgent("Helper", "claude-4-sonnet")
response = agent.respond("Hello!")
print(response)
</code></pre>

                    <h3>Inheritance</h3>
                    <pre><code>class BaseAgent:
    def __init__(self, model):
        self.model = model

    def setup(self):
        print("Setting up agent...")

class ChatAgent(BaseAgent):
    def __init__(self, model, system_prompt):
        super().__init__(model)
        self.system_prompt = system_prompt

    def chat(self, message):
        return f"{self.system_prompt}\\n\\nUser: {message}"

# Use the inherited class
agent = ChatAgent("claude-4-sonnet", "You are a helpful assistant")
</code></pre>

                    <h3>Using Strands Agent Class</h3>
                    <pre><code>from strands import Agent

# Strands provides a ready-to-use Agent class
agent = Agent(
    model="claude-4-sonnet",
    system_prompt="You are a helpful AI agent",
    tools=[search_tool, calculator_tool]
)

# The Agent class handles all the complexity internally
response = agent.run("What is 2+2 and search for weather")
</code></pre>

                    <h3>Custom Agent Subclass</h3>
                    <pre><code>from strands import Agent

class ResearchAgent(Agent):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.research_history = []

    def research(self, topic):
        # Custom logic
        result = self.run(f"Research: {topic}")
        self.research_history.append(topic)
        return result

# Use your custom agent
researcher = ResearchAgent(
    model="claude-4-sonnet",
    tools=[search_tool]
)
</code></pre>

                    <h3>Key Concepts</h3>
                    <ul>
                        <li><code>__init__</code> - Constructor method</li>
                        <li><code>self</code> - Reference to the instance</li>
                        <li><code>super()</code> - Call parent class methods</li>
                        <li>Instance variables (<code>self.name</code>)</li>
                        <li>Methods (functions inside a class)</li>
                    </ul>
                `
            },
            {
                id: "m1-l5",
                title: "Working with JSON and APIs",
                content: `
                    <h3>JSON in Python</h3>
                    <p>AI agents frequently work with JSON for configuration and data exchange.</p>

                    <pre><code>import json

# Python dict to JSON string
config = {
                        "model": "claude-4-sonnet",
    "max_tokens": 4096,
    "temperature": 0.7
}

json_string = json.dumps(config, indent=2)
print(json_string)

# JSON string to Python dict
parsed = json.loads(json_string)
print(parsed["model"])
</code></pre>

                    <h3>Reading/Writing JSON Files</h3>
                    <pre><code># Write to file
with open("agent_config.json", "w") as f:
    json.dump(config, f, indent=2)

# Read from file
with open("agent_config.json", "r") as f:
    loaded_config = json.load(f)
</code></pre>

                    <h3>Making API Calls</h3>
                    <pre><code>import requests

# GET request
response = requests.get(
    "https://api.example.com/data",
    headers={"Authorization": "Bearer token"}
)

data = response.json()
print(data)

# POST request
payload = {"query": "AgentCore"}
response = requests.post(
    "https://api.example.com/search",
    json=payload
)
</code></pre>

                    <h3>Async API Calls</h3>
                    <pre><code>import aiohttp
import asyncio

async def fetch_url(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            return await response.json()

async def main():
    data = await fetch_url("https://api.example.com/data")
    print(data)

asyncio.run(main())
</code></pre>

                    <h3>Creating Agent Tools for API Calls</h3>
                    <pre><code>from strands import tool
import requests

@tool
def get_weather(city: str) -> str:
    """Get current weather for a city.

    Args:
        city: Name of the city

    Returns:
        Weather information
    """
    # Call weather API
    response = requests.get(
        f"https://api.weather.com/v1/{city}"
    )
    data = response.json()
    return f"Weather in {city}: {data['temp']}°F"
</code></pre>

                    <h3>Error Handling</h3>
                    <pre><code>try:
    response = requests.get(url, timeout=5)
    response.raise_for_status()  # Raise error for bad status
    data = response.json()
except requests.Timeout:
    print("Request timed out")
except requests.RequestException as e:
    print(f"Error: {e}")
</code></pre>
                `
            },
            {
                id: "m1-l6",
                title: "Environment Variables and Configuration",
                content: `
                    <h3>Why Environment Variables?</h3>
                    <p>Never hardcode secrets in your code! Use environment variables for:</p>
                    <ul>
                        <li>API keys</li>
                        <li>AWS credentials</li>
                        <li>Configuration that varies by environment</li>
                    </ul>

                    <h3>Using python-dotenv</h3>
                    <pre><code># Install
pip install python-dotenv

# Create .env file
# AWS_ACCESS_KEY_ID=your_key_here
# AWS_SECRET_ACCESS_KEY=your_secret_here
# ANTHROPIC_API_KEY=your_api_key

# Load in Python
from dotenv import load_dotenv
import os

load_dotenv()

api_key = os.getenv("ANTHROPIC_API_KEY")
region = os.getenv("AWS_REGION", "us-east-1")  # Default value
</code></pre>

                    <h3>Agent Configuration Example</h3>
                    <pre><code>from strands import Agent
from dotenv import load_dotenv
import os

load_dotenv()

agent = Agent(
    model=os.getenv("MODEL_NAME", "claude-4-sonnet"),
    api_key=os.getenv("ANTHROPIC_API_KEY"),
    temperature=float(os.getenv("TEMPERATURE", "0.7"))
)
</code></pre>

                    <h3>AWS Credentials</h3>
                    <pre><code># AWS looks for credentials in order:
# 1. Environment variables
export AWS_ACCESS_KEY_ID=your_key
export AWS_SECRET_ACCESS_KEY=your_secret

# 2. ~/.aws/credentials file
[default]
aws_access_key_id = your_key
aws_secret_access_key = your_secret

# 3. IAM role (in production)
</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Add <code>.env</code> to <code>.gitignore</code></li>
                        <li>Use <code>.env.example</code> as a template</li>
                        <li>Validate required variables at startup</li>
                        <li>Use different .env files for dev/prod</li>
                    </ul>

                    <pre><code># Validate configuration
required_vars = ["ANTHROPIC_API_KEY", "AWS_REGION"]
missing = [var for var in required_vars if not os.getenv(var)]

if missing:
    raise ValueError(f"Missing required env vars: {missing}")
</code></pre>
                `
            }
        ],
        quiz: [
            {
                question: "What decorator does Strands SDK use to define agent tools?",
                options: ["@function", "@tool", "@agent", "@decorator"],
                correct: 1
            },
            {
                question: "What keyword is used to wait for an async operation in Python?",
                options: ["wait", "async", "await", "defer"],
                correct: 2
            },
            {
                question: "Which method converts a Python dictionary to a JSON string?",
                options: ["json.loads()", "json.dump()", "json.dumps()", "json.parse()"],
                correct: 2
            },
            {
                question: "What is the purpose of using environment variables for API keys?",
                options: [
                    "To make code run faster",
                    "To avoid hardcoding secrets in code",
                    "To improve readability",
                    "To enable debugging"
                ],
                correct: 1
            },
            {
                question: "In Strands SDK, what do type hints (e.g., query: str) help with?",
                options: [
                    "Make code run faster",
                    "Help the AI understand parameter types",
                    "Required for Python to work",
                    "Only for documentation"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: AI Agent Concepts & Terminology",
        priority: "must-know",
        estimatedHours: 4,
        description: "Understand fundamental concepts of AI agents, LLMs, prompting, agent architectures, and how agents reason and use tools.",
        lessons: [
            {
                id: "m2-l1",
                title: "What are AI Agents?",
                content: `
                    <h3>Definition</h3>
                    <p>An AI agent is an autonomous system that uses a Large Language Model (LLM) to:</p>
                    <ul>
                        <li><strong>Reason</strong> about tasks and goals</li>
                        <li><strong>Plan</strong> sequences of actions</li>
                        <li><strong>Use tools</strong> to interact with the world</li>
                        <li><strong>Remember</strong> context across interactions</li>
                        <li><strong>Adapt</strong> based on feedback</li>
                    </ul>

                    <h3>Agent vs. Chatbot</h3>
                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--bg-tertiary);">
                            <th style="padding: 0.75rem; text-align: left;">Chatbot</th>
                            <th style="padding: 0.75rem; text-align: left;">AI Agent</th>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;">Responds to questions</td>
                            <td style="padding: 0.75rem;">Takes autonomous actions</td>
                        </tr>
                        <tr style="background: var(--bg-tertiary);">
                            <td style="padding: 0.75rem;">No tool usage</td>
                            <td style="padding: 0.75rem;">Uses multiple tools</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;">Single response</td>
                            <td style="padding: 0.75rem;">Multi-step reasoning</td>
                        </tr>
                        <tr style="background: var(--bg-tertiary);">
                            <td style="padding: 0.75rem;">Limited memory</td>
                            <td style="padding: 0.75rem;">Long-term memory</td>
                        </tr>
                    </table>

                    <h3>Real-World Examples</h3>
                    <ul>
                        <li><strong>Customer Service Agent</strong>: Searches knowledge base, updates tickets, schedules callbacks</li>
                        <li><strong>Research Agent</strong>: Searches web, summarizes papers, generates reports</li>
                        <li><strong>DevOps Agent</strong>: Monitors systems, diagnoses issues, deploys fixes</li>
                        <li><strong>Data Analysis Agent</strong>: Queries databases, generates visualizations, writes summaries</li>
                    </ul>

                    <h3>Model-Driven Approach (Strands Philosophy)</h3>
                    <p>Strands SDK uses a <strong>model-driven approach</strong>:</p>
                    <ul>
                        <li>The LLM decides which tools to use and when</li>
                        <li>No hardcoded workflows</li>
                        <li>Agent adapts to different scenarios</li>
                        <li>Developer focuses on providing good tools</li>
                    </ul>

                    <pre><code>from strands import Agent, tool

@tool
def search(query: str) -> str:
    return f"Results for {query}"

@tool
def calculate(expression: str) -> float:
    return eval(expression)

# The LLM decides which tool(s) to use
agent = Agent(
    model="claude-4-sonnet",
    tools=[search, calculate]
)

# Agent autonomously chooses to use both tools
response = agent.run(
    "What is 15% of the GDP of France? Search for current GDP first."
)
</code></pre>

                    <h3>Key Insight for Product Managers</h3>
                    <p>As a PM, think of agents as:</p>
                    <ul>
                        <li><strong>Reasoning engines</strong> that orchestrate tools</li>
                        <li><strong>Workflows that adapt</strong> to user needs</li>
                        <li><strong>Scalable automation</strong> for complex tasks</li>
                    </ul>
                `
            },
            {
                id: "m2-l2",
                title: "Large Language Models (LLMs) Fundamentals",
                content: `
                    <h3>What is an LLM?</h3>
                    <p>A Large Language Model is a neural network trained on massive text data to:</p>
                    <ul>
                        <li>Understand natural language</li>
                        <li>Generate human-like text</li>
                        <li>Follow instructions</li>
                        <li>Reason about problems</li>
                    </ul>

                    <h3>Popular LLMs for Agents</h3>
                    <ul>
                        <li><strong>Claude 4 Sonnet</strong> (Anthropic) - Default in Strands, excellent reasoning</li>
                        <li><strong>GPT-4</strong> (OpenAI) - Strong general capabilities</li>
                        <li><strong>Llama 4</strong> (Meta) - Open source option</li>
                    </ul>

                    <h3>Key Parameters</h3>
                    <pre><code>agent = Agent(
    model="claude-4-sonnet",
    temperature=0.7,      # Creativity (0-1)
    max_tokens=4096,      # Response length
    top_p=0.9            # Nucleus sampling
)

# temperature = 0: Deterministic, focused
# temperature = 1: Creative, varied
</code></pre>

                    <h3>How LLMs Power Agents</h3>
                    <p><strong>1. Tool Selection</strong></p>
                    <pre><code>User: "What's the weather in Paris?"
LLM thinks: "I need to use the weather tool"
LLM calls: get_weather(city="Paris")
</code></pre>

                    <p><strong>2. Multi-Step Reasoning</strong></p>
                    <pre><code>User: "Book me a flight to Paris and check the weather"
LLM thinks:
1. First, search for flights
2. Then, check weather
3. Finally, summarize both
</code></pre>

                    <h3>Prompt Engineering for Agents</h3>
                    <p>The <strong>system prompt</strong> defines agent behavior:</p>
                    <pre><code>agent = Agent(
    model="claude-4-sonnet",
    system_prompt="""You are a helpful research assistant.

    When given a research task:
    1. Search for relevant information
    2. Analyze the findings
    3. Provide a concise summary
    4. Cite your sources

    Be thorough but concise."""
)
</code></pre>

                    <h3>Context Window</h3>
                    <p>LLMs have limited "memory" - the context window:</p>
                    <ul>
                        <li><strong>Claude 4 Sonnet</strong>: 200k tokens (~150k words)</li>
                        <li>Includes: System prompt + conversation history + tool outputs</li>
                        <li>Agents must manage context as conversations grow</li>
                    </ul>

                    <h3>Token Costs</h3>
                    <p>LLMs charge per token (roughly 1 token = 0.75 words):</p>
                    <ul>
                        <li>Input tokens: Text sent to LLM</li>
                        <li>Output tokens: Text generated by LLM</li>
                        <li>Agent loops can use many tokens (plan, use tools, synthesize)</li>
                    </ul>
                `
            },
            {
                id: "m2-l3",
                title: "Agent Architecture Patterns",
                content: `
                    <h3>ReAct Pattern (Reason + Act)</h3>
                    <p>The most common agent pattern, used by Strands:</p>
                    <ol>
                        <li><strong>Reason</strong>: Think about the task</li>
                        <li><strong>Act</strong>: Use a tool</li>
                        <li><strong>Observe</strong>: See tool result</li>
                        <li><strong>Repeat</strong>: Until task is complete</li>
                    </ol>

                    <pre><code>User: "What's 15% of France's GDP?"

[Reason] I need France's GDP first
[Act] Call search("France GDP 2024")
[Observe] "France GDP is $3 trillion"

[Reason] Now calculate 15% of $3 trillion
[Act] Call calculate("3000000000000 * 0.15")
[Observe] "450000000000"

[Reason] I can now answer
[Final Response] "15% of France's GDP is $450 billion"
</code></pre>

                    <h3>Single Agent vs Multi-Agent</h3>

                    <p><strong>Single Agent</strong> - One agent with multiple tools</p>
                    <pre><code>agent = Agent(
    tools=[search, calculate, email, database]
)
</code></pre>

                    <p><strong>Multi-Agent</strong> - Specialized agents cooperating</p>
                    <pre><code># Researcher agent
researcher = Agent(
    tools=[search, read_papers],
    system_prompt="You research topics thoroughly"
)

# Writer agent
writer = Agent(
    tools=[write_doc, format_text],
    system_prompt="You write clear summaries"
)

# Orchestrator coordinates them
workflow = MultiAgentWorkflow([researcher, writer])
</code></pre>

                    <h3>Tool-Calling Flow</h3>
                    <p>How agents actually call tools (simplified):</p>
                    <pre><code>1. User sends message
2. LLM receives: system prompt + message + tool definitions
3. LLM responds with: tool_name + parameters (JSON)
4. Framework executes tool
5. Framework sends tool result back to LLM
6. LLM decides: use another tool OR respond to user
</code></pre>

                    <h3>Memory in Agents</h3>
                    <ul>
                        <li><strong>Short-term</strong>: Conversation history in context</li>
                        <li><strong>Long-term</strong>: Stored in database, retrieved when relevant</li>
                        <li><strong>AgentCore Memory</strong>: Managed service for this</li>
                    </ul>

                    <pre><code># Strands with memory
from strands import Agent
from strands.memory import ConversationMemory

agent = Agent(
    model="claude-4-sonnet",
    memory=ConversationMemory()
)

# First interaction
agent.run("My name is Alex")

# Later interaction (agent remembers)
agent.run("What's my name?")
# Response: "Your name is Alex"
</code></pre>

                    <h3>Error Handling & Retries</h3>
                    <p>Agents must handle failures gracefully:</p>
                    <ul>
                        <li>Tool returns error → LLM tries different approach</li>
                        <li>LLM hallucinates tool → Framework catches it</li>
                        <li>Max iterations reached → Agent gives up gracefully</li>
                    </ul>
                `
            },
            {
                id: "m2-l4",
                title: "Tools and Tool Integration",
                content: `
                    <h3>What are Tools?</h3>
                    <p>Tools are functions that agents can call to interact with the world:</p>
                    <ul>
                        <li>Search the web</li>
                        <li>Query databases</li>
                        <li>Send emails</li>
                        <li>Read/write files</li>
                        <li>Call APIs</li>
                        <li>Perform calculations</li>
                    </ul>

                    <h3>Defining Tools in Strands</h3>
                    <pre><code>from strands import tool

@tool
def search_web(query: str, num_results: int = 5) -> str:
    """Search the web for information.

    Args:
        query: The search query
        num_results: Number of results to return (default: 5)

    Returns:
        Search results as formatted text
    """
    # Implementation
    results = perform_search(query, num_results)
    return format_results(results)
</code></pre>

                    <h3>Tool Design Best Practices</h3>
                    <ul>
                        <li><strong>Clear names</strong>: <code>get_weather</code> not <code>wthr</code></li>
                        <li><strong>Good descriptions</strong>: LLM uses them to decide when to call</li>
                        <li><strong>Type hints</strong>: Help LLM provide correct parameters</li>
                        <li><strong>Focused scope</strong>: One tool, one purpose</li>
                        <li><strong>Error handling</strong>: Return helpful error messages</li>
                    </ul>

                    <h3>Tool Schema</h3>
                    <p>Behind the scenes, tools are converted to JSON schema:</p>
                    <pre><code>{
  "name": "search_web",
  "description": "Search the web for information",
  "parameters": {
    "type": "object",
    "properties": {
      "query": {
        "type": "string",
        "description": "The search query"
      },
      "num_results": {
        "type": "integer",
        "description": "Number of results to return",
        "default": 5
      }
    },
    "required": ["query"]
  }
}
</code></pre>

                    <h3>Model Context Protocol (MCP)</h3>
                    <p>Strands supports MCP - a standard for tool integration:</p>
                    <ul>
                        <li>Thousands of pre-built MCP tools available</li>
                        <li>Plug-and-play integration</li>
                        <li>Tools from different vendors work together</li>
                    </ul>

                    <pre><code>from strands import Agent
from mcp import get_tool

# Use pre-built MCP tools
github_tool = get_tool("github")
slack_tool = get_tool("slack")

agent = Agent(
    tools=[github_tool, slack_tool]
)
</code></pre>

                    <h3>Tool Execution Safety</h3>
                    <p>Important for enterprise deployments:</p>
                    <ul>
                        <li><strong>Sandboxing</strong>: Run tools in isolated environments</li>
                        <li><strong>Permissions</strong>: Require approval for sensitive actions</li>
                        <li><strong>Rate limiting</strong>: Prevent abuse</li>
                        <li><strong>Logging</strong>: Track all tool executions</li>
                    </ul>

                    <h3>AgentCore Code Execution</h3>
                    <p>AgentCore provides a secure code execution service:</p>
                    <pre><code># Run Python code safely in sandbox
@tool
def execute_code(code: str) -> str:
    """Execute Python code safely.

    Runs in isolated environment with limited permissions.
    """
    # AgentCore handles sandboxing
    result = agentcore.execute(code)
    return result
</code></pre>
                `
            }
        ],
        quiz: [
            {
                question: "What is the main difference between a chatbot and an AI agent?",
                options: [
                    "Agents are faster",
                    "Agents can take autonomous actions using tools",
                    "Agents use different models",
                    "Agents cost less"
                ],
                correct: 1
            },
            {
                question: "What does 'model-driven approach' mean in Strands SDK?",
                options: [
                    "The LLM is faster",
                    "The LLM decides which tools to use and when",
                    "The developer controls all workflows",
                    "The model trains itself"
                ],
                correct: 1
            },
            {
                question: "What is the ReAct pattern?",
                options: [
                    "React.js for AI",
                    "Reason → Act → Observe → Repeat",
                    "A React component",
                    "A database pattern"
                ],
                correct: 1
            },
            {
                question: "Why are type hints important in tool definitions?",
                options: [
                    "Required by Python",
                    "Help the LLM understand parameter types",
                    "Make code faster",
                    "Only for documentation"
                ],
                correct: 1
            },
            {
                question: "What is the Model Context Protocol (MCP)?",
                options: [
                    "A protocol for model training",
                    "A standard for tool integration",
                    "A database protocol",
                    "A networking protocol"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        title: "Module 3: AWS Fundamentals & Bedrock",
        priority: "must-know",
        estimatedHours: 6,
        description: "Learn AWS basics, IAM, and Amazon Bedrock foundation models essential for building AI agents.",
        lessons: [
            {
                id: "m3-l1",
                title: "AWS Account and IAM Basics",
                content: `
                    <h3>AWS Account Setup</h3>
                    <p>Amazon Web Services (AWS) is the cloud platform where you'll deploy your AI agents.</p>

                    <h3>Key AWS Concepts</h3>
                    <ul>
                        <li><strong>Regions</strong>: Physical locations worldwide (e.g., us-east-1, eu-west-1)</li>
                        <li><strong>Availability Zones</strong>: Isolated data centers within a region</li>
                        <li><strong>Services</strong>: Building blocks like Bedrock, Lambda, S3</li>
                        <li><strong>Resources</strong>: Instances of services (e.g., a specific Lambda function)</li>
                    </ul>

                    <h3>Identity and Access Management (IAM)</h3>
                    <p>IAM controls who can access what in your AWS account.</p>

                    <pre><code># Key IAM Components:
1. Users - Individual people
2. Groups - Collections of users
3. Roles - Temporary permissions for services
4. Policies - JSON documents defining permissions
</code></pre>

                    <h3>Creating an IAM User for Development</h3>
                    <pre><code># In AWS Console:
1. Go to IAM → Users → Create User
2. Name: "agentcore-dev"
3. Attach policies:
   - AmazonBedrockFullAccess
   - IAMReadOnlyAccess
4. Create access keys for CLI
5. Save credentials securely
</code></pre>

                    <h3>IAM Policy Example</h3>
                    <pre><code>{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream"
      ],
      "Resource": "*"
    }
  ]
}
</code></pre>

                    <h3>Configuring AWS CLI</h3>
                    <pre><code># Install AWS CLI first
pip install awscli

# Configure credentials
aws configure

# Enter when prompted:
AWS Access Key ID: YOUR_KEY
AWS Secret Access Key: YOUR_SECRET
Default region: us-east-1
Default output format: json

# Test configuration
aws sts get-caller-identity
</code></pre>

                    <h3>Best Practices</h3>
                    <ul>
                        <li>Never use root account for daily work</li>
                        <li>Enable MFA (Multi-Factor Authentication)</li>
                        <li>Use principle of least privilege (minimum permissions needed)</li>
                        <li>Rotate access keys regularly</li>
                        <li>Use IAM roles for EC2/Lambda instead of hardcoded keys</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html" target="_blank">IAM User Guide</a></li>
                        <li><a href="https://aws.amazon.com/getting-started/" target="_blank">AWS Getting Started</a></li>
                    </ul>
                `
            },
            {
                id: "m3-l2",
                title: "Introduction to Amazon Bedrock",
                content: `
                    <h3>What is Amazon Bedrock?</h3>
                    <p>Amazon Bedrock is a fully managed service that provides access to foundation models (FMs) from leading AI companies through a single API.</p>

                    <h3>Available Foundation Models</h3>
                    <ul>
                        <li><strong>Anthropic Claude</strong>: Claude 4 Sonnet, Claude 3.5 Sonnet (best for agents)</li>
                        <li><strong>Meta Llama</strong>: Llama 4 models</li>
                        <li><strong>Amazon Titan</strong>: Amazon's own models</li>
                        <li><strong>AI21 Jurassic</strong>: Enterprise-focused models</li>
                        <li><strong>Cohere</strong>: Command models</li>
                    </ul>

                    <h3>Why Bedrock for AI Agents?</h3>
                    <ul>
                        <li><strong>Managed Infrastructure</strong>: No model hosting required</li>
                        <li><strong>Security</strong>: Data doesn't leave AWS, enterprise compliance</li>
                        <li><strong>Scalability</strong>: Auto-scales with demand</li>
                        <li><strong>Model Choice</strong>: Switch models without code changes</li>
                        <li><strong>Integration</strong>: Works seamlessly with other AWS services</li>
                    </ul>

                    <h3>Requesting Model Access</h3>
                    <pre><code># In AWS Console:
1. Go to Amazon Bedrock
2. Click "Model access" in left sidebar
3. Click "Modify model access"
4. Select models (especially Claude 4 Sonnet)
5. Submit request (usually approved instantly)
6. Wait for "Access granted" status
</code></pre>

                    <h3>Bedrock Regions</h3>
                    <p>Not all models are available in all regions. For AgentCore:</p>
                    <ul>
                        <li><strong>us-east-1</strong> (N. Virginia) - Most models, best for testing</li>
                        <li><strong>us-west-2</strong> (Oregon) - Good alternative</li>
                        <li><strong>eu-west-1</strong> (Ireland) - For EU deployments</li>
                    </ul>

                    <h3>Basic Bedrock API Call</h3>
                    <pre><code>import boto3
import json

# Create Bedrock client
bedrock = boto3.client(
    service_name='bedrock-runtime',
    region_name='us-east-1'
)

# Prepare request
body = json.dumps({
    "anthropic_version": "bedrock-2023-05-31",
    "max_tokens": 1024,
    "messages": [
        {
            "role": "user",
            "content": "Hello, Claude!"
        }
    ]
})

# Call model
response = bedrock.invoke_model(
    modelId='anthropic.claude-4-sonnet-20250514-v1:0',
    body=body
)

# Parse response
result = json.loads(response['body'].read())
print(result['content'][0]['text'])
</code></pre>

                    <h3>Bedrock Pricing</h3>
                    <p>Pay only for what you use:</p>
                    <ul>
                        <li><strong>Input tokens</strong>: Text sent to model</li>
                        <li><strong>Output tokens</strong>: Text generated by model</li>
                        <li>Claude 4 Sonnet: ~$3 per million input tokens, ~$15 per million output tokens</li>
                        <li>No upfront costs or minimum fees</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/bedrock/" target="_blank">Amazon Bedrock Documentation</a></li>
                        <li><a href="https://aws.amazon.com/bedrock/pricing/" target="_blank">Bedrock Pricing</a></li>
                        <li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html" target="_blank">Bedrock Model IDs</a></li>
                    </ul>
                `
            },
            {
                id: "m3-l3",
                title: "Bedrock vs AgentCore vs Strands",
                content: `
                    <h3>Understanding the Stack</h3>
                    <p>It's important to understand how these three layers work together:</p>

                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--bg-tertiary);">
                            <th style="padding: 0.75rem; text-align: left;">Layer</th>
                            <th style="padding: 0.75rem; text-align: left;">What It Does</th>
                            <th style="padding: 0.75rem; text-align: left;">Your Interaction</th>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Amazon Bedrock</strong></td>
                            <td style="padding: 0.75rem;">Provides access to LLMs</td>
                            <td style="padding: 0.75rem;">Rarely direct - via Strands SDK</td>
                        </tr>
                        <tr style="background: var(--bg-tertiary);">
                            <td style="padding: 0.75rem;"><strong>AgentCore</strong></td>
                            <td style="padding: 0.75rem;">7 managed services for enterprise agents</td>
                            <td style="padding: 0.75rem;">Configure services, monitor agents</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;"><strong>Strands SDK</strong></td>
                            <td style="padding: 0.75rem;">Python framework to build agents</td>
                            <td style="padding: 0.75rem;">Write code here - main focus</td>
                        </tr>
                    </table>

                    <h3>The Full Picture</h3>
                    <pre><code>┌─────────────────────────────────────┐
│   Your Python Code (Strands SDK)   │  ← You write this
├─────────────────────────────────────┤
│    Amazon Bedrock AgentCore         │  ← Managed services
│  (Memory, Runtime, Code Execution,  │
│   Tools, etc.)                      │
├─────────────────────────────────────┤
│      Amazon Bedrock                 │  ← Foundation models
│  (Claude, Llama, etc.)              │
├─────────────────────────────────────┤
│           AWS Cloud                 │  ← Infrastructure
└─────────────────────────────────────┘
</code></pre>

                    <h3>When to Use What</h3>

                    <p><strong>Use Bedrock directly when:</strong></p>
                    <ul>
                        <li>Simple LLM calls (chat, completion)</li>
                        <li>No tool-calling needed</li>
                        <li>Prototyping and testing</li>
                    </ul>

                    <p><strong>Use Strands SDK when:</strong></p>
                    <ul>
                        <li>Building agents with tools</li>
                        <li>Multi-step reasoning required</li>
                        <li>Need ReAct pattern</li>
                        <li>Local development and testing</li>
                    </ul>

                    <p><strong>Use AgentCore when:</strong></p>
                    <ul>
                        <li>Production deployments</li>
                        <li>Need enterprise features (memory, security, monitoring)</li>
                        <li>Scaling to many users</li>
                        <li>Require compliance and governance</li>
                    </ul>

                    <h3>Strands + AgentCore Integration</h3>
                    <pre><code>from strands import Agent
from strands.integrations.bedrock import BedrockAgentCore

# Development: Uses Bedrock directly
agent = Agent(
    model="claude-4-sonnet",
    tools=[my_tool]
)

# Production: Uses AgentCore services
agent = Agent(
    model="claude-4-sonnet",
    tools=[my_tool],
    runtime=BedrockAgentCore(
        memory_enabled=True,
        guardrails_enabled=True
    )
)
</code></pre>

                    <h3>Cost Considerations</h3>
                    <ul>
                        <li><strong>Bedrock</strong>: Pay per token (input + output)</li>
                        <li><strong>AgentCore services</strong>: Additional charges for memory, runtime, etc.</li>
                        <li><strong>Strands SDK</strong>: Free and open-source</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/bedrock-agentcore/" target="_blank">AgentCore Developer Guide</a></li>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/" target="_blank">Strands SDK Documentation</a></li>
                        <li><a href="https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/" target="_blank">Strands SDK Introduction Blog</a></li>
                    </ul>
                `
            },
            {
                id: "m3-l4",
                title: "AWS SDK for Python (Boto3)",
                content: `
                    <h3>What is Boto3?</h3>
                    <p>Boto3 is the official AWS SDK for Python. It allows you to interact with AWS services from your code.</p>

                    <h3>Installation</h3>
                    <pre><code>pip install boto3</code></pre>

                    <h3>Basic Boto3 Usage</h3>
                    <pre><code>import boto3

# Create a client for a service
s3 = boto3.client('s3')
bedrock = boto3.client('bedrock-runtime', region_name='us-east-1')

# Create a resource (higher-level interface)
s3_resource = boto3.resource('s3')
bucket = s3_resource.Bucket('my-bucket')
</code></pre>

                    <h3>Boto3 for Bedrock</h3>
                    <pre><code>import boto3
import json

# Create Bedrock Runtime client
bedrock = boto3.client(
    service_name='bedrock-runtime',
    region_name='us-east-1'
)

# Invoke a model
response = bedrock.invoke_model(
    modelId='anthropic.claude-4-sonnet-20250514-v1:0',
    body=json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 1024,
        "messages": [{"role": "user", "content": "Hello!"}]
    })
)

# Parse response
result = json.loads(response['body'].read())
print(result)
</code></pre>

                    <h3>Credentials Configuration</h3>
                    <p>Boto3 looks for credentials in this order:</p>
                    <ol>
                        <li>Environment variables (<code>AWS_ACCESS_KEY_ID</code>, <code>AWS_SECRET_ACCESS_KEY</code>)</li>
                        <li>Shared credentials file (<code>~/.aws/credentials</code>)</li>
                        <li>IAM role (when running on EC2, Lambda, etc.)</li>
                    </ol>

                    <pre><code># Using environment variables
import os
os.environ['AWS_ACCESS_KEY_ID'] = 'your_key'
os.environ['AWS_SECRET_ACCESS_KEY'] = 'your_secret'
os.environ['AWS_REGION'] = 'us-east-1'

# Or use credentials file (~/.aws/credentials)
[default]
aws_access_key_id = your_key
aws_secret_access_key = your_secret
region = us-east-1
</code></pre>

                    <h3>Error Handling</h3>
                    <pre><code>from botocore.exceptions import ClientError

try:
    response = bedrock.invoke_model(...)
except ClientError as e:
    error_code = e.response['Error']['Code']
    if error_code == 'ResourceNotFoundException':
        print("Model not found")
    elif error_code == 'AccessDeniedException':
        print("Access denied - check IAM permissions")
    else:
        print(f"Error: {e}")
</code></pre>

                    <h3>Strands SDK Under the Hood</h3>
                    <p>Strands SDK uses Boto3 internally to call Bedrock. When you do:</p>
                    <pre><code>from strands import Agent

agent = Agent(model="claude-4-sonnet")
</code></pre>

                    <p>Strands is automatically:</p>
                    <ul>
                        <li>Creating a Boto3 Bedrock client</li>
                        <li>Formatting messages in Bedrock format</li>
                        <li>Handling tool-calling protocol</li>
                        <li>Managing conversation history</li>
                    </ul>

                    <h3>When to Use Boto3 Directly</h3>
                    <ul>
                        <li>Accessing other AWS services (S3, DynamoDB, etc.)</li>
                        <li>Custom Bedrock configurations</li>
                        <li>Low-level control needed</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://boto3.amazonaws.com/v1/documentation/api/latest/index.html" target="_blank">Boto3 Documentation</a></li>
                        <li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-runtime_example_bedrock-runtime_InvokeModel_AnthropicClaude_section.html" target="_blank">Bedrock Runtime Examples</a></li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                question: "What is the purpose of AWS IAM?",
                options: [
                    "To host websites",
                    "To control who can access what in AWS",
                    "To store data",
                    "To run code"
                ],
                correct: 1
            },
            {
                question: "What is Amazon Bedrock?",
                options: [
                    "A database service",
                    "A fully managed service providing access to foundation models",
                    "A storage service",
                    "A networking service"
                ],
                correct: 1
            },
            {
                question: "Which layer do you primarily write code in when building agents?",
                options: [
                    "Amazon Bedrock",
                    "AgentCore",
                    "Strands SDK",
                    "AWS Cloud"
                ],
                correct: 2
            },
            {
                question: "What is Boto3?",
                options: [
                    "A Python web framework",
                    "The AWS SDK for Python",
                    "A database driver",
                    "An AI model"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "Module 4: Amazon Bedrock AgentCore Deep Dive",
        priority: "must-know",
        estimatedHours: 6,
        description: "Explore the 7 managed services of AgentCore and learn how to deploy production-ready AI agents.",
        lessons: [
            {
                id: "m4-l1",
                title: "AgentCore Overview - The 7 Services",
                content: `
                    <h3>What is Amazon Bedrock AgentCore?</h3>
                    <p>AgentCore is an enterprise platform providing 7 managed services to build, deploy, and operate AI agents at scale.</p>

                    <h3>The 7 Core Services</h3>
                    <ol>
                        <li><strong>Runtime</strong>: Orchestrates agent execution and tool calling</li>
                        <li><strong>Memory</strong>: Stores and retrieves conversation context</li>
                        <li><strong>Code Execution</strong>: Runs Python code in secure sandboxes</li>
                        <li><strong>Tools</strong>: Manages and executes agent tools</li>
                        <li><strong>Guardrails</strong>: Enforces safety and compliance policies</li>
                        <li><strong>Observability</strong>: Monitors agent performance and behavior</li>
                        <li><strong>Knowledge Bases</strong>: RAG (Retrieval-Augmented Generation) for agents</li>
                    </ol>

                    <h3>Why Use AgentCore?</h3>
                    <ul>
                        <li><strong>Production-Ready</strong>: Enterprise security, compliance, scalability</li>
                        <li><strong>Managed Infrastructure</strong>: No servers to manage</li>
                        <li><strong>Multi-Tenant</strong>: Isolate data per user/customer</li>
                        <li><strong>Integrated</strong>: Works seamlessly with Strands SDK</li>
                        <li><strong>Observable</strong>: Built-in logging, tracing, metrics</li>
                    </ul>

                    <h3>AgentCore Architecture</h3>
                    <pre><code>User Request
     ↓
[AgentCore Runtime]
     ↓
[Bedrock LLM] ←→ [Tools Service]
     ↓                    ↓
[Memory Service]    [Code Execution]
     ↓                    ↓
[Guardrails] ←→ [Observability]
     ↓
Response
</code></pre>

                    <h3>Development vs Production</h3>
                    <table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
                        <tr style="background: var(--bg-tertiary);">
                            <th style="padding: 0.75rem;">Development (Strands Local)</th>
                            <th style="padding: 0.75rem;">Production (AgentCore)</th>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;">Rapid iteration</td>
                            <td style="padding: 0.75rem;">Enterprise security</td>
                        </tr>
                        <tr style="background: var(--bg-tertiary);">
                            <td style="padding: 0.75rem;">Local testing</td>
                            <td style="padding: 0.75rem;">Multi-tenant isolation</td>
                        </tr>
                        <tr>
                            <td style="padding: 0.75rem;">No infrastructure</td>
                            <td style="padding: 0.75rem;">Auto-scaling</td>
                        </tr>
                        <tr style="background: var(--bg-tertiary);">
                            <td style="padding: 0.75rem;">Basic memory</td>
                            <td style="padding: 0.75rem;">Persistent memory</td>
                        </tr>
                    </table>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is.html" target="_blank">AgentCore Developer Guide</a></li>
                        <li><a href="https://aws.amazon.com/blogs/aws/introducing-amazon-bedrock-agentcore-securely-deploy-and-operate-ai-agents-at-any-scale/" target="_blank">AgentCore Announcement Blog</a></li>
                        <li><a href="https://aws.github.io/bedrock-agentcore-starter-toolkit/" target="_blank">AgentCore Starter Toolkit</a></li>
                    </ul>
                `
            },
            {
                id: "m4-l2",
                title: "Memory Service",
                content: `
                    <h3>Why Memory Matters</h3>
                    <p>Agents need to remember:</p>
                    <ul>
                        <li>User preferences and context</li>
                        <li>Previous interactions</li>
                        <li>Task progress</li>
                        <li>Historical data for personalization</li>
                    </ul>

                    <h3>Types of Memory</h3>
                    <p><strong>1. Short-Term Memory (Conversation History)</strong></p>
                    <pre><code># Automatically managed by AgentCore
User: "My name is Sarah"
Agent: "Nice to meet you, Sarah!"
User: "What's my name?"
Agent: "Your name is Sarah"
</code></pre>

                    <p><strong>2. Long-Term Memory (Persistent Storage)</strong></p>
                    <pre><code># Stored across sessions
Session 1: "I prefer email updates"
Session 2 (days later): Agent remembers preference
</code></pre>

                    <h3>Using Memory in Strands</h3>
                    <pre><code>from strands import Agent
from strands.memory import ConversationMemory

# Simple conversation memory
agent = Agent(
    model="claude-4-sonnet",
    memory=ConversationMemory()
)

# With AgentCore persistent memory
from strands.integrations.bedrock import BedrockMemory

agent = Agent(
    model="claude-4-sonnet",
    memory=BedrockMemory(
        session_id="user-123",
        persist=True
    )
)
</code></pre>

                    <h3>Memory Configuration</h3>
                    <pre><code># Control memory behavior
memory = BedrockMemory(
    session_id="user-123",
    max_messages=20,        # Keep last 20 messages
    summarize_old=True,     # Summarize older context
    ttl_hours=24           # Expire after 24 hours
)
</code></pre>

                    <h3>Multi-User Memory Isolation</h3>
                    <pre><code># Each user gets isolated memory
user1_agent = Agent(
    memory=BedrockMemory(session_id="user-001")
)

user2_agent = Agent(
    memory=BedrockMemory(session_id="user-002")
)

# user-001 and user-002 memories are completely separate
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/memory.html" target="_blank">AgentCore Memory Documentation</a></li>
                    </ul>
                `
            },
            {
                id: "m4-l3",
                title: "Runtime Service",
                content: `
                    <h3>What is AgentCore Runtime?</h3>
                    <p>The Runtime service orchestrates agent execution:</p>
                    <ul>
                        <li>Manages the ReAct loop (Reason → Act → Observe)</li>
                        <li>Handles tool calling</li>
                        <li>Enforces guardrails</li>
                        <li>Tracks execution metrics</li>
                    </ul>

                    <h3>Runtime Configuration</h3>
                    <pre><code>from strands import Agent
from strands.integrations.bedrock import BedrockRuntime

agent = Agent(
    model="claude-4-sonnet",
    runtime=BedrockRuntime(
        max_iterations=10,      # Max tool-calling loops
        timeout_seconds=30,     # Execution timeout
        enable_tracing=True     # CloudWatch tracing
    )
)
</code></pre>

                    <h3>Execution Limits</h3>
                    <ul>
                        <li><strong>Max iterations</strong>: Prevents infinite loops</li>
                        <li><strong>Timeout</strong>: Prevents runaway execution</li>
                        <li><strong>Token limits</strong>: Controls cost</li>
                        <li><strong>Rate limiting</strong>: Prevents abuse</li>
                    </ul>

                    <h3>Monitoring Runtime</h3>
                    <pre><code># Runtime emits CloudWatch metrics
- ToolCallCount: Number of tools invoked
- IterationCount: ReAct loop iterations
- ExecutionDuration: Total execution time
- ErrorRate: Failed executions
</code></pre>

                    <h3>Scaling with Runtime</h3>
                    <p>AgentCore Runtime automatically:</p>
                    <ul>
                        <li>Scales to handle concurrent requests</li>
                        <li>Load balances across availability zones</li>
                        <li>Queues requests during spikes</li>
                        <li>Retries failed executions</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/runtime.html" target="_blank">AgentCore Runtime Documentation</a></li>
                        <li><a href="https://aws.github.io/bedrock-agentcore-starter-toolkit/user-guide/runtime/quickstart.html" target="_blank">Runtime Quickstart Guide</a></li>
                    </ul>
                `
            },
            {
                id: "m4-l4",
                title: "Guardrails and Security",
                content: `
                    <h3>Why Guardrails?</h3>
                    <p>Guardrails prevent agents from:</p>
                    <ul>
                        <li>Generating harmful content</li>
                        <li>Leaking sensitive data (PII, credentials)</li>
                        <li>Performing unauthorized actions</li>
                        <li>Violating compliance policies</li>
                    </ul>

                    <h3>Types of Guardrails</h3>
                    <p><strong>1. Content Filters</strong></p>
                    <pre><code># Block harmful content categories
guardrail = Guardrail(
    content_filters=[
        "hate_speech",
        "violence",
        "sexual_content",
        "profanity"
    ],
    threshold="MEDIUM"  # LOW, MEDIUM, HIGH
)
</code></pre>

                    <p><strong>2. PII Redaction</strong></p>
                    <pre><code># Automatically redact sensitive data
guardrail = Guardrail(
    pii_redaction=[
                        "email",
        "ssn",
        "credit_card",
        "phone_number"
    ]
)

# Input: "My email is alice@example.com"
# Filtered: "My email is [EMAIL]"
</code></pre>

                    <p><strong>3. Topic Filtering</strong></p>
                    <pre><code># Block specific topics
guardrail = Guardrail(
    denied_topics=[
        "medical_advice",
        "legal_advice",
        "financial_advice"
    ]
)
</code></pre>

                    <p><strong>4. Word Filters</strong></p>
                    <pre><code># Block specific words/phrases
guardrail = Guardrail(
    blocked_words=["confidential", "internal", "secret"]
)
</code></pre>

                    <h3>Applying Guardrails</h3>
                    <pre><code>from strands import Agent
from strands.integrations.bedrock import BedrockGuardrail

agent = Agent(
    model="claude-4-sonnet",
    guardrails=BedrockGuardrail(
        guardrail_id="your-guardrail-id",
        version="1.0"
    )
)

# Guardrails applied to both input and output
response = agent.run("User message")
</code></pre>

                    <h3>Security Best Practices</h3>
                    <ul>
                        <li><strong>IAM Policies</strong>: Least-privilege access</li>
                        <li><strong>VPC Endpoints</strong>: Private network access</li>
                        <li><strong>Encryption</strong>: At-rest and in-transit</li>
                        <li><strong>Audit Logging</strong>: CloudTrail for all actions</li>
                        <li><strong>Secrets Management</strong>: AWS Secrets Manager</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html" target="_blank">Bedrock Guardrails Documentation</a></li>
                        <li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/security.html" target="_blank">AgentCore Security Guide</a></li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                question: "How many managed services does AgentCore provide?",
                options: ["3", "5", "7", "10"],
                correct: 2
            },
            {
                question: "What is the purpose of AgentCore's Memory service?",
                options: [
                    "To store files",
                    "To store and retrieve conversation context",
                    "To cache API calls",
                    "To store code"
                ],
                correct: 1
            },
            {
                question: "What does the Runtime service do?",
                options: [
                    "Stores data",
                    "Orchestrates agent execution and tool calling",
                    "Compiles code",
                    "Manages users"
                ],
                correct: 1
            },
            {
                question: "Why are Guardrails important?",
                options: [
                    "To make agents faster",
                    "To prevent harmful content and unauthorized actions",
                    "To reduce costs",
                    "To improve accuracy"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 5,
        title: "Module 5: Strands SDK Fundamentals",
        priority: "must-know",
        estimatedHours: 4,
        description: "Master the Strands SDK - learn to create agents, define tools, and configure agent behavior.",
        lessons: [
            {
                id: "m5-l1",
                title: "Installing and Setting Up Strands SDK",
                content: `
                    <h3>Installation</h3>
                    <pre><code># Install Strands SDK
pip install strands-agents

# Verify installation
python -c "import strands; print(strands.__version__)"
</code></pre>

                    <h3>Dependencies</h3>
                    <p>Strands automatically installs:</p>
                    <ul>
                        <li><code>boto3</code>: AWS SDK for Bedrock</li>
                        <li><code>pydantic</code>: Data validation</li>
                        <li><code>httpx</code>: HTTP client for async</li>
                    </ul>

                    <h3>Project Structure</h3>
                    <pre><code>my-agent-project/
├── .env                  # API keys and config
├── requirements.txt      # Python dependencies
├── agent.py             # Main agent code
├── tools/               # Custom tools
│   ├── __init__.py
│   ├── search.py
│   └── calculator.py
└── tests/               # Unit tests
    └── test_agent.py
</code></pre>

                    <h3>Environment Setup</h3>
                    <pre><code># .env file
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret

# Or use AWS CLI credentials (recommended)
# AWS credentials are automatically detected from ~/.aws/credentials
</code></pre>

                    <h3>Your First Agent</h3>
                    <pre><code>from strands import Agent

# Create a simple agent
agent = Agent(
    model="claude-4-sonnet",
    system_prompt="You are a helpful assistant."
)

# Run the agent
response = agent.run("Hello! What can you help me with?")
print(response)
</code></pre>

                    <h3>Development Tools</h3>
                    <pre><code># Install additional dev tools
pip install strands-agents[dev]

# Includes:
# - pytest: Testing
# - black: Code formatting
# - mypy: Type checking
# - ipython: Interactive shell
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/quickstart.html" target="_blank">Strands Quickstart Guide</a></li>
                        <li><a href="https://github.com/strands-agents/sdk-python" target="_blank">Strands SDK GitHub Repository</a></li>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/installation.html" target="_blank">Installation Documentation</a></li>
                    </ul>
                `
            },
            {
                id: "m5-l2",
                title: "Creating Your First Agent",
                content: `
                    <h3>Basic Agent Creation</h3>
                    <pre><code>from strands import Agent

# Simple conversational agent
agent = Agent(
    model="claude-4-sonnet",
    system_prompt="You are a helpful AI assistant specializing in Python programming."
)

# Interact with the agent
response = agent.run("Explain list comprehensions")
print(response)
</code></pre>

                    <h3>Agent Configuration Options</h3>
                    <pre><code>agent = Agent(
    model="claude-4-sonnet",

    # Behavior
    system_prompt="Your agent's personality and instructions",

    # Model parameters
    temperature=0.7,          # Creativity (0-1)
    max_tokens=4096,          # Response length
    top_p=0.9,               # Nucleus sampling

    # Agent features
    tools=[],                # List of tools
    memory=None,             # Memory implementation
    max_iterations=10,       # Max ReAct loops

    # AWS configuration
    region="us-east-1",
    profile="default"        # AWS CLI profile
)
</code></pre>

                    <h3>System Prompts</h3>
                    <p>The system prompt defines your agent's behavior:</p>
                    <pre><code># Good system prompt
system_prompt = """You are a Python coding assistant for product managers.

Your role:
1. Explain code concepts in simple, non-technical terms
2. Provide working code examples
3. Focus on practical applications
4. Ask clarifying questions when needed

Style:
- Use analogies to explain complex ideas
- Break down problems step-by-step
- Be encouraging and patient
"""

agent = Agent(
    model="claude-4-sonnet",
    system_prompt=system_prompt
)
</code></pre>

                    <h3>Conversation Flow</h3>
                    <pre><code># Single interaction
response = agent.run("What is a decorator?")

# Multi-turn conversation (memory handled automatically)
agent.run("Tell me about Python decorators")
agent.run("Can you show me an example?")
agent.run("How would I use this in an AI agent?")
</code></pre>

                    <h3>Async Agents</h3>
                    <pre><code>import asyncio
from strands import Agent

async def main():
    agent = Agent(model="claude-4-sonnet")

    # Async execution
    response = await agent.arun("Hello!")
    print(response)

asyncio.run(main())
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/agents.html" target="_blank">Agent Configuration Guide</a></li>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/prompting.html" target="_blank">System Prompt Best Practices</a></li>
                    </ul>
                `
            },
            {
                id: "m5-l3",
                title: "Defining Tools with @tool Decorator",
                content: `
                    <h3>What Are Tools?</h3>
                    <p>Tools give agents the ability to interact with the world:</p>
                    <ul>
                        <li>Search the web</li>
                        <li>Read/write files</li>
                        <li>Query databases</li>
                        <li>Call APIs</li>
                        <li>Perform calculations</li>
                    </ul>

                    <h3>Creating a Simple Tool</h3>
                    <pre><code>from strands import tool

@tool
def get_weather(city: str) -> str:
                    """Get the current weather for a city.

    Args:
        city: Name of the city

    Returns:
        Weather information as a string
    """
    # In real implementation, call a weather API
    return f"The weather in {city} is sunny, 72°F"

# Use the tool with an agent
from strands import Agent

agent = Agent(
    model="claude-4-sonnet",
    tools=[get_weather]
)

response = agent.run("What's the weather in San Francisco?")
# Agent automatically calls get_weather("San Francisco")
</code></pre>

                    <h3>Tool Best Practices</h3>
                    <ol>
                        <li><strong>Clear names</strong>: Use descriptive function names</li>
                        <li><strong>Type hints</strong>: Always include type annotations</li>
                        <li><strong>Docstrings</strong>: LLM uses this to understand the tool</li>
                        <li><strong>Error handling</strong>: Return helpful error messages</li>
                        <li><strong>Single purpose</strong>: One tool, one responsibility</li>
                    </ol>

                    <h3>Advanced Tool Example</h3>
                    <pre><code>from strands import tool
import requests

@tool
def search_wikipedia(query: str, max_results: int = 3) -> str:
    """Search Wikipedia for information.

    Args:
        query: The search query
        max_results: Maximum number of results (default: 3)

    Returns:
        Formatted search results
    """
    try:
        url = "https://en.wikipedia.org/w/api.php"
        params = {
            "action": "opensearch",
            "search": query,
            "limit": max_results,
            "format": "json"
        }
        response = requests.get(url, params=params, timeout=5)
        response.raise_for_status()

        data = response.json()
        titles = data[1]
        descriptions = data[2]

        results = []
        for title, desc in zip(titles, descriptions):
            results.append(f"**{title}**: {desc}")

        return "\\n\\n".join(results) if results else "No results found"

    except Exception as e:
        return f"Error searching Wikipedia: {str(e)}"
</code></pre>

                    <h3>Multiple Tools</h3>
                    <pre><code>from strands import Agent, tool

@tool
def calculate(expression: str) -> str:
    """Safely evaluate a mathematical expression."""
    try:
        # In production, use a safe math parser
        result = eval(expression, {"__builtins__": {}}, {})
        return str(result)
    except Exception as e:
        return f"Calculation error: {e}"

@tool
def search_web(query: str) -> str:
    """Search the web for information."""
    # Implementation here
    return f"Search results for: {query}"

# Agent with multiple tools
agent = Agent(
    model="claude-4-sonnet",
    tools=[calculate, search_web],
    system_prompt="Use tools to help answer questions."
)

# Agent can choose which tool to use
agent.run("What is 15% of 1000, and search for Python tutorials")
</code></pre>

                    <h3>Tool Schema</h3>
                    <p>Strands automatically converts your tool to a schema the LLM understands:</p>
                    <pre><code># Your Python function:
@tool
def get_weather(city: str) -> str:
    """Get weather for a city."""
    pass

# Becomes this schema for the LLM:
{
    "name": "get_weather",
    "description": "Get weather for a city.",
    "parameters": {
        "type": "object",
        "properties": {
            "city": {"type": "string"}
        },
        "required": ["city"]
    }
}
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/tools.html" target="_blank">Strands Tools Documentation</a></li>
                        <li><a href="https://github.com/strands-agents/sdk-python/tree/main/examples" target="_blank">Tool Examples on GitHub</a></li>
                    </ul>
                `
            },
            {
                id: "m5-l4",
                title: "Agent Configuration and Testing",
                content: `
                    <h3>Advanced Configuration</h3>
                    <pre><code>from strands import Agent
from strands.memory import ConversationMemory

agent = Agent(
    # Model settings
    model="claude-4-sonnet",
    temperature=0.3,         # Lower = more focused
    max_tokens=2048,

    # Agent behavior
    system_prompt="You are a helpful assistant",
    max_iterations=5,        # Limit tool-calling loops

    # Memory
    memory=ConversationMemory(
        max_messages=20      # Keep last 20 messages
    ),

    # Tools
    tools=[my_tool_1, my_tool_2],

    # Logging
    verbose=True            # Print agent reasoning
)
</code></pre>

                    <h3>Logging and Debugging</h3>
                    <pre><code># Enable verbose mode to see agent thinking
agent = Agent(
    model="claude-4-sonnet",
    tools=[calculator],
    verbose=True  # Shows ReAct loop
)

response = agent.run("What is 15% of 230?")

# Output shows:
# [Thought] I need to calculate 15% of 230
# [Tool Call] calculator("230 * 0.15")
# [Tool Result] "34.5"
# [Thought] I have the answer
# [Response] "15% of 230 is 34.5"
</code></pre>

                    <h3>Testing Your Agent</h3>
                    <pre><code># test_agent.py
import pytest
from strands import Agent, tool

@tool
def mock_weather(city: str) -> str:
    """Mock weather tool for testing."""
    return f"Sunny, 72°F in {city}"

def test_agent_uses_tool():
    agent = Agent(
        model="claude-4-sonnet",
        tools=[mock_weather]
    )

    response = agent.run("What's the weather in Boston?")

    assert "Boston" in response
    assert "72" in response or "Sunny" in response

def test_agent_without_tools():
    agent = Agent(model="claude-4-sonnet")

    response = agent.run("Hello!")

    assert len(response) > 0
    assert isinstance(response, str)

# Run tests
# pytest test_agent.py
</code></pre>

                    <h3>Error Handling</h3>
                    <pre><code>from strands import Agent, tool
from strands.exceptions import AgentError, ToolError

@tool
def risky_operation(data: str) -> str:
    """A tool that might fail."""
    if not data:
        raise ToolError("Data cannot be empty")
    return f"Processed: {data}"

agent = Agent(
    model="claude-4-sonnet",
    tools=[risky_operation]
)

try:
    response = agent.run("Process this data")
except AgentError as e:
    print(f"Agent failed: {e}")
except ToolError as e:
    print(f"Tool failed: {e}")
</code></pre>

                    <h3>Performance Monitoring</h3>
                    <pre><code>import time

start = time.time()
response = agent.run("Complex question")
duration = time.time() - start

print(f"Response time: {duration:.2f}s")
print(f"Token usage: {agent.last_token_usage}")
print(f"Tool calls: {agent.last_tool_calls}")
</code></pre>

                    <h3>Configuration Files</h3>
                    <pre><code># config.py
from dataclasses import dataclass

@dataclass
class AgentConfig:
    model: str = "claude-4-sonnet"
    temperature: float = 0.7
    max_tokens: int = 4096
    max_iterations: int = 10
    region: str = "us-east-1"

# Use in your agent
from strands import Agent
from config import AgentConfig

config = AgentConfig()
agent = Agent(
    model=config.model,
    temperature=config.temperature,
    max_tokens=config.max_tokens
)
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/configuration.html" target="_blank">Configuration Guide</a></li>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/testing.html" target="_blank">Testing Best Practices</a></li>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/debugging.html" target="_blank">Debugging Agents</a></li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                question: "How do you install Strands SDK?",
                options: [
                    "npm install strands",
                    "pip install strands-agents",
                    "brew install strands",
                    "apt-get install strands"
                ],
                correct: 1
            },
            {
                question: "What decorator is used to define agent tools?",
                options: ["@function", "@tool", "@agent", "@def"],
                correct: 1
            },
            {
                question: "What is the purpose of type hints in tool definitions?",
                options: [
                    "Required by Python",
                    "Help the LLM understand parameter types",
                    "Make code faster",
                    "Only for documentation"
                ],
                correct: 1
            },
            {
                question: "What does verbose=True do in Agent configuration?",
                options: [
                    "Makes agent talk more",
                    "Shows agent reasoning and tool calls",
                    "Increases token limit",
                    "Enables debugging mode"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 6,
        title: "Module 6: Building Your First Agent",
        priority: "must-know",
        estimatedHours: 6,
        description: "Hands-on: Plan, implement, test, and deploy a complete AI agent from scratch.",
        lessons: [
            {
                id: "m6-l1",
                title: "Planning Your Agent",
                content: `
                    <h3>Define Your Agent's Purpose</h3>
                    <p>Before writing code, answer these questions:</p>
                    <ul>
                        <li>What problem does this agent solve?</li>
                        <li>Who will use it?</li>
                        <li>What tools does it need?</li>
                        <li>What are the success criteria?</li>
                    </ul>

                    <h3>Example: Research Agent</h3>
                    <pre><code>Purpose: Help users research topics by searching and summarizing
Users: Product managers, researchers
Tools Needed:
  - Web search
  - Wikipedia search
  - Document summarization
Success: Accurate, cited summaries in < 30 seconds
</code></pre>

                    <h3>Agent Design Template</h3>
                    <p>Use this template to plan your agent:</p>
                    <pre><code>1. Agent Name: [descriptive name]
2. Purpose: [one sentence]
3. Input: [what user provides]
4. Output: [what agent returns]
5. Tools: [list of required tools]
6. Constraints: [limits, safety requirements]
7. Error Handling: [how to handle failures]
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/getting-started.html" target="_blank">Getting Started with Strands</a></li>
                        <li><a href="https://github.com/strands-agents/sdk-python/tree/main/examples" target="_blank">Strands Example Projects</a></li>
                    </ul>
                `
            },
            {
                id: "m6-l2",
                title: "Implementing Your Agent",
                content: `
                    <h3>Step-by-Step Implementation</h3>
                    <p>Follow this process to build your agent:</p>

                    <h4>1. Set Up Project</h4>
                    <pre><code>mkdir my-agent && cd my-agent
python -m venv venv
source venv/bin/activate
pip install strands-agents python-dotenv requests
</code></pre>

                    <h4>2. Create Tools</h4>
                    <pre><code># tools/search.py
from strands import tool
import requests

@tool
def search_web(query: str) -> str:
    """Search the web for information."""
    # Implementation
    return f"Search results for: {query}"
</code></pre>

                    <h4>3. Build the Agent</h4>
                    <pre><code># agent.py
from strands import Agent
from tools.search import search_web

agent = Agent(
    model="claude-4-sonnet",
    system_prompt="You are a research assistant",
    tools=[search_web]
)

if __name__ == "__main__":
    query = input("What would you like to research? ")
    response = agent.run(query)
    print(response)
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://aws.github.io/bedrock-agentcore-starter-toolkit/user-guide/runtime/quickstart.html" target="_blank">AgentCore Quickstart</a></li>
                    </ul>
                `
            }
        ],
        quiz: [
            {
                question: "What is the first step in building an agent?",
                options: [
                    "Write code immediately",
                    "Define the agent's purpose and requirements",
                    "Deploy to production",
                    "Buy AWS credits"
                ],
                correct: 1
            }
        ]
    },
    {
        id: 7,
        title: "Module 7: Enterprise Patterns & Best Practices",
        priority: "nice-to-know",
        estimatedHours: 3,
        description: "Learn production best practices for error handling, logging, cost optimization, and security.",
        lessons: [
            {
                id: "m7-l1",
                title: "Production Best Practices",
                content: `
                    <h3>Key Enterprise Considerations</h3>
                    <ul>
                        <li><strong>Error Handling</strong>: Graceful degradation and retry logic</li>
                        <li><strong>Logging</strong>: CloudWatch integration for monitoring</li>
                        <li><strong>Cost Optimization</strong>: Token management and caching</li>
                        <li><strong>Security</strong>: IAM roles, VPC endpoints, encryption</li>
                        <li><strong>Scalability</strong>: Auto-scaling and rate limiting</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/best-practices.html" target="_blank">AgentCore Best Practices</a></li>
                        <li><a href="https://aws.amazon.com/blogs/machine-learning/strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability/" target="_blank">Observability Deep Dive</a></li>
                    </ul>
                `
            }
        ],
        quiz: []
    },
    {
        id: 8,
        title: "Module 8: Advanced AgentCore Features",
        priority: "nice-to-know",
        estimatedHours: 3,
        description: "Explore multi-agent systems, custom memory, streaming responses, and advanced guardrails.",
        lessons: [
            {
                id: "m8-l1",
                title: "Advanced Features Overview",
                content: `
                    <h3>Advanced Topics</h3>
                    <ul>
                        <li><strong>Multi-Agent Orchestration</strong>: Coordinating multiple specialized agents</li>
                        <li><strong>Custom Memory</strong>: Building domain-specific memory systems</li>
                        <li><strong>Streaming Responses</strong>: Real-time token-by-token responses</li>
                        <li><strong>Advanced Guardrails</strong>: Custom policy enforcement</li>
                    </ul>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://aws.amazon.com/blogs/opensource/introducing-strands-agents-1-0-production-ready-multi-agent-orchestration-made-simple/" target="_blank">Multi-Agent Orchestration</a></li>
                        <li><a href="https://strandsagents.com/latest/documentation/docs/advanced.html" target="_blank">Strands Advanced Features</a></li>
                    </ul>
                `
            }
        ],
        quiz: []
    },
    {
        id: 9,
        title: "Module 9: Pre-Bootcamp Capstone Project",
        priority: "must-know",
        estimatedHours: 4,
        description: "Build a complete AI agent as your capstone project to validate your bootcamp readiness.",
        lessons: [
            {
                id: "m9-l1",
                title: "Capstone Project: Build a Complete Agent",
                content: `
                    <h3>Project Goal</h3>
                    <p>Build a fully functional AI agent that demonstrates your understanding of:</p>
                    <ul>
                        <li>Agent creation with Strands SDK</li>
                        <li>Tool definition and integration</li>
                        <li>Error handling and testing</li>
                        <li>Best practices</li>
                    </ul>

                    <h3>Suggested Projects</h3>
                    <ol>
                        <li><strong>Research Assistant</strong>: Searches web, summarizes findings, cites sources</li>
                        <li><strong>Data Analyst Agent</strong>: Queries APIs, analyzes data, creates reports</li>
                        <li><strong>DevOps Helper</strong>: Checks system status, suggests fixes, runs diagnostics</li>
                        <li><strong>Your Own Idea</strong>: Build something relevant to your work!</li>
                    </ol>

                    <h3>Evaluation Checklist</h3>
                    <pre><code>✓ Agent has clear purpose
✓ Uses at least 2 custom tools
✓ Includes error handling
✓ Has system prompt
✓ Tested with multiple scenarios
✓ Code is well-documented
✓ Ready to demo at bootcamp!
</code></pre>

                    <h3>Official Resources</h3>
                    <ul>
                        <li><a href="https://github.com/awslabs/amazon-bedrock-agentcore-samples" target="_blank">AgentCore Sample Projects</a></li>
                        <li><a href="https://github.com/strands-agents/sdk-python/tree/main/examples" target="_blank">Strands SDK Examples</a></li>
                    </ul>
                `
            },
            {
                id: "m9-l2",
                title: "Bootcamp Preparation Checklist",
                content: `
                    <h3>Technical Setup ✓</h3>
                    <ul>
                        <li>Python 3.9+ installed</li>
                        <li>AWS CLI configured</li>
                        <li>Strands SDK installed</li>
                        <li>Code editor ready (VS Code/Cursor)</li>
                        <li>Bedrock model access granted</li>
                    </ul>

                    <h3>Knowledge Checklist ✓</h3>
                    <ul>
                        <li>Python decorators (@tool)</li>
                        <li>Async/await basics</li>
                        <li>Agent creation with Strands</li>
                        <li>Tool definition</li>
                        <li>Understanding of ReAct pattern</li>
                        <li>AWS IAM basics</li>
                        <li>AgentCore 7 services overview</li>
                    </ul>

                    <h3>What to Bring</h3>
                    <ul>
                        <li>Laptop with development environment</li>
                        <li>AWS credentials</li>
                        <li>Questions and curiosity!</li>
                        <li>Your capstone project code (to show off!)</li>
                    </ul>

                    <h3>Day-Of Tips</h3>
                    <ul>
                        <li>Arrive early to set up</li>
                        <li>Test AWS access beforehand</li>
                        <li>Have your capstone project ready to demo</li>
                        <li>Network with other attendees</li>
                        <li>Ask questions - instructors are there to help!</li>
                    </ul>

                    <p><strong>Target Readiness Score: 75%+</strong></p>
                    <p>You've got this! See you at the bootcamp! 🚀</p>
                `
            }
        ],
        quiz: [
            {
                question: "What is the minimum recommended readiness score for the bootcamp?",
                options: ["50%", "60%", "75%", "100%"],
                correct: 2
            }
        ]
    }
];

// Resources Data
const RESOURCES = {
    audio: [
        {
            title: "AWS re:Invent AgentCore Bootcamp (YouTube)",
            description: "The actual bootcamp recording - watch to see exactly what you'll be doing",
            url: "https://www.youtube.com/live/wzIQDPFQx30",
            duration: "~2 hours",
            priority: "must-listen"
        },
        {
            title: "Introducing Strands Agents (AWS Podcast)",
            description: "Overview of Strands SDK and its philosophy",
            url: "https://aws.amazon.com/blogs/opensource/introducing-strands-agents-an-open-source-ai-agents-sdk/",
            duration: "20 min read / TTS",
            priority: "must-listen"
        },
        {
            title: "Amazon Bedrock AgentCore Announcement",
            description: "Understanding the AgentCore platform and its services",
            url: "https://aws.amazon.com/blogs/aws/introducing-amazon-bedrock-agentcore-securely-deploy-and-operate-ai-agents-at-any-scale/",
            duration: "15 min read / TTS",
            priority: "must-listen"
        },
        {
            title: "AI Agents Explained (Lex Fridman Podcast)",
            description: "Deep dive into AI agent concepts and future",
            url: "https://www.youtube.com/watch?v=search",
            duration: "2 hours",
            priority: "nice-to-have"
        }
    ],
    documentation: [
        {
            title: "Strands SDK Documentation",
            description: "Official Strands documentation - comprehensive guide",
            url: "https://strandsagents.com/latest/documentation/docs/",
            type: "Official Docs"
        },
        {
            title: "Amazon Bedrock AgentCore Developer Guide",
            description: "Complete guide to AgentCore services and APIs",
            url: "https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/",
            type: "Official Docs"
        },
        {
            title: "AgentCore Starter Toolkit",
            description: "CLI tool and examples for quick start",
            url: "https://aws.github.io/bedrock-agentcore-starter-toolkit/",
            type: "Getting Started"
        },
        {
            title: "Python Documentation",
            description: "Official Python docs - reference for language features",
            url: "https://docs.python.org/3/",
            type: "Language Reference"
        },
        {
            title: "AWS Bedrock Documentation",
            description: "Understanding Amazon Bedrock and foundation models",
            url: "https://docs.aws.amazon.com/bedrock/",
            type: "Official Docs"
        }
    ],
    tutorials: [
        {
            title: "Deploy AI Agent with AgentCore (FreeCodeCamp)",
            description: "Step-by-step tutorial for deploying your first agent",
            url: "https://www.freecodecamp.org/news/deploy-an-ai-agent-with-amazon-bedrock",
            level: "Beginner"
        },
        {
            title: "Strands Agents Technical Deep Dive",
            description: "Agent architectures and observability",
            url: "https://aws.amazon.com/blogs/machine-learning/strands-agents-sdk-a-technical-deep-dive-into-agent-architectures-and-observability/",
            level: "Advanced"
        },
        {
            title: "AgentCore Runtime Quickstart",
            description: "Getting started with AgentCore runtime",
            url: "https://aws.github.io/bedrock-agentcore-starter-toolkit/user-guide/runtime/quickstart.html",
            level: "Beginner"
        },
        {
            title: "Testing Strands Agents SDK (Medium)",
            description: "Hands-on testing and deployment guide",
            url: "https://heeki.medium.com/testing-and-deploying-the-new-strands-agents-python-sdk-e3d3dc83e917",
            level: "Intermediate"
        },
        {
            title: "Building Multi-Agent Systems",
            description: "Advanced patterns for agent orchestration",
            url: "https://aws.amazon.com/blogs/opensource/introducing-strands-agents-1-0-production-ready-multi-agent-orchestration-made-simple/",
            level: "Advanced"
        }
    ],
    tools: [
        {
            title: "AI Assistant Prompt: Understanding Python Code",
            description: "Use this with Cursor/Kiro: 'Explain this Python code in simple terms, focusing on what a product manager needs to understand about how it works'",
            type: "Prompt Template"
        },
        {
            title: "AI Assistant Prompt: Building a Tool",
            description: "Use this: 'Help me create a Strands SDK tool that [does X]. Include type hints, docstring, and error handling. Explain each part.'",
            type: "Prompt Template"
        },
        {
            title: "AI Assistant Prompt: Debugging Agent",
            description: "Use this: 'My agent is [problem]. Here's my code: [paste]. Help me debug and explain what's wrong in simple terms.'",
            type: "Prompt Template"
        },
        {
            title: "AI Assistant Prompt: Learning Concepts",
            description: "Use this: 'Explain [concept] as if I'm a product manager with limited coding background. Use simple analogies and examples.'",
            type: "Prompt Template"
        },
        {
            title: "Strands SDK GitHub Repository",
            description: "Browse examples and source code",
            url: "https://github.com/strands-agents/sdk-python",
            type: "Code Repository"
        },
        {
            title: "AgentCore Samples Repository",
            description: "Sample agents and patterns",
            url: "https://github.com/awslabs/amazon-bedrock-agentcore-samples",
            type: "Code Repository"
        }
    ]
};

// Bootcamp date (December 2, 2025)
const BOOTCAMP_DATE = new Date('2025-12-02T09:00:00');
