import Formulario from "../../molecules/Formulario"
import './footer.css'
const Footer = ()=>{
    return(
        <section className ='all'>
            <div className="box"> 
                <div className='box1'>
                    <h2>Fique por dentro</h2>
                    <p>Cadastre e fique por dentro</p>
                </div>
                <div className='box2'>
                    <Formulario/>
                </div>
            </div>

        </section>
    )
}
export default Footer