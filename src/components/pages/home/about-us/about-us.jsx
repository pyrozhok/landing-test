import Image from 'next/image';

import usageIllustration from 'components/pages/home/about-us/images/usage.svg';

import Card from './card';
import { BENEFITS } from './data/benefits';

export const AboutUs = () => (
  <section className="about-us pt-[168px]">
    <div className="container relative grid grid-cols-2 items-center lg:flex">
      <div className="lg:hidden">
        <div className="absolute -top-28 left-[350px] z-10 h-[300px] w-[300px] rounded-[716px] bg-blue-450 blur-[100px] " />
        <Image
          className="absolute -left-[246px] top-0 z-20 h-[619px]"
          src={usageIllustration}
          width={854}
          height={619}
          alt="hero"
        />
      </div>
      <div className="pt-13">
        <h2 className="pb-5 pt-[3.375rem] font-title text-5xl leading-[112.5%] text-white">
          What is DevOptima?
        </h2>
        <p className="w-[630px] text-xl font-light leading-normal tracking-tight-2 text-grey-200 lg:w-full lg:text-center">
          At DevOptima, we are a team of passionate DevOps experts committed to transforming the way
          businesses approach software development and operations.
        </p>
        <ul className="flex flex-wrap gap-x-20 gap-y-10 pt-14 lg:gap-10">
          {BENEFITS.length > 0 &&
            BENEFITS.map((item, index) => (
              <Card
                key={`benefit-${index}`}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutUs;
