function ProjectCard({ name, desc, releaseDate, link, image }) {
  return (
    <div className="max-w-96 min-w-96 rounded overflow-hidden shadow-lg card">
      <div
        className="container1 hover:cursor-pointer"
        onClick={() => window.open(link)}
      >
        <img
          className="image w-full h-56"
          src={image}
          alt={'project ' + name + ' image'}
        />
        <div className="middle">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            View
          </span>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-[#34495E]">{name}</div>
        <p className="text-gray-700 text-base">{desc}</p>
      </div>
      {releaseDate && (
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {releaseDate}
          </span>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
