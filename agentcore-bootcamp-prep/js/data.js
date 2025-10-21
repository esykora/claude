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
                    <p>Your progress is saved automatically using GitHub Gist. Click "Sync with GitHub" to:</p>
                    <ul>
                        <li>Save your progress to the cloud</li>
                        <li>Access your progress from any device</li>
                        <li>Backup your learning history</li>
                    </ul>

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
    }
];

// Note: Modules 3-9 follow the same structure with lessons and quizzes
// They cover: AWS/Bedrock basics, AgentCore services, Strands SDK,
// building first agent, enterprise patterns, advanced features, and capstone project
// For MVP, we'll render these as "coming soon" with curated external resources

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

// Bootcamp date (first Tuesday of December 2024)
const BOOTCAMP_DATE = new Date('2024-12-03T09:00:00');
