import clsx from 'clsx';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

import automationIcon from '../images/automation.svg';
import cicdIcon from '../images/cicd.svg';
import devopsIcon from '../images/devops.svg';
import operationsIcon from '../images/operations.svg';

const styles = {
  base: 'flex flex-col w-[242px]',
};

const iconMap = {
  automation: automationIcon,
  cicd: cicdIcon,
  devops: devopsIcon,
  operations: operationsIcon,
};

const Card = ({ className = null, icon, title, description }) => (
  <div className={clsx(styles.base, className)}>
    <div className="relative flex h-9 w-9 items-center justify-center rounded-[9px] border-[1.3px] border-blue-400">
      <div className="absolute h-9 w-9 rounded-[9.25px] bg-card-linear-gradient shadow-about" />
      <Image width={22} height={22} src={iconMap[icon]} alt={icon} />
    </div>
    <h3 className="pt-[14px] text-xl font-medium text-white">{title}</h3>
    <p className="pt-2 text-base font-light leading-5 text-grey-200">{description}</p>
  </div>
);

Card.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
