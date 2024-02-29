import Card from './card';
import cloudIllustration from './images/cloud.png';
import deployIllustration from './images/deploy.png';
import testingIllustration from './images/testing.png';

const Solutions = () => (
  <section className="pt-[203px]">
    <div className="container relative flex flex-col items-center justify-center gap-14">
      <div className="flex flex-col gap-5">
        <h2 className="text-center font-title text-5xl leading-[112.5%] tracking-tight-1 text-white">
          Innovative solutions
          <br />
          for operational excellence
        </h2>
        <p className="text-center text-xl font-light leading-normal tracking-tight-2 text-grey-200">
          Tailored DevOps expertise driving your business momentum.
          <br />
          Personalized solutions for growth and evolution.
        </p>
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="pointer-events-none absolute top-[346px] -z-20 h-[396px] w-[1220px] bg-blue-450 blur-[300px]" />
        <Card
          icon={deployIllustration}
          title="Continuous Integration & Deployment"
          description="Streamline your development process with our advanced CI/CD solutions, ensuring faster and more reliable code deployment."
        />
        <Card
          icon={cloudIllustration}
          title="Cloud Solutions & Infrastructure Management"
          description="Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services."
        />
        <Card
          icon={testingIllustration}
          title="Cloud Solutions & Infrastructure Management"
          description="Leverage the cloud for scalability and efficiency. We provide comprehensive cloud infrastructure management and optimization services."
        />
      </div>
    </div>
  </section>
);

export default Solutions;
