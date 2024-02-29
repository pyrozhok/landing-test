import Image from 'next/image';

import heroIllustration from 'components/pages/home/hero/images/hero-illustration.svg';

import Form from './form';

const Hero = () => (
  <section className="hero bg-hero-gradient bg-[length:1799px_760px] bg-right-top bg-no-repeat pt-[216px]">
    <div className="container relative grid grid-cols-2 items-center gap-10 md:grid-cols-1">
      <div className="col-span-1">
        <div className="pointer-events-none absolute left-[-400px] top-[-400px] h-[800px] w-[800px] rounded-[800px] bg-blue-450 blur-[200px]" />
        <h1 className="bg-hero-title-gradient bg-clip-text pb-7 font-title text-7xl leading-[112.5%] text-transparent">
          Revolutionize <br /> your DevOps journey with DevOptima
        </h1>
        <p className="pb-9 text-xl font-light leading-normal tracking-tight-2 text-grey-200">
          Empower teams to innovate faster through streamlined development, <br className="block" />
          efficient automated workflows, and reliable scaling.
        </p>
        <Form />
      </div>
      <div className="relative col-span-1">
        <div className="absolute top-[-216px] z-10 h-[396px] w-[716px] rounded-[716px] bg-blue-450 blur-[200px]" />
        <Image
          className="absolute -right-7 -top-72 z-20 bg-transparent"
          src={heroIllustration}
          width={656}
          height={487}
          alt="hero"
          priority
        />
      </div>
    </div>
  </section>
);

export default Hero;
