import Image from "next/image";
import style from "@/styles/about.module.css";

export const About: React.FC = (): JSX.Element => {
  return (
    <section id={"about"} className={`w-full p-2 md:py-4 md:px-32 ${style.aboutContainer}`}>
      <div id="header-wrapper" className={`${style.header} `}>
        <h2>Hey, Im Isaque.</h2>
        <h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          temporibus quam dolores labore laborum, eius iste voluptatem, quas,
          illum rerum ex vero consequatur?
        </h4>
      </div>
      <div id="text-wrapper" className={`${style.txt}`}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          quisquam voluptates, nisi, debitis ipsum voluptatum possimus eius qui
          temporibus unde nobis, voluptas officiis aspernatur modi accusantium?
          Ab expedita obcaecati quam.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          quisquam voluptates, nisi, debitis ipsum voluptatum possimus eius qui
          temporibus unde nobis, voluptas officiis aspernatur modi accusantium?
          Ab expedita obcaecati quam.
        </p>
      </div>
      <div id="imageWrapper" className={`w-full h-full relative ${style.picture} flex flex-col items-center justify-center`}>
        <Image
          src="/myself2.jpg"
          alt="Picture from Isaque Duarte"
          height={300}
          width={300}
          className="rounded-full object-cover w-[350px] h-[350px]"
        />
      </div>
    </section>
  );
};
