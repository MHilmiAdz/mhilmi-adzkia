import SkillCard from "./SkillCard";

function Skills() {
    return (
        <>
        <div className="bg-neutral-700 text-center text-4xl text-white font-semibold font-serif justify-center flex p-10">
            <img src="/Thropy Icon.svg" alt="" className="w-10 mr-5"/>
            <p>Skills</p>
        </div>

        <div className="bg-neutral-700 justify-center flex items-center p-10">
            <div className="grid grid-cols-4 gap-8">
                <div className="flex flex-col items-center bg-neutral-400 p-6 rounded-3xl hover:bg-slate-600">
                    <divc className="flex">
                        <img src="/public/html.svg" alt="" className="h-24 mb-4"/>
                        <img src="/public/css.svg" alt="" className="h-24 mb-4"/>
                    </divc>
                    <h2 className="text-white text-xl">HTML & CSS</h2>
                </div>
                <SkillCard imgSrc="/javascript.svg" altText="JavaScript" skillName="JavaScript" />
                <SkillCard imgSrc="/java.svg" altText="Java" skillName="Java"/>
                <SkillCard imgSrc="/python.svg" altText="Python" skillName="Python" />
                <SkillCard imgSrc="/Construct3.png" altText="Construct Game Engine" skillName="Construct Game Engine" />
                <SkillCard imgSrc="/react.svg" altText="ReactJS" skillName="ReactJS" />
                <SkillCard imgSrc="/Tailwind.png" altText="Tailwind" skillName="TailWind" />
                <SkillCard imgSrc="/vite.svg" altText="Vite" skillName="Vite" />
                <SkillCard imgSrc="/php.svg" altText="php" skillName="php" />
                <SkillCard imgSrc="/nodejs.svg" altText="NodeJS" skillName="NodeJS" />
                <SkillCard imgSrc="/flask.svg" altText="FlaskAPI" skillName="FlaskAPI" />
                <SkillCard imgSrc="/laravel.svg" altText="Laravel" skillName="Laravel" />
            </div>
        </div>
        </>
        
    );
}
export default Skills;