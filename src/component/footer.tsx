export default Footer

function Footer() {
    return (
        <footer>
            <div className="links">
                <div className="container">
                    <div className="icons">
                        <div className="linkedin" onClick={linkedin}>
                            <i className="fa-brands fa-linkedin"></i>
                            <p>LinkedIn</p>
                        </div>
                        <div className="portfolio" onClick={portfolio}>
                            <i className="fa-brands fa-product-hunt"></i>
                            <p>Portfolio</p>
                        </div>
                        <div className="x" onClick={x}>
                            <i className="fa-brands fa-x-twitter"></i>
                            <p>X</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}


// functions

function linkedin() {
    window.location.href = "https://www.linkedin.com/in/algonsul";
}

function x() {
    window.location.href = "https://x.com/Mr_Gonsul";
}

function portfolio() {
    alert("This Feature Is Not Available Yet!");
}