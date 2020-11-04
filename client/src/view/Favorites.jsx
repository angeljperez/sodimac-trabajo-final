import React, {useState, useEffect} from 'react';
import HeaderSection from '../components/HeaderSection'


const Favorites = () =>{


    const [favorites, setFavorites] = useState([]);

    const fetchData = async ()=>{
      const url = 'localhost:5000/api/favorites';
      const additionalSetting = {
        "header": {
          "method": "GET",
          "Content-type": "application/json",
          
        }
      };
  
      const res = await fetch( url, additionalSetting); 
      const json = await res.json();
      const data = json.data;
      console.log('--data--', data);
  
      setFavorites(data);
  
    };
     

    
    return(
        
        <>
            
            <HeaderSection 
                title='Favoritos' 
                description='Listado de pokemones favoritos'
                view='favorites'
            />
            
            {
                fetchData();
                favorites.map( (item, index)=>{
                    console.log(item);

                return(
                    
                    <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                         <p>{`${item.pokemonName}`}</p>
                         <p>{`${item._id}`}</p>
                         <p>{`${item.pokemonName}`}</p>
                    </div>
                    </div>
                  
                

                )

                })


            }
        </>      
    )

}

export default Favorites; 



