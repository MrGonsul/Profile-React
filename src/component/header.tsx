export default Header

function Header() {
  return (
    <header>
      <div className="content">
        <div className="container">
          <div className="image">
              <img src="/profile.jpg" alt="Profile" />      
          </div>
          <div className="info">
            <h2>Mr Gonsul</h2>
            <p>Software Engniering</p>
          </div>
          <div className="btn" onClick={github}>
            <i className="fa-brands fa-github"></i>
            <button className="clickin" >GitHub</button>
          </div>
        </div>
      </div>
    </header>
  )
}

// Functions
function github() {
  window.location.href = "https://github.com/MrGonsul";
}
