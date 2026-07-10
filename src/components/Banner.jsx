import bannerImage from '../assets/banner.jpg'
function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="img-fluid" style={{ height: "50%" }} />
    </div>
  )
}

export default Banner