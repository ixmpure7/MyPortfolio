interface ProjectLink {
  demo?: string;
  github?: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  category: 'unity' | 'unreal' | 'mobile' | 'vr';
  technologies: string[];
  links: ProjectLink;
}

export const projectsData: Project[] = [
  {
    title: 'Cyber Nexus',
    description: 'An immersive cyberpunk RPG with dynamic storytelling and advanced AI systems.',
    image: '../mages/poster__CardlandConquest.png',
    category: 'unity',
    technologies: ['Unreal Engine 5', 'Blueprint', 'C++', 'Niagara VFX'],
    links: {
      demo: 'https://example.com/demo',
      github: 'https://github.com/example'
    }
  },
  {
    title: 'Astral Voyage',
    description: 'A space exploration game with procedurally generated planets and lifeforms.',
    image: 'https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'unity',
    technologies: ['Unity 3D', 'C#', 'Shader Graph', 'Procedural Generation'],
    links: {
      demo: 'https://example.com/demo'
    }
  },
  {
    title: 'Rune Quest',
    description: 'A mobile adventure game with innovative touch controls and magic rune system.',
    image: 'https://images.pexels.com/photos/3964136/pexels-photo-3964136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'mobile',
    technologies: ['Unity 2D', 'C#', 'Firebase', 'iOS/Android'],
    links: {
      demo: 'https://example.com/demo',
      github: 'https://github.com/example'
    }
  },
  {
    title: 'Ethereal Worlds',
    description: 'A VR meditation experience with interactive environments and biofeedback.',
    image: 'https://images.pexels.com/photos/6498305/pexels-photo-6498305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'vr',
    technologies: ['Unity XR', 'C#', 'Oculus SDK', '3D Modeling'],
    links: {
      demo: 'https://example.com/demo'
    }
  },
  {
    title: 'Mech Warriors',
    description: 'A team-based multiplayer game featuring customizable mechs and destructible environments.',
    image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'unreal',
    technologies: ['Unreal Engine 4', 'C++', 'Photon Networking', 'PhysX'],
    links: {
      github: 'https://github.com/example'
    }
  },
  {
    title: 'Puzzle Dimension',
    description: 'A minimalist puzzle game that plays with perspective and spatial awareness.',
    image: 'https://images.pexels.com/photos/923734/pexels-photo-923734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'unity',
    technologies: ['Unity 3D', 'C#', 'Shader Programming', 'Level Design'],
    links: {
      demo: 'https://example.com/demo',
      github: 'https://github.com/example'
    }
  }
];