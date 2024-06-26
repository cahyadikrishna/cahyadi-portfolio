import Marquee from 'react-fast-marquee';
import { TECH_STACK_DATA } from '~/modules/home/entities/home.entity';

export default function HomeTechstack() {
  return (
    <section className="max-w-[1200px] mx-auto px-[20px] text-center mt-[40px] lg:mt-[60px] lg:px-[130px]">
      <h1 className="font-bold text-[30px] lg:text-[40px] leading-tight">
        Tech Stack Advanced
      </h1>

      <Marquee
        pauseOnHover
        speed={60}
        className="px-[80px] mt-[40px] lg:mt-[60px]"
      >
        {TECH_STACK_DATA.map((techStack, i) => (
          <img
            key={i}
            src={techStack.path}
            alt={techStack.name}
            width={50}
            className="h-[48px] mx-[18px] w-[48px] sm:w-[50px] md:mx-[30px]"
          />
        ))}
      </Marquee>
    </section>
  );
}
