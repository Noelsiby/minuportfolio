const config = {
  title: "Minu Mukesh K | Data Analyst",
  description: {
    long: "Explore the portfolio of Minu Mukesh K, an MCA candidate and Data Analyst specializing in Business Intelligence, Python, SQL, Power BI and AWS cloud analytics. Discover projects including Customer Churn Prediction & Retention Intelligence, Retail Revenue & Margin Performance Analysis, and the TCS iON Sales, Revenue & Business Performance Trend Analysis.",
    short:
      "Discover the portfolio of Minu Mukesh K, a Data Analyst and BI Analyst turning data into actionable business insights.",
  },
  keywords: [
    "Minu Mukesh K",
    "portfolio",
    "Data Analyst",
    "Business Intelligence Analyst",
    "Python Developer",
    "Python",
    "SQL",
    "Power BI",
    "DAX",
    "Power Query",
    "MySQL",
    "Google BigQuery",
    "AWS",
    "Machine Learning",
    "Churn Prediction",
    "ETL",
    "Pandas",
    "Scikit-learn",
  ],
  author: "Minu Mukesh",
  email: "minumukeshk@gmail.com",
  site: "https://minuportfolio.vercel.app",

  // for github stars button
  githubUsername: "Noelsiby",
  githubRepo: "minuportfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-minu.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/minumukesh",
    github: "https://github.com/minumukeshk",
  },
};
export { config };
