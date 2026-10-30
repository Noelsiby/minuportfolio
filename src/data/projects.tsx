import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, src: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={src} title={title} />,
});

const PROJECT_SKILLS = {
  python: brand("Python", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"),
  pandas: brand("Pandas", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg"),
  numpy: brand("NumPy", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"),
  sklearn: brand("Scikit-learn", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg"),
  tensorflow: brand("TensorFlow", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"),
  pytorch: brand("PyTorch", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"),
  opencv: brand("OpenCV", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"),
  streamlit: brand("Streamlit", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/streamlit/streamlit-original.svg"),
  sqlite: brand("SQLite", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"),
  jupyter: brand("Jupyter", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg"),
  git: brand("Git", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"),
  github: brand("GitHub", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"),
  powerbi: {
    title: "Power BI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PBI</span>,
  },
  mediapipe: {
    title: "MediaPipe",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MP</span>,
  },
  sqlalchemy: {
    title: "SQLAlchemy",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SA</span>,
  },
  sql: brand("SQL", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"),
  excel: {
    title: "Excel",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">XL</span>,
  },
  html: brand("HTML", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"),
  css: brand("CSS", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"),
  js: brand("JavaScript", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "churn-prediction",
    category: "Machine Learning",
    title: "Customer Churn Prediction & Retention Intelligence",
    src: "/assets/projects-screenshots/churn/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.jupyter],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.pandas,
        PROJECT_SKILLS.sklearn,
      ],
    },
    live: "#",
    github: "https://github.com/minumukeshk",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Predicting telecom churn and turning it into a retention playbook.
          </TypographyP>
          <TypographyP className="font-mono">
            Analyzed 7,043 telecom customer records to identify the key drivers
            of churn, enabling targeted retention campaigns for high-value
            customer segments.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Churn Prediction Model</TypographyH3>
          <p className="font-mono mb-2">
            Built a classification model using Logistic Regression and Random
            Forest, achieving 80% accuracy and 76% recall to support proactive
            churn prevention.
          </p>

          <TypographyH3 className="my-4 mt-8">Retention Intelligence Dashboard</TypographyH3>
          <p className="font-mono mb-2">
            Developed an interactive Power BI dashboard tracking churn risk,
            contract mix, and revenue exposure for segment-level
            decision-making.
          </p>

          <SlideShow images={[`${BASE_PATH}/churn/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "retail-revenue-margin",
    category: "Data Analytics",
    title: "Retail Revenue & Margin Performance Analysis",
    src: "/assets/projects-screenshots/retail/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.excel],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sql],
    },
    live: "#",
    github: "https://github.com/minumukeshk",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Automated reporting and Pareto insights for pricing and margin strategy.
          </TypographyP>
          <TypographyP className="font-mono">
            An end-to-end analysis of retail revenue and margins — from
            automated data pipelines to regional performance scorecards for
            management review.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Automated ETL Workflows</TypographyH3>
          <p className="font-mono mb-2">
            Automated Python-based ETL workflows, reducing manual reporting
            effort by over 70% and establishing a reliable weekly data
            pipeline.
          </p>

          <TypographyH3 className="my-4 mt-8">Pareto Analysis</TypographyH3>
          <p className="font-mono mb-2">
            Applied Pareto analysis revealing that the top 20% of products
            generated 80% of total revenue, informing pricing and margin
            strategy.
          </p>

          <TypographyH3 className="my-4 mt-8">Regional Scorecards</TypographyH3>
          <p className="font-mono mb-2">
            Designed SQL-based regional scorecards to benchmark market
            performance and flag underperforming territories for management
            review.
          </p>

          <SlideShow images={[`${BASE_PATH}/retail/landing.png`]} />
        </div>
      );
    },
  },
  {
    id: "sales-performance-tcs-ion",
    category: "Business Intelligence",
    title: "Sales, Revenue & Business Performance Trend Analysis",
    src: "/assets/projects-screenshots/sales/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.powerbi, PROJECT_SKILLS.excel],
      backend: [],
    },
    live: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            TCS iON Applied Industry Project (90 Hours).
          </TypographyP>
          <TypographyP className="font-mono">
            Executive-ready business performance analysis built on
            transactional datasets using Excel and Power BI. Cert. ID:
            1543-29533249-1016.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Executive Dashboards</TypographyH3>
          <p className="font-mono mb-2">
            Delivered executive-ready Power BI dashboards visualizing sales
            trends, revenue KPIs, and performance benchmarks across business
            units.
          </p>

          <TypographyH3 className="my-4 mt-8">Data Cleaning &amp; Analysis</TypographyH3>
          <p className="font-mono mb-2">
            Executed end-to-end data cleaning, transformation, and analysis on
            transactional datasets to uncover performance gaps and revenue
            opportunities.
          </p>

          <TypographyH3 className="my-4 mt-8">Recommendations</TypographyH3>
          <p className="font-mono mb-2">
            Benchmarked business metrics against targets and presented
            structured recommendations that improved measurable operational
            outcomes.
          </p>

          <SlideShow images={[`${BASE_PATH}/sales/landing.png`]} />
        </div>
      );
    },
  },
];

export default projects;
