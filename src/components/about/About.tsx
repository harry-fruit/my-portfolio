import Image from "next/image";
import style from "@/styles/about.module.scss";
import { LineSplit } from "@/components/LineSplit";
import { FadeIn } from "@/components/FadeIn";

export const About: React.FC = (): JSX.Element => {
  return (
    <FadeIn>
      <section id={"about"} className={`w-full py-12 px-2 md:px-6 md:py-16 lg:py-24 lg:px-20 xl:px-36 xl:py-44 2xl:px-64 2xl:py-52 ${style.aboutContainer}`}>
        <div id="header-wrapper" className={`${style.header} flex flex-col justify-center items-center relative`}>
          <h2 className="text-3xl w-full text-center md:text-start font-bold text-gray-800 dark:text-gray-50">Hey, Im Isaque.</h2>
          <h4 className={"text-xl py-4 text-center md:text-start font-semibold text-gray-600 dark:text-gray-300"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            temporibus quam dolores labore laborum, eius iste voluptatem, quas,
            illum rerum ex vero consequatur?
          </h4>
          <LineSplit className={"absolute bottom-0 md:left-0"}/>
        </div>
        <div id="text-wrapper" className={`${style.txt} flex flex-col justify-center gap-2 md:mt-4`}>
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quisquam voluptates, nisi, debitis ipsum voluptatum possimus eius qui
            temporibus unde nobis, voluptas officiis aspernatur modi accusantium?
            Ab expedita obcaecati quam.
          </p>
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
            quisquam voluptates, nisi, debitis ipsum voluptatum possimus eius qui
            temporibus unde nobis, voluptas officiis aspernatur modi accusantium?
            Ab expedita obcaecati quam.
          </p>
          <p className="text-center md:text-start text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quasi vitae perferendis commodi placeat molestiae sapiente delectus.</p>
        </div>
        <div id="imageWrapper" className={`w-full h-full relative ${style.picture} flex flex-col items-center justify-center`}>
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
