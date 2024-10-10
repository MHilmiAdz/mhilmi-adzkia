import PropTypes from 'prop-types';

const ExperienceCard = ({ imageUrl, title, description }) => {
  return (
    <div className="relative h-96 w-auto bg-gray-300 group rounded-3xl">
      <img
        src={imageUrl}
        alt={title}
        className="object-cover w-full h-full rounded-3xl"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white text-sm text-center">{description}</p>
        <button className="mt-2 px-4 py-2 bg-yellow-500 text-black rounded">See More ➔</button>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default ExperienceCard;