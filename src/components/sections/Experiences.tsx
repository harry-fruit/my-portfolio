import {
  SectionHeaderContainer,
  SectionSubtitle,
  SectionTitle,
} from "@/components/shared/section-header/SectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { Timeline } from "@/components/sections/about/timeline/Timeline";
import { TimelineItem } from "@/components/sections/about/timeline/TimelineItem";
import { TimelinePeriod } from "@/components/sections/about/timeline/TimelinePeriod";

export const Experience: React.FC = (): JSX.Element => {
  return (
    <section
      id={"experience"}
      className={
        "flex flex-col items-center py-6 md:py-10 lg:py-12 xl:py-14 2xl:py-16 px-2 md:px-6 lg:px-20 xl:px-36 2xl:px-52"
      }
    >
      <FadeIn>
        <SectionHeaderContainer>
          <SectionTitle text="Experiencias" className="text-primary-gradient" />
          <SectionSubtitle text="Algumas de minhas experiências como desenvolvedor e estudante" />
        </SectionHeaderContainer>
      </FadeIn>
      <Timeline>
        <TimelineItem
          date="Janeiro, 2020"
          title="Introdução ao mundo do desenvolvimento"
          description="Meu primeiro 'Hello World'. Foi aqui onde comecei a estudar por conta própria e me tornei autodidata."
        />
        <TimelineItem
          date="Março, 2020"
          title="Desenvolvimento de projeto pessoais"
          description="Após desenvolver uma boa base de conhecimentos, resolvi me aprofundar nos estudos a partir do desenvolvimento de projetos pessoais."
        />
        <TimelinePeriod period="2021" />
        <TimelineItem
          date="Janeiro, 2021"
          title="Inicio da Faculdade"
          description="Após um ano estudando como autodidata e desenvolvendo minhas habilidades, resolvi entrar na Faculdade de Analise e Desenvolvimento de Software na Universidade Cruzeiro do Sul."
        />
        <TimelineItem
          date="Junho, 2021"
          title="Primeira experiência profissional"
          description="Foi aqui onde comecei a trabalhar como desenvolvedor, trabalhando em aplicativos web já como full stack."
        />
        <TimelinePeriod period="2022" />

        <TimelineItem
          date="Janeiro, 2022"
          title="Ingressão à 4MapIT"
          description="Aqui trabalhei como analista de sistemas, realizando levantamento de requisitos, modelagem de sistemas e desenvolvimento de aplicativos web, onde realizava o desenvolvimento full stack com jQuery, Node.js e SQLServer."
        />
        <TimelinePeriod period="2023" />
        <TimelineItem
          date="Janeiro, 2023"
          title="Formatura da Faculdade"
          description="Foi aqui onde me formei como analista de sistemas, aprendi a trabalhar com banco de dados, a criar aplicações web e aplicações mobile, e, principalmente , foi onde desenvolvi meus conhecimentos sobre engenharia de software."
        />
        <TimelineItem
          date="Março, 2023"
          title="Formatura da Faculdade"
          description="Foi aqui onde me formei como analista de sistemas, aprendi a trabalhar com banco de dados, a criar aplicações web e aplicações mobile, e, principalmente , foi onde desenvolvi meus conhecimentos sobre engenharia de software."
        />
        <TimelinePeriod period="Presente" />
        <TimelineItem
          date="Presente"
          title="O que faço agora?"
          description="Atualmente estou trabalhando full time como analista de sistemas na Octea e nas horas vagas, atuo como freelancer e também sigo me aprofundando em conhecimento de diversas areas de tecnologia, como o desenvolvimento de aplicativos web, data science, machine learning, etc."
        />
      </Timeline>
    </section>
  );
};
