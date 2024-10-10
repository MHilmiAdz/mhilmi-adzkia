function Education() {
    return (
        <>
        <div className="bg-neutral-700 text-center text-4xl text-white font-semibold font-serif justify-center flex pt-20">
            <img src="/public/Education Icon.svg" alt="" className="w-10 mr-5"/>
            <p>Education</p>
        </div>
        <section className="bg-neutral-700 p-20 pl-20">
            <div className="flex justify-center items-center p-10">
                <div className="w-1/6 p-5">
                    <img src="/Logo_Universitas_Brawijaya.svg.png" alt="Logo UB" className=""/>
                </div>
                <div className="w-1/4 p-5">
                    <img src="/logo_FILKOM.png" alt="Logo UB" />
                </div>
                <div className="p-5">
                    <img src="/LOGO PTI.png" alt="Logo UB"/>
                </div>
                <div className="w-1/6 p-5">
                    <img src="/LOGO Asyifa.png" alt="Logo UB" />
                </div>
            </div>
        </section>
        </>
    );
}

export default Education;