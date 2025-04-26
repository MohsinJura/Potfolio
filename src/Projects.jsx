const projects = [
    {
      title: "Ambsi clone",
      category: "Medical Company",
      image: "/ambsi-clone.png",
      url: "https://ambsi-clone.vercel.app/", 
    },
    // {
    //   title: "Ditech clone",
    //   category: "React",
    //   image: "/ditech-clone.png",
    //   url: "https://clone-ditech.netlify.app/",
    // },
    {
      title: "Devloprz",
      category: "Company protfolio",
      image: "/devloprz.png",
      url: "https://devloprz-so6t.vercel.app/",
    },
    {
      title: "Al-Ahbar Landing Page",
      category: "Sales & Rent Company",
      image: "/al-ahbar-clone.png",
      url: "https://al-ahbar.vercel.app/",
    },
    {
      title: "MicroIT-Hub clone",
      category: "Company Protfolio",
      image: "/microithub-clone.png",
      url: "https://microithub-clone-xi.vercel.app/",
    },


  ];
  
  export default function Projects() {
    return (
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h4 className="text-brandgreen font-semibold font-mono text-2xl py-4">Portfolio</h4>
          <h2 className="text-6xl font-bold text-gray-800 mb-6">Latest Projects</h2>
          <div className="w-28 h-1 bg-brandgreen mx-auto mb-14"></div>
  
          <div className="grid md:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <a
                href={project.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-3 transition-all duration-300"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-fit group-hover:opacity-80 transition"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-brandgreen transition">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.category}</p>
                </div>
              </a>
            ))}
          </div>
  
          {/* <button className="mt-10 border px-6 py-2 rounded text-brandgreen border-brandgreen hover:bg-hovargreen hover:text-white transition duration-300">
            All Works
          </button> */}
        </div>
      </section>
    );
  }
  