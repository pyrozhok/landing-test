import Image from 'next/image';

import usageIllustration from 'components/pages/home/about-us/images/usage.svg';

import Card from './card';
import { BENEFITS } from './data/benefits';

export const AboutUs = () => (
  <section className="about-us pt-[168px]">
    <div className="container relative grid grid-cols-2 items-center md:grid-cols-1">
      <div className="col-span-1 ">
        <div className="absolute -top-24 left-[477px] z-10 h-[300px] w-[300px] rounded-[716px] bg-blue-450 blur-[100px]" />
        <Image
          className="absolute -left-[246px] top-0 z-20 h-[619px] bg-transparent"
          src={usageIllustration}
          width={854}
          height={619}
          alt="hero"
        />
      </div>
      <div className="pt-13 col-span-1">
        <h2 className="pb-5 pt-[3.375rem] font-title text-5xl leading-[112.5%] text-white">
          What is DevOptima?
        </h2>
        <p className="text-xl font-light leading-normal tracking-tight-2 text-grey-200">
          At DevOptima, we are a team of passionate DevOps experts committed to transforming the way
          businesses approach software development and operations.
        </p>
        <ul className="relative flex flex-wrap gap-x-[107px] gap-y-10 pt-14">
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
