import ExperienceCard from "./ExperienceCard";

function Experience() {
    const images = [
      { imageUrl: "/Project Kanagames.png", title: 'KanaGames', description: 'Final Assignment for Education Game Development, RPG Game for Learning Japanese' },
      { imageUrl: 'link-to-image2', title: 'PurrfectAdopt', description: '' },
      { imageUrl: 'link-to-image3', title: 'Masjid Raden Patah Website', description: 'Description 3' },
      { imageUrl: 'link-to-image4', title: 'LeafCheck', description: 'Description 4' },
      { imageUrl: 'link-to-image5', title: 'Design', description: 'Description 5' },
      { imageUrl: 'link-to-image6', title: 'Practicum Assistant', description: 'Description 6' },
    ];

    return (
        <>
        <div className="bg-neutral-700 text-center text-4xl text-white font-semibold font-serif justify-center flex pt-20">
            <img src="/public/Compass ICON.svg" alt="" className="w-10 mr-5"/>
            <p>Experiences</p>
        </div>
        <div className="bg-neutral-700 justify-center px-60 pt-20 items-center">
            <div className="grid grid-cols-3 gap-8">
                {images.map((image, index) => (
                    <ExperienceCard
                    key={index}
                    imageUrl={image.imageUrl}
                    title={image.title}
                    description={image.description}
                    />
                ))}
            </div>
        </div>
        </>
    );
    
}

export default Experience;