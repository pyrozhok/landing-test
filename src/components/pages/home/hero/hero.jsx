import Image from 'next/image';

import heroIllustration from 'components/pages/home/hero/images/hero-illustration.svg';

import Form from './form';

const Hero = () => (
  <section className="hero hero-bg bg-hero-gradient py-20">
    <div className="container relative grid grid-cols-2 items-center gap-10 pt-[88px] md:grid-cols-1">
      <div className="col-span-1 pt-12">
        <div className="hero-round-gradient" />
        <h2 className="hero-title-gradient bg-clip-text pb-7 font-title text-7xl leading-[112.5%]">
          Revolutionize <br /> your DevOps journey with DevOptima
        </h2>
        <p className="tracking-tight-8 pb-9 text-xl font-light leading-normal text-grey-200">
          Empower teams to innovate faster through streamlined development, <br className="block" />
          efficient automated workflows, and reliable scaling.
        </p>
        <Form />
      </div>
      <div className="relative col-span-1">
        <div className="hero-ellipse-gradient z-10" />
        <Image
          className="absolute -right-7 -top-56 z-20 bg-transparent"
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
