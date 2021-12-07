import './rightbar.css'

const Rightbar = () => {
  return (
    <div className="rightbar" >
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Brad David</b> and <b>3 other friends</b> have birthday today
          </span>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
