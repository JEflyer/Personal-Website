const skills = [
    { name: 'Blockchain Technology', level: 95 }, // Level is a percentage
    { name: 'Environmental Advocacy', level: 95 },
    { name: 'Software Architecture', level: 90 },
    { name: 'Project Management', level: 85 },
    { name: 'Leadership', level: 92 },
    // Add more skills as needed
  ];
  
  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-black">
        <span className="text-base font-medium dark:text-black">{name}</span>
        <span className="text-sm font-medium dark:text-black">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div className="bg-green h-2.5 rounded-full z-10" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
  
  const SkillsChart = () => {
    return (
      <div className="max-w-xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-6 text-black">Skills & Expertise</h2>
        {skills.map((skill) => (
          <SkillBar key={skill.name} name={skill.name} level={skill.level} />
        ))}
      </div>
    );
  };
  
  export default SkillsChart;
  