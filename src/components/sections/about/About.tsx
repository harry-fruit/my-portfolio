import Image from "next/image";
import style from "@/styles/about.module.scss";
import { LineSplit } from "@/components/shared/LineSplit";
import { FadeIn } from "@/components/shared/FadeIn";

export const About: React.FC = (): JSX.Element => {
  return (
    <FadeIn>
      <section
        id={"about"}
        className={`w-full min-h-screen py-12 px-2 md:px-6 md:py-4 md:min-h-[80vh] lg:min-h-[55vh] lg:py-28 lg:px-20 xl:px-36 xl:py-44 2xl:min-h-[80vh] 2xl:px-64 2xl:py-52 ${style.aboutContainer}`}
      >
        <div
          id="header-wrapper"
          className={`${style.header} flex flex-col justify-center items-center relative`}
        >
          <h2 className="text-3xl w-full text-center md:text-start font-bold text-gray-800 dark:text-gray-50 text-primary-gradient apply-dark">
            Olá! Eu sou Isaque.
          </h2>
          <h4
            className={
              "text-xl py-4 text-center md:text-start font-semibold text-gray-600 dark:text-gray-300"
            }
          >
            Apaixonado por criar soluções web e entusiasta em IA, sempre
            explorando novas formas de inovar e melhorar processos.
          </h4>
          <LineSplit className={"absolute bottom-0 md:left-0"} />
        </div>
        <div
          id="text-wrapper"
          className={`${style.txt} flex flex-col justify-center gap-2 md:mt-4`}
        >
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            Sou um desenvolvedor web full stack com vasta experiência em
            front-end. Possuo conhecimentos sólidos em jQuery, React, Next.js e
            experiência prévia com Gatsby, o que me permite criar interfaces de
            usuário intuitivas e dinâmicas, sempre aplicando as melhores
            práticas e tecnologias disponíveis. Minha dedicação ao
            desenvolvimento front-end me impulsiona a sempre buscar a excelência
            e criar experiências de usuário envolventes e acessíveis.
          </p>
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            No back-end, trabalho com eficiência utilizando Node.js e Python
            para criar APIs REST e desenvolver processos automatizados e de ETL.
            Também possuo alguma experiência com Java, o que me permite
            aproveitar suas vantagens na construção de serviços robustos no
            backend. Meu sólido conhecimento em bancos de dados relacionais,
            especialmente SQL Server, me permite gerenciar e integrar dados de
            forma eficaz em sistemas complexos.
          </p>
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            Como engenheiro de software, valorizo a eficiência na criação de
            soluções robustas e escaláveis. Priorizo a escrita de código limpo e
            bem estruturado, garantindo que as soluções sejam sustentáveis e de
            fácil manutenção. Além disso, sou um grande entusiasta de IA, sempre
            explorando novas tecnologias para otimizar e transformar processos,
            acreditando no potencial da IA para revolucionar o desenvolvimento
            de software.
          </p>
        </div>
        <div
          id="imageWrapper"
          className={`w-full h-full relative ${style.picture} flex flex-col items-center justify-center`}
        >
          <Image
            src="/myself2.jpg"
            alt="Picture from Isaque Duarte"
            height={300}
            width={300}
            className="rounded-full object-cover w-[300px] h-[300px] lg:w-[350px] lg:h-[350px]"
          />
        </div>
      </section>
    </FadeIn>
  );
};
