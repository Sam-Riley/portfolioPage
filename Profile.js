import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'


class Profile extends React.Component {
    constructor(props){
        super(props)
    }
    deleteRecipe() {
        console.log("Delete button firing off delete function")
    }
    render() {
        // var savedRecipes = this.state.favorites.map((recipe, i) =>{
        //     return (
        //         <li key={i}>
        //
        //           <div className="card">
        //                 <div className="row">
        //                   <div className="col-sm-6 cardContainer">
        //                     <img className="cardContainer img-responsive" src={recipe.food_image} alt="Recipe image "/>
        //                   </div>
        //                   <div className="col-sm-6">
        //                     <h4 className="cardInfo card-title">{recipe.recipe_name}</h4><br />
        //                     <a href={recipe.instruction}>Click here for recipe!</a>
        //                         <div className="row"><br />
        //                             <div className="col-sm-12">
        //                                 <button onClick={()=>this.savedRecipes(recipe)}className="btn btn-default">Save</button>
        //                             </div>
        //                         </div>
        //                   </div>
        //                 </div>
        //             </div>
        //         </li>
        //     )
        // })

        return(
            <div className='viewSection'>
            <h1>Search Results</h1><br />
            <div className="col-sm-11">
                <ol>
                <li>
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6 cardContainer">
                                <img className="cardContainer img-responsive" src="http://dreamatico.com/data_images/food/food-5.jpg" alt="Recipe image "/>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="cardInfo card-title">Saved recipe</h4><br />
                                <a href=" ">Click here for recipe!</a>
                                <div className="row"><br />
                                    <div className="col-sm-12">
                                        <button onClick={()=>this.deleteRecipe()} className="btn btn-default">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="card">
                        <div className="row">
                            <div className="col-sm-6 cardContainer">
                                <img className="cardContainer img-responsive" src="https://blogs.uoregon.edu/natewoodburyaad250/files/2012/10/PSD_Food_illustrations_3190_pancakes_with_butter-1wi1tz5.jpg" alt="Recipe image "/>
                            </div>
                            <div className="col-sm-6">
                                <h4 className="cardInfo card-title">Saved recipe</h4><br />
                                <a href=" ">Click here for recipe!</a>
                                <div className="row"><br />
                                    <div className="col-sm-12">
                                        <button onClick={()=>this.deleteRecipe()} className="btn btn-default">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                    {/* {savedRecipes} */}
                </ol>
            </div>
            </div>
        )
    }
}

export default Profile
