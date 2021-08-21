
import { useEffect, useState } from 'react'
import {  NavLink } from 'react-router-dom';
// import NightsStayIcon from '@material-ui/icons/NightsStay';
// import WbSunnyIcon from '@material-ui/icons/WbSunny';
import '../tabMenu/tab.css';
import DB from './db'
import gsap from 'gsap'
const Galleryreact = () => {



        const[itmes ,setItems] = useState(DB);

        const filterItem = (filt) =>{
                const updateItem = DB.filter((ele) => ele.category === filt);
                setItems(updateItem);
        }

        useEffect(()=>{
            // const Tl = gsap.timeline();
            gsap.from('.item1 .left',{
                delay: 0.2,
                x: -800,
                height: 0,
                opacity: 0,
                duration: 3,
                ease: 'power3.out',
                stagger: {
                  amount: 0.5,
                }
            });
            gsap.from('.item1 .top',{
                delay: 0.2,
                y: -800,
                height: 0,
                opacity: 0,
                duration: 3,
                ease: 'power3.out',
             
            });
            gsap.from('.item1 .ret',{
                delay: 0.2,
                x: 800,
                height: 0,
                opacity: 0,
                duration: 3,
                ease: 'power3.out',
             
            });
            gsap.from('.item1 .bott',{
                delay: 0.2,
                y: 800,
                height: 0,
                opacity: 0,
                duration: 3,
                ease: 'power3.out',
             
            });
        });



    return (
        <div  >
            
          

            <div className="menu-tebs container-fluid py-4">
                <div className="menu-tab d-flex justify-content-around ">

                    <button className="btn " onClick={() => filterItem('breakfast')} > Breakfast</button>

                    <button className="btn " onClick={() => filterItem('lunch')} > lunch</button>

                    <button className="btn " onClick={() => filterItem('evening')} > evening</button>

                    <button className="btn " onClick={() => filterItem('dinner')} > dinner</button>

                    <button className="btn btn-warning " onClick={() => setItems(DB)} > All</button>


                </div>


            </div>
            <div className="menu-itmes container-fluid pt-5">

                <div className="row">
                    <div className="col-12 mx-auto pt-5">
                        <div className='row my-5  ' >

                                {
                                    itmes.map((ele) => {
                                        let {id , name , image , description , price ,calss} = ele;

                                        return(
                                              


                                                <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4">

                                                    <div className={`row Item-inside ${calss}`} key={id}>

                                                        <div className="col-12 col-md-12 col-lg-4 img-div">
                                                            <img src={image} alt={name} className="img-fluid" />
                                                        </div>

                                                        <div className="col-12 col-md-12 col-lg-8">
                                                            <div className="main-title pt-1 pb-3">
                                                                            <h1>{name}</h1>
                                                                            <p>{description}</p>
                                                            </div>
                                                            <div className="d-f menu-price">
                                                                <div className="price">
                                                                    <h2>price :  {price}$</h2>
                                                                    <NavLink to="">
                                                                            <button className="btn btn-warning text-dark">order new</button>
                                                                    </NavLink>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet consectetur.</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>

                                        )
                                    })
                                }




                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Galleryreact
