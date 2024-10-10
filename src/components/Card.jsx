
function Card() {
    return (
        <div className="card">
            <img src="/PP_WA_Fixxed.png" alt="" />
            <span className="name">Healme <i className="bi bi-check-circle-fill"></i></span>
            <span className="description">Web Dev</span>
            <div className="soc-icons">
                <a href="" className="soc-icon"> <i className="bi bi-linkedin"></i></a>
                <a href="" className="soc-icon"> <i className="bi bi-youtube"></i></a>
                <a href="" className="soc-icon"> <i className="bi bi-instagram"></i></a>
                <a href="" className="soc-icon"> <i className="bi bi-github"></i></a>
            </div>
            <div className="about-section">
                <span className="subtitle"> About me</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ad tempore amet molestias accusantium voluptatibus aspernatur veritatis ea
                </p>
                <br />
            </div>
        </div>
    );
}

export default Card;