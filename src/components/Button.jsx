import React from 'react'

const Button = ({ text, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const counterSection = document.getElementById('counter');
    if (counterSection) {
      const offset = window.innerHeight * 0.15; // 15% of viewport height
      const targetPosition = counterSection.getBoundingClientRect().top + window.scrollY - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      onClick={handleClick}
      className={`${className ?? ''} cta-wrapper`}
      href="#counter" // Added for semantic meaning and fallback
    >
      <div className='cta-button group'>
        <div className='bg-circle' />
        <p className='text'>{text}</p>
        <div className='arrow-wrapper'>
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  )
}

export default Button