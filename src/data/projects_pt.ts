import type { Project } from "../types/Projects.ts";

const projects: Project[] = [
  {
    name: 'Events Booking',
    thumbnail: '/images/projects/eventsbooking_desktop.webp',
    url: 'https://eventsbooking.vercel.app',
    description: 'A system for finding, posting and sharing events as well as buying tickets',
    skills:['react', 'remix', 'tailwindcss', 'typescript', 'postgresql'],
    status:'Active',
    projectPage:'/projects/events-booking'
  },
  {
    name: 'DataShop',
    thumbnail: '/domenico-loia-hGV2TfOh0ns-unsplash.webp',
    url: 'https://any-data-generator.vercel.app',
    description: 'A system for finding, posting and sharing events as well as buying tickets',
    skills:['react', 'typescript', 'remix', 'postgresql'],
    status:'Active',
    projectPage:'/projects/data-shop'
  },
  {
    name: 'Must Read Them',
    thumbnail: '/images/projects/must-read-them_desktop.webp',
    url: 'https://must-read-them.vercel.app',
    description: 'A system for generating curated books lists according to user defined goals. Each list is tailored to speed up the skill mastering process.',
    skills:['react', 'typescript', 'remix', 'postgresql'],
    status:'Active',
    projectPage:'/projects/must-read-them'
  },
  {
    name: 'Kingdom Library',
    thumbnail: '/domenico-loia-hGV2TfOh0ns-unsplash.webp',
    url: 'https://kingdomlibrary.vercel.app',
    description: 'A system for finding, posting and sharing events as well as buying tickets',
    skills:['react', 'typescript', 'remix', 'postgresql'],
    status:'Active',
    projectPage:'/projects/kingdom-library'
  },
]

export default projects