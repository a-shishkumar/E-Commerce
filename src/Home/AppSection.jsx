import { Link } from "react-router-dom"

const btntext="Sign up for Free"
const title="Shop Anytime, Anywhere"
const desc="Take courses on your any device with our app & learn all about business what you want. Just download & install & start to learn"


function AppSection() {
  return (
    <div className="app-section padding-tb ">
        <div className="container">
            <div className="section-header text-center">
                <Link to='/sign-up' className="lab-btn mb-4">{btntext}</Link>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
            </div>

            <div className="section-wrapper">
                <ul className="lab-up">
                    <li><a href="#"><img src="/src/assets/images/app/01.jpg" alt="" /></a></li>
                    <li><a href="#"><img src="/src/assets/images/app/02.jpg" alt="" /></a></li>

                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default AppSection
