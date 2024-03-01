import Image from 'next/image';
import PropTypes from 'prop-types';

const Card = ({ icon, text, authorImage, name, position }) => (
  <div className="flex h-[304px] w-[522px] flex-col">
    <div className="absolute h-16 w-16 rounded-2xl bg-card-linear-gradient shadow-reviews" />
    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border-[1.3px] border-blue-400">
      <Image width={36} height={36} src={icon} alt="company logo" />
    </div>
    <p className="mt-5 text-2xl font-light leading-[150%] tracking-tight-2 text-grey-200">{text}</p>
    <div className="mt-8 flex gap-3">
      <Image width={44} height={44} src={authorImage} alt="author avatar" />
      <div className="flex flex-col">
        <span className="text-base text-white">{name}</span>
        <span className="text-[15px] text-grey-200">{position}</span>
      </div>
    </div>
  </div>
);

Card.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  authorImage: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default Card;
