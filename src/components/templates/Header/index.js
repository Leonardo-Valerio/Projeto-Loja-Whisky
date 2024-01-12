import Banner from "../../atoms/Banner"
import Menu from "../../organisms/Menu"
import './header.css'
const Header = ()=>{
    return(
        <>
            <section className="layoutInicio">
                <Menu/>
                <div className="bannerDiv">
                    <Banner/>
                </div>
            </section>
        </>
    )
}
export default Header