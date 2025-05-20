interface Achievement {
  text: string;
}

interface TimelineItem {
  period: string;
  title: string;
  company: string;
  description: string;
  achievements?: string[];
}

export const timelineData: TimelineItem[] = [
  {
    period: '2023 - Present',
    title: 'Senior Game Developer',
    company: 'NextGen Studios',
    description: 'Leading a team of developers working on AAA game titles using Unreal Engine 5.',
    achievements: [
      'Lead developer for "Cyber Nexus", reaching 1M+ downloads',
      'Implemented advanced AI and procedural generation systems',
      'Mentored junior developers and established best practices'
    ]
  },
  {
    period: '2020 - 2023',
    title: 'Game Developer',
    company: 'Indie Games Collective',
    description: 'Developed multiple indie games for mobile and PC platforms using Unity.',
    achievements: [
      'Released 4 successful titles on Steam and mobile platforms',
      'Won "Best Mobile Game" award at IndieDev Conference 2022',
      'Optimized game performance for low-end mobile devices'
    ]
  },
  {
    period: '2018 - 2020',
    title: 'Unity Developer',
    company: 'VR Innovations',
    description: 'Created VR experiences and games for educational and entertainment purposes.',
    achievements: [
      'Developed medical training simulations used by 5 major hospitals',
      'Implemented efficient VR interaction systems',
      'Contributed to open-source VR frameworks'
    ]
  },
  {
    period: '2016 - 2018',
    title: 'Junior Game Programmer',
    company: 'GameCraft Studios',
    description: 'Worked on gameplay mechanics and UI systems for mobile games.',
    achievements: [
      'Contributed code to 6 published mobile games',
      'Built reusable component libraries for future projects',
      'Implemented analytics and monetization systems'
    ]
  },
  {
    period: '2012 - 2016',
    title: 'Bachelor of Science, Computer Science',
    company: 'University of Game Development',
    description: 'Specialized in Game Development with a focus on graphics programming and game design.',
    achievements: [
      'Graduated with Honors (GPA 3.8/4.0)',
      'Capstone Project: Developed a 3D platformer game',
      'Teaching Assistant for Game Programming courses'
    ]
  }
];