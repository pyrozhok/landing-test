import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

const styles = {
  base: `flex flex-col w-[380px] h-[459px] box-border rounded-lg border-[1px] border-blue-400 bg-card-linear-gradient-2 shadow-solutions`,
};

const Card = ({ className = null, icon, title, description }) => (
  <li className={clsx(styles.base, className)}>
    <div className="rounded-2xl">
      <Image src={icon} alt="solution image" width={380} height={277} />
    </div>

    <div className="flex flex-col px-8">
      <h3 className="text-xl font-medium leading-tight tracking-tight-2 text-white">{title}</h3>
      <p className="pt-[12px] text-base font-light leading-snug text-grey-200">{description}</p>
    </div>
  </li>
);

Card.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
