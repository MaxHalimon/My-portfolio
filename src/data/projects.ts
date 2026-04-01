// src/data/projects.ts

import type { Project } from '../types/index';

import img1 from '../assets/img/portfolio-img1.png';
import img2 from '../assets/img/portfolio-img2.png';
import img3 from '../assets/img/portfolio-img3.png';
import img4 from '../assets/img/portfolio-img4.png';
import img5 from '../assets/img/portfolio-img5.png';
import img6 from '../assets/img/portfolio-img6.png';

export const projects: Project[] = [

  {
    id: '1',
    title: 'Mastergas',
    description: 'Template "Light-wave".',
    image: img1,
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap 5', 'jQuery'],
    link: 'https://maxhalimon.github.io/Mastergas/'
  },

  {
    id: '2',
    title: 'Pingbuller',
    description: 'Free theme for business landing pages.',
    image: img2,
    tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap 5'],
    link: 'https://maxhalimon.github.io/Pingbuller/'
  },
  
  {
  id: '3',
    title: 'Notify',
    description: 'Theme designed by me.',
    image: img3,
    tags: ['HTML5', 'CSS3'],
    link: 'https://maxhalimon.github.io/Notify/'
  },
  {
    id: '4',
    title: 'Vidnovlennia',
    description: 'Free theme with restorative services layout.',
    image: img4,
    tags: ['HTML5', 'CSS3', 'Bootstrap 5'],
    link: 'https://maxhalimon.github.io/Vidnovlennia/'
  },
  {
    id: '5',
    title: 'CoTnent Studio',
    description: 'Design and implementation of studio presentation website.',
    image: img5,
    tags: ['HTML5', 'CSS3', 'SVG', 'Branding'],
    link: 'https://maxhalimon.github.io/CoTnent_Studio/'
  },
    {
    id: '6',
    title: 'Waggery',
    description: 'Design and implementation of online-store website.',
    image: img6,
    tags: ['Shopify', 'Liquid', 'Design', 'Branding'],
    link: 'https://waggery.store/'
  }
];