import PropTypes from 'prop-types';

const SkillCard = ({ imgSrc, altText, skillName }) => {
  return (
    <div className="flex flex-col items-center bg-neutral-400 p-6 rounded-3xl hover:bg-slate-600">
      <img src={imgSrc} alt={altText} className="h-24 mb-4" />
      <h2 className="text-white text-xl">{skillName}</h2>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  skillName: PropTypes.string.isRequired,
};

export default SkillCard;