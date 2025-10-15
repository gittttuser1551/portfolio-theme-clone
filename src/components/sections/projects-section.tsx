const projectsData = [
  {
    id: 1,
    title: 'Charismatic Electronics',
    description: 'Full-stack e-commerce platform for transformer & custom electrical products.',
    tags: ['React', 'Express.js', 'Node.js', 'MongoDB', 'NodeMailer'],
    github: 'https://github.com/sanyagargg/ecommerce-website',
    live: 'https://charismaticelectronics.vercel.app/',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dc9a268-a287-47c5-b1d5-9db9f5d97484-sanyagarg-vercel-app/assets/images/project1-2.png',
  },
  {
    id: 2,
    title: 'DesignGenie',
    description: 'AI-powered interior design generator based on user preferences.',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'Neon SQL', 'Drizzle', 'Replicate.com', 'Stripe', 'Clerk'],
    github: 'https://github.com/sanyagargg/DesignGenie',
    live: 'https://taskapp.example.com/',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dc9a268-a287-47c5-b1d5-9db9f5d97484-sanyagarg-vercel-app/assets/images/project2-3.png',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A modern personal portfolio built with React & Styled Components.',
    tags: ['React', 'Styled Components'],
    github: 'https://github.com/sanyagargg/SanyaPortfolio',
    live: 'https://portfolio.example.com/',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dc9a268-a287-47c5-b1d5-9db9f5d97484-sanyagarg-vercel-app/assets/images/project3-4.png',
  },
  {
    id: 4,
    title: 'EmotiCare',
    description: 'Mental health awareness platform with self-help and campaign tools.',
    tags: ['HTML', 'CSS', 'Javascript', 'Node.js', 'Express'],
    github: 'https://github.com/sanyagargg/EmotiCare',
    live: 'https://emoticare.onrender.com/',
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dc9a268-a287-47c5-b1d5-9db9f5d97484-sanyagarg-vercel-app/assets/images/project4-5.png',
  },
  {
    id: 5,
    title: 'Severity Classification of Code Smells',
    description: 'ML-based severity classifier for code smells using models and LIME.',
    tags: ['Python', 'Scikit-learn', 'XGBoost', 'Naïve Bayes', 'LIME', 'SMOTE', 'Pandas', 'NumPy'],
    github: 'https://github.com/sanyagargg/Severity-Classification-of-Code-Smells',
    live: null,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/0dc9a268-a287-47c5-b1d5-9db9f5d97484-sanyagarg-vercel-app/assets/images/project5-6.png',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative bg-gradient-to-br from-rose-50 via-white to-pink-100 py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <h2 className="font-display text-primary text-center text-4xl md:text-5xl font-bold mb-16">
          My Recent Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white border-2 border-border rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl hover:-translate-y-1 hover:border-primary">
              <div className="relative w-full h-36 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-body text-foreground text-lg font-semibold mb-2">{project.title}</h3>
                <p className="font-body text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="bg-secondary text-foreground text-xs font-body px-2.5 py-1 rounded-md border border-border">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="bg-primary/10 text-primary text-xs font-body px-2.5 py-1 rounded-md border border-primary/20">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 font-body">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent hover:underline text-sm font-semibold transition-colors duration-300">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent hover:underline text-sm font-semibold transition-colors duration-300">
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;