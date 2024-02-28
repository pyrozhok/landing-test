import Image from 'next/image';

import heroIllustration from 'components/pages/home/hero/images/hero-illustration.svg';

import Form from './form';

const Hero = () => (
  <section className="hero hero-bg bg-hero-gradient pt-[216px]">
    <div className="container relative grid grid-cols-2 items-center gap-10 md:grid-cols-1">
      <div className="col-span-1">
        <div className="hero-round-gradient pointer-events-none" />
        <h1 className="hero-title-gradient bg-clip-text pb-7 font-title text-7xl leading-[112.5%]">
          Revolutionize <br /> your DevOps journey with DevOptima
        </h1>
        <p className="pb-9 text-xl font-light leading-normal tracking-tight-2 text-grey-200">
          Empower teams to innovate faster through streamlined development, <br className="block" />
          efficient automated workflows, and reliable scaling.
        </p>
        <Form />
      </div>
      <div className="relative col-span-1">
        <div className="hero-ellipse-gradient z-10" />
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
