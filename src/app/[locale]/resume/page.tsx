"use client";

import Link from "next/link";
import style from "@/styles/resume.module.scss";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { DownloadIcon } from "@/components/icons/Download";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { EmailIcon } from "@/components/icons/EmailIcon";

const getRequestOptions = (locale: string) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ locale: locale }),
});

// TODO: Translate page
const Resume = ({ params }: { params: { locale: string } }) => {
  const { locale } = params;

  const generateResume = async () => {
    //OBS: Para testar a msg de erro, basta alterar o locale aqui para qualquer coisa diferente de "en" e "pt_br"
    const reqOptions = getRequestOptions(locale);
    //TODO: Alterar o URL para o servidor local
    const response = await fetch("http://localhost:3500/generate-pdf", reqOptions);

    if (!response.ok) {
      //TODO: Exibir mensagem de erro
      throw new Error("Failed to fetch resume");
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
    URL.revokeObjectURL(url);
  };

  return (
    <div id="resume-container" className={style.container}>
      <ul id="links" className={style.links}>
        <li>
          <Link
            href={"https://www.linkedin.com/in/isaque-d-moreira-578697191/"}
            title="My LinkedIn Profile"
            target="_blank"
          >
            <LinkedinIcon className={`${style.linkedinIcon}`} />
          </Link>
        </li>
        <li>
          <Link
            href={"https://github.com/harry-fruit"}
            title="My Github Profile"
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </li>
        <li title="Send me an e-mail">
          <Link href="mailto:isaqueduarte17@gmail.com">
            <EmailIcon width="20" height="20" />
          </Link>
        </li>
        <li
          id="download-resume"
          title="Download Resume"
          onClick={generateResume}
        >
          <DownloadIcon width="20" height="20" />
        </li>
      </ul>
      <aside className={style.aside}>
        <div id="more-info" className={style.moreInfo}>
          <Link
            href={"/"}
            className={`${style.primaryColor} font-bold`}
          >
            Isaque | Portfolio
          </Link>
          <p>São Paulo, Brazil</p>
        </div>
        <div className={style.skillsContainer}>
          <div className={style.skills}>
            <h2 className={`${style.primaryColor}`}>Core Skills</h2>
            <ul>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React.js</li>
              <li>Next.js</li>
              <li>Vue.js</li>
              <li>SQL</li>
              <li>Node.js</li>
              <li>Python</li>
              <li>Sass</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className={style.skills}>
            <h2 className={`${style.primaryColor}`}>Others</h2>
            <ul>
              <li className="xl:w-1/2">Design Systems</li>
              <li>Responsive Web Design</li>
              <li>Performance Optimization</li>
              <li>ETL Process</li>
              <li>Clean Code</li>
              <li>Git</li>
              <li>Rest API</li>
            </ul>
          </div>
        </div>
      </aside>
      <section id="introduction" className={style.introduction}>
        <h1 className={`${style.primaryColor}`}>Isaque Duarte</h1>
        <h3>Fullstack Developer</h3>
        <p>
          Passionate about creating web solutions and enthusiastic about AI,
          always exploring new ways to innovate and improve processes
        </p>
      </section>
      <section id="experiences" className={style.experiences}>
        <div className={style.experiencesHeader}>
          <h2 className={`${style.sectionTitle} ${style.primaryColor}`}>
            Experiences
          </h2>
          <p>
            Ive worked on a handful of web projects over the years, some of
            which were for the following organizations: TODOTODO
          </p>
        </div>
        <div className={style.experienceItemsWrapper}>
          <div className={style.experienceItem}>
            <div className={style.experienceHeader}>
              <p>
                <span className={`${style.companyName} ${style.primaryColor}`}>
                  Pollux{" "}
                </span>
                <span className={style.role}>― Full Stack Developer</span>
              </p>
              <p className={style.period}>March/Jun 2021</p>
            </div>
            <p className={style.description}>
              Breve descrição do serviço max 150 linhas
            </p>
            <ul>
              <li>
                Criação de funcionalidades e realização de suporte a aplicações
                front-end com React.js, Next.js, Gatsby.js e outras tecnologias
              </li>
              <li>
                Criação de funcionalidades e realização de suporte a aplicações
                back-end com Node.js, Express.js, Koa.js, Nest.js.
              </li>
              <li>Controle de versão com Git</li>
              <li>
                Utilização de serviços AWS, como p.e: AWS EC2, AWS SES e AWS
                Lambda
              </li>
            </ul>
          </div>
          <div className={style.experienceItem}>
            <div className={style.experienceHeader}>
              <p>
                <span className={`${style.companyName} ${style.primaryColor}`}>
                  4MapIT{" "}
                </span>
                <span className={style.role}>― Analista de Sistemas</span>
              </p>
              <p className={style.period}>Jan 2022 - Present</p>
            </div>
            <p className={style.description}>
              Breve descrição do serviço max 150 linhas
            </p>
            <ul>
              <li>
                Criação de funcionalidades e realização de suporte a
                funciondades existentes em front-end jQuery
              </li>
              <li>Desenvolvimento de APIs REST com Node.js</li>
              <li>
                Grande foco em desenvolvimento de estruturas e processos com
                banco de dados relacionais (SQL Server)
              </li>
              <li>Análise de requisitos e modelagem de sistemas</li>
              <li>Criação de processos de automação</li>
              <li>
                Criação de processos de ETL (Extract, Transform, Load) com
                Python e SQL Server
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="projects" className={style.projects}>
        <h2 className={`${style.sectionTitle} ${style.primaryColor}`}>
          Projects
        </h2>
        <p>
          Links to some of my work can be found on isaquedev/projects and
          details can be provided upon request via a scheduled demo call.
        </p>
      </section>
    </div>
  );
};
export default Resume;
