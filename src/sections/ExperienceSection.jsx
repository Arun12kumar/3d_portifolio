import React from 'react'
import Titleheader from '../components/Titleheader'
import { expCards } from '../constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {

  useGSAP(() => {
    const cards = gsap.utils.toArray('.timeline-card');
    const cards1 = gsap.utils.toArray('.expText');
    cards.forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        },
      });
    });

    gsap.to('.timeline',{
      transformOrigin:'bottom bottom',
      ease:'power1.inOut',
      scrollTrigger:{
        trigger:'.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) =>{
          gsap.to('.timeline', {
            scaleY: 1 - self.progress
          })
        }
      }
    })

    cards1.forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 69%',
        },
      });
    });

  }, []);

  return (
    <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
      <div className='w-full h-full md:px-20 px-5'>
        <Titleheader title="Professional Work Experience" sub="My Career Overview" />
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map((card, index) => (
              <div key={card.title} className='exp-card-wrapper'>
                <div className='xl:w-2/6'>
                  <GlowCard card={card} index={index}>
                    <div>
                      <img src={card.imgPath} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>
                <div className='xl:w-4/6'>
                  <div className='flex items-start'>
                    <div className='timeline-wrapper'>
                      <div className='timeline' />
                      <div className='gradient-line w-1 h-full' />
                    </div>

                    <div className='expText flex xl:gap-20 md:gap-10 gap-5 relative z-20'>
                      <div className='timeline-logo'>
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className='font-semibold text-3xl'>{card.title}</h1>
                        <p className='my-5 text-white-50 flex items-center'><img src="images/calendar-alt.png" alt="calender" />{card.date}</p>
                        <p className='text-[#839cb5] italic'>Responsibilities</p>
                        <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                          {card.responsibilities
                            .filter((responsibility) => responsibility.trim() !== "")
                            .map((responsibility, index) => (
                              <li key={index} className='text-lg'>
                                {responsibility}
                              </li>
                            ))}
                        </ul>

                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection