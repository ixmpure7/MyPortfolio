interface Skill {
  name: string;
  level: number;
}

interface SkillsData {
  gameEngines: Skill[];
  programming: Skill[];
  otherSkills: string[];
}

export const skillsData: SkillsData = {
  gameEngines: [
    { name: 'Unity 3D', level: 95 },
    { name: 'Unreal Engine', level: 85 },
    { name: 'Godot', level: 70 },
    { name: 'GameMaker Studio', level: 65 }
  ],
  programming: [
    { name: 'C#', level: 90 },
    { name: 'C++', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'Python', level: 65 }
  ],
  otherSkills: [
    '3D Modeling',
    'Animation',
    'Shader Programming',
    'Level Design',
    'UI/UX Design',
    'Version Control',
    'Game Physics',
    'AI Programming',
    'Performance Optimization',
    'Sound Design',
    'Networking',
    'AR/VR Development'
  ]
};