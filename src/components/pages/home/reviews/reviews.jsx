import Card from './card';
import dribbleIcon from './images/dribble.svg';
import janeAvatar from './images/jane-doe.png';
import johnAvatar from './images/john-smith.png';
import reflexIcon from './images/reflex.svg';

export const reviews = [
  {
    icon: reflexIcon,
    reviewText: (
      <>
        Thanks to DevOptima, our team can focus more on{' '}
        <span className="font-medium text-white">innovation</span> and less on operational
        challenges. Their <span className="font-medium text-white">cloud management solutions</span>{' '}
        are top-notch.
      </>
    ),
    authorImage: johnAvatar,
    name: 'John Smith',
    position: 'IT Director at Reflex',
  },
  {
    icon: dribbleIcon,
    reviewText: (
      <>
        DevOptima has been a game-changer for us. With their support, we&apos;ve shifted our focus
        <span className="font-medium text-white">
          {' '}
          from operational hurdles to pushing boundaries in innovation.
        </span>
      </>
    ),
    authorImage: janeAvatar,
    name: 'Jane Doe',
    position: 'Tech Lead at Dribble',
  },
];

const Reviews = () => (
  <section className="container flex h-[850px] justify-center bg-reviews-gradient bg-auto bg-center pt-8">
    <ul className="flex gap-[88px] pt-[220px]">
      {reviews.map((review, index) => (
        <Card
          key={index}
          icon={review.icon}
          text={review.reviewText}
          authorImage={review.authorImage}
          name={review.name}
          position={review.position}
        />
      ))}
    </ul>
  </section>
);

export default Reviews;
