import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";

import SectionWrapper from "../ui/section-wrapper";
import HeroPortrait from "../hero-portrait";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      <div className="grid md:grid-cols-2">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pb-16 md:p-20 lg:p-24 xl:p-28"
          )}
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-medium text-xs sm:text-sm uppercase tracking-[0.35em]",
                      "text-[#b76e79] dark:text-[#e8b4a0] cursor-default whitespace-nowrap"
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[4px] mt-2 leading-[0.95] text-foreground text-left",
                          "font-semibold text-7xl md:text-7xl lg:text-8xl xl:text-9xl",
                          "cursor-default font-display tracking-tight"
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hiidden" />
                        <span className="italic font-normal text-rose-gold pr-3">
                          {config.author.split(" ")[1]}
                        </span>
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                {/* <div className="md:block hidden bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 w-screen h-px animate-fade-right animate-glow" /> */}
                <BlurIn delay={1.2}>
                  <p
                    className={cn(
                      "md:self-start mt-4 md:mt-6 font-medium text-md text-muted-foreground",
                      "cursor-default sm:text-xl md:text-xl whitespace-nowrap"
                    )}
                  >
                    Data Analyst <span className="text-[#b76e79] dark:text-[#e8b4a0]">✦</span> BI Analyst
                  </p>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <Link
                  href={
                    "/Minu_Mukesh_Resume.pdf"
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%" >
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      <p>Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={`mailto:${config.email}`}
                    >
                      <Button variant={"outline"}>
                        <SiGmail size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:hidden mt-8">
                <HeroPortrait compact />
              </div>
            </div>
          )}
        </div>
        <div className="hidden md:flex col-span-1 items-center justify-center z-[2] pt-16">
          {!isLoading && <HeroPortrait />}
        </div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
