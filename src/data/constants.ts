// thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "py",//1
  SQL = "sql",//2
  RAG = "rag",//21
  PANDAS = "pandas",//7
  NUMPY = "numpy",//8
  MATPLOTLIB = "matplotlib",//9
  SKLEARN = "sklearn",//13
  TENSORFLOW = "tensorflow",//14
  PYTORCH = "pytorch",//15
  NLP = "nlp",//19
  LLM = "llm",//20
  LANGCHAIN = "langchain",//22
  OPENCV = "opencv",//16
  MEDIAPIPE = "mediapipe",//17
  SQLITE = "sqlite",//3
  SQLALCHEMY = "sqlalchemy",//4
  POWERBI = "powerbi",//10
  HUGGINGFACE = "huggingface",//23
  GIT = "git",//5
  GITHUB = "github",//6
  VSCODE = "vscode",//18
  JUPYTER = "jupyter",//11
  STREAMLIT = "streamlit",//12
  DOCKER = "docker",//24
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "Python",
    shortDescription: "My go-to for analysis — Pandas, NumPy and Scikit-learn 🐍📊",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.SQL]: {
    id: 2,
    name: "sql",
    label: "SQL",
    shortDescription: "MySQL and Google BigQuery — querying, joining and building scorecards 🗄️💡",
    color: "#e38c00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.RAG]: {
    id: 3,
    name: "rag",
    label: "RAG",
    shortDescription: "On my learning list — exploring GenAI retrieval pipelines 🔍🌱",
    color: "#ff6c37",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/huggingface.svg",
  },
  [SkillNames.PANDAS]: {
    id: 4,
    name: "pandas",
    label: "Pandas",
    shortDescription: "Data cleaning, EDA and feature engineering on real-world datasets 🐼🧹",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.NUMPY]: {
    id: 5,
    name: "numpy",
    label: "NumPy",
    shortDescription: "Fast numerical crunching behind every analysis ⚡🔢",
    color: "#4dabcf",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.MATPLOTLIB]: {
    id: 6,
    name: "matplotlib",
    label: "Matplotlib",
    shortDescription: "On my learning list — sharpening my Python plotting 📈🌱",
    color: "#11557c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  [SkillNames.SKLEARN]: {
    id: 7,
    name: "sklearn",
    label: "Scikit-learn",
    shortDescription: "Logistic Regression, Random Forest and Decision Trees for predictive modeling 🌲🤖",
    color: "#f7931e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  [SkillNames.TENSORFLOW]: {
    id: 8,
    name: "tensorflow",
    label: "TensorFlow",
    shortDescription: "On my learning list — stepping into deep learning 🧠🌱",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.PYTORCH]: {
    id: 9,
    name: "pytorch",
    label: "PyTorch",
    shortDescription: "On my learning list — exploring neural networks 🔥🌱",
    color: "#ee4c2c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
  },
  [SkillNames.NLP]: {
    id: 10,
    name: "nlp",
    label: "NLP",
    shortDescription: "On my learning list — teaching machines to read text 🗣️🌱",
    color: "#7c3aed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.LLM]: {
    id: 11,
    name: "llm",
    label: "LLM",
    shortDescription: "On my learning list — GenAI and large language models ✨🌱",
    color: "#059669",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.LANGCHAIN]: {
    id: 12,
    name: "langchain",
    label: "LangChain",
    shortDescription: "On my learning list — LLM chains and workflows 🦜🌱",
    color: "#13aa52",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/langchain.svg",
  },
  [SkillNames.OPENCV]: {
    id: 13,
    name: "opencv",
    label: "OpenCV",
    shortDescription: "On my learning list — computer vision basics 👁️🌱",
    color: "#5c3ee8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.MEDIAPIPE]: {
    id: 14,
    name: "mediapipe",
    label: "MediaPipe",
    shortDescription: "On my learning list — real-time ML pipelines 🖐️🌱",
    color: "#00bcd4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
  [SkillNames.SQLITE]: {
    id: 15,
    name: "sqlite",
    label: "SQLite",
    shortDescription: "On my learning list — lightweight local databases 🗃️🌱",
    color: "#003b57",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
  },
  [SkillNames.SQLALCHEMY]: {
    id: 16,
    name: "sqlalchemy",
    label: "SQLAlchemy",
    shortDescription: "On my learning list — Python ORMs for data pipelines 🔗🌱",
    color: "#d71f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
  },
  [SkillNames.POWERBI]: {
    id: 17,
    name: "powerbi",
    label: "Power BI",
    shortDescription: "DAX, Power Query and KPI dashboards that drive decisions 📊💼",
    color: "#f2c811",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/powerbi.svg",
  },
  [SkillNames.HUGGINGFACE]: {
    id: 18,
    name: "huggingface",
    label: "Hugging Face",
    shortDescription: "On my learning list — open-source models and datasets 🤗🌱",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/huggingface.svg",
  },
  [SkillNames.GIT]: {
    id: 19,
    name: "git",
    label: "Git",
    shortDescription: "Version control keeping every analysis reproducible 🔄🛡️",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 20,
    name: "github",
    label: "GitHub",
    shortDescription: "Where my projects and notebooks live 🐙💻",
    color: "#ffffff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 21,
    name: "vscode",
    label: "VS Code",
    shortDescription: "My everyday editor for Python and SQL ⚡🖥️",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.JUPYTER]: {
    id: 22,
    name: "jupyter",
    label: "Jupyter",
    shortDescription: "Where exploration, EDA and data storytelling happen 📓🔍",
    color: "#f37626",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  },
  [SkillNames.STREAMLIT]: {
    id: 23,
    name: "streamlit",
    label: "Streamlit",
    shortDescription: "On my learning list — turning models into quick web apps 🚀🌱",
    color: "#ff4b4b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 24,
    name: "docker",
    label: "Docker",
    shortDescription: "On my learning list — containerising data workflows 🐳🌱",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
};
  export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "90-Hour Program",
    endDate: "",
    title: "Applied Industry Project — Sales, Revenue & Business Performance Trend Analysis",
    company: "TCS iON",
    description: [
      "Delivered executive-ready Power BI dashboards visualizing sales trends, revenue KPIs, and performance benchmarks across business units.",
      "Executed end-to-end data cleaning, transformation, and analysis on transactional datasets to uncover performance gaps and revenue opportunities.",
      "Benchmarked business metrics against targets and presented structured recommendations that improved measurable operational outcomes.",
    ],
    skills: [SkillNames.POWERBI],
  },
  {
    id: 2,
    startDate: "2025",
    endDate: "",
    title: "Hackathon Participant",
    company: "GETWORK · LEAD College",
    description: [
      "Developed two functional prototypes — Smart Token & Queue Management and DeviceTrack — within a 48-hour hackathon addressing healthcare and enterprise asset management challenges.",
      "Collaborated in a cross-functional team of four to design, build, and present working solutions under strict deadlines, advancing to the final evaluation round.",
    ],
    skills: [SkillNames.PYTHON, SkillNames.GIT, SkillNames.GITHUB, SkillNames.VSCODE],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};