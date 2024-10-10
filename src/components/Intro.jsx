function Intro() {
    return (
        <>
        <section className="bg-zinc-300 flex pl-60 pr-60 pt-10 items-center">
            <div className="flex-1 pl-20 -mt-16">
                <p className="text-5xl text-white">I&apos;m <span className="text-7xl font-bold text-black">M. HILMI ADZKIA</span></p>
                <p className="text-3xl pt-6 pb-10 font-serif">Interested in Game Developing, <br/> Web Developing and Machine Learning Tapi Boong</p>
                <a href="#"><button className="bg-transparent hover:bg-black text-grey-700 hover:text-white py-5 px-14 border-2 border-black hover:border-transparent rounded-2xl text-3xl">Contact me</button></a>
            </div>
            <div className="w-1/3">
                <img className="w-full" src="/PROFILE2.png" alt="" />
            </div>
        </section>

        <section className="bg-neutral-700 p-60 pl-60">
            <p className="text-5xl text-white font-semibold font-serif">About</p>
            <p className="text-2xl p-10 font-serif text-white">
            I&apos;m Undergraduate Information Technology Education Student at the Faculty of Computer Science,
            Brawijaya University, with a strong interest in education, programming, web development, 
            and related fields. My academic journey has equipped me with a deep understanding of education and computer science. 
            I&apos;ve successfully applied theoretical knowledge into practical experiences, contributing to various projects in diverse roles. 
            This demonstrates my flexibility and adaptability in different work environments. 
            Through these experiences, I have enhanced my skills and expertise, further solidifying my readiness to excel in various IT-related roles.
            </p>
        </section>
        </>
    );
}

export default Intro;