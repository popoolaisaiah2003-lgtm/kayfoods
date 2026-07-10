import Header from './components/header.jsx'
import Banner from './components/Banner.jsx'
import Content from './components/Content.jsx'  
import Table from './components/Table.jsx'  
import Blogger from './components/Blogger.jsx'

function Layout () {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12">
                <Header />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Banner />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Content />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Table />
            </div>
        </div>
         <div className="row">
            <div className="col-12">
                <Blogger />
            </div>
        </div>
    </div>

  )
}

export default Layout