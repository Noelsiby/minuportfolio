import React from "react";
import { SectionHeader } from "./section-header";
import SectionWrapper from "../ui/section-wrapper";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { GraduationCap, Award, Wrench } from "lucide-react";

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    period: "2025 - Present",
    school: "LEAD College (Autonomous), Palakkad, Kerala",
  },
  {
    degree: "B.Sc. Computer Science",
    period: "2022 - 2025",
    school: "Little Flower College (Autonomous), Guruvayur, Kerala",
  },
];

const CORE_SKILLS = [
  { name: "Python", dot: "bg-blue-500" },
  { name: "SQL", dot: "bg-amber-500" },
  { name: "Power BI (DAX, Power Query)", dot: "bg-yellow-400" },
  { name: "MySQL", dot: "bg-sky-500" },
  { name: "Google BigQuery", dot: "bg-indigo-500" },
  { name: "Scikit-learn", dot: "bg-orange-500" },
  { name: "FastAPI", dot: "bg-teal-500" },
  { name: "MongoDB", dot: "bg-emerald-500" },
  { name: "AWS Analytics", dot: "bg-orange-400" },
  { name: "Statistical Analysis", dot: "bg-pink-500" },
];

const MS = "border-blue-500/30 bg-blue-500/10 text-blue-400";
const IBM = "border-indigo-500/30 bg-indigo-500/10 text-indigo-400";
const AWS = "border-amber-500/30 bg-amber-500/10 text-amber-400";
const TCS = "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";

const CERTIFICATIONS = [
  {
    title: "Unlock the Power of Data with Power BI",
    issuer: "Microsoft",
    badge: MS,
    desc: "Building data models, DAX measures and interactive Power BI reports.",
  },
  {
    title: "Introduction to Data Analytics",
    issuer: "IBM",
    badge: IBM,
    desc: "The data analysis lifecycle, roles in the data ecosystem, and core analytics tools.",
  },
  {
    title: "Data Fundamentals",
    issuer: "IBM",
    badge: IBM,
    desc: "Foundations of data literacy, data types, and working with structured data.",
  },
  {
    title: "Fundamentals of Analytics on AWS, Part 1 & 2",
    issuer: "AWS",
    badge: AWS,
    desc: "Cloud analytics concepts and the AWS services used to collect, store and analyze data.",
  },
  {
    title: "AWS Glue & Amazon Redshift Getting Started",
    issuer: "AWS",
    badge: AWS,
    desc: "Serverless ETL with AWS Glue and data warehousing with Amazon Redshift.",
  },
  {
    title: "Applied Industry Project (90 Hrs)",
    issuer: "TCS iON",
    badge: TCS,
    desc: "Sales, Revenue & Business Performance Trend Analysis using Excel and Power BI.",
  },
];

const EducationCertificationsSection = () => {
  return (
    <SectionWrapper
      className="flex flex-col items-center justify-center min-h-[100vh] py-20 z-10"
    >
      <div className="w-full max-w-5xl px-4 md:px-8 mx-auto">
        <SectionHeader
          id="credentials"
          title="Credentials"
          desc="My academic foundation, professional certifications, and core toolkit."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          {/* Left Column: Education & Core Skills (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 w-full">
            {/* Education Card */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 text-foreground mb-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Education
              </h3>
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card text-card-foreground border-border hover:border-primary/20 transition-all duration-300 shadow-sm">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle className="text-lg font-bold tracking-tight">
                          {edu.degree}
                        </CardTitle>
                        <Badge variant="secondary" className="font-mono text-[10px] font-normal whitespace-nowrap">
                          {edu.period}
                        </Badge>
                      </div>
                      <div className="text-sm font-medium text-muted-foreground mt-1">
                        {edu.school}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Core Skills Card */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center gap-2 text-foreground mb-2">
                <Wrench className="w-5 h-5 text-primary" />
                Core Skills
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card text-card-foreground border-border hover:border-primary/20 transition-all duration-300 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap gap-3">
                      {CORE_SKILLS.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-secondary/20 hover:border-primary/30 transition-colors"
                        >
                          <span className={cn("w-2 h-2 rounded-full", skill.dot)} />
                          <span className="text-sm font-medium">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Certifications (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            <h3 className="text-xl font-bold flex items-center gap-2 text-foreground mb-2">
              <Award className="w-5 h-5 text-primary" />
              Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card text-card-foreground border-border hover:border-primary/20 transition-all duration-300 shadow-sm h-full flex flex-col">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-base font-bold tracking-tight">
                          {cert.title}
                        </CardTitle>
                        <Badge variant="outline" className={cn("text-[9px] font-mono font-normal", cert.badge)}>
                          {cert.issuer}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-1 flex-1 text-xs text-muted-foreground leading-relaxed">
                      {cert.desc}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationCertificationsSection;
