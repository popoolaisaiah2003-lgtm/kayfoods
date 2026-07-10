import bannerImage from '../assets/banner.jpg'

function Content() {
  return (
    <div className="row">
        <div className="col-md-6 p-4">
            <img src={bannerImage} alt="Banner" className="img-fluid" style={{ height: "50%" }} />
        </div>
        <div className="col-md-6 p-4">
            <h2>This is the Reactjs</h2>
            <p>This is a simple React component.</p>
            <button onClick={() => alert('Button clicked!')} className='btn btn-danger'>Click Me</button>    
        </div>
    </div>
  )
}

export default Content