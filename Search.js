import React from 'react'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'



class Search extends React.Component {
    constructor(props) {
        super(props)
        this.searchResults = this.searchResults.bind(this)
        this.savedRecipes = this.savedRecipes.bind(this)
        this.state = {
            recipes: [],
            favorites: [],
        }
    }
    componentDidMount() {
        fetch('/api/search?food=' + sessionStorage.getItem('searchValue'))
        .then(response => response.json())
        .then(response => this.setState({recipes: response}))
    }

    searchResults(e) {
    sessionStorage.clear('searchValue')
    sessionStorage.setItem('searchValue', this._inputSearch.value)

    console.log(food)
    var food = this._inputSearch.value;
    console.log(food);
    fetch('/api/search?food=' + food)
    .then(response => response.json())
    .then(response => this.setState({recipes: response}))
    e.preventDefault();
    }

    savedRecipes(recipe){
        let updatedRecipes = this.state.favorites
        updatedRecipes.push({
            recipe: recipe.recipe_name,
            food_image: recipe.food_image,
            instruction: recipe.instruction,
        })
        this.setState({
            favorites: updatedRecipes
        })
        console.log(updatedRecipes)
    }
    addToFavorites() {
    //     fetch('/api/favorites', {
    //        method: 'POST',
    //        body: JSON.stringify({
    //            token: sharedState().user_token,
    //            id: this.state.recipe.food_id,
    //            recipe: this.state.recipe.recipe_name,
    //            instruction: this.state.recipe.instruction,
    //        }),
    //    })
    //    .then(response => response.json())
    //    .then(this.handleAddToFavorites)
    }
    handleAddToFavorites() {

    }

    render() {
        // console.log(this.state.recipes)
        // console.log(this.state.favorites)

        var newRecipes = this.state.recipes.map((recipe, i) =>{
            return (
                <li key={i}>

                  <div className="card">
                        <div className="row">
                          <div className="col-sm-6 cardContainer">
                            <img className="cardContainer img-responsive" src={recipe.food_image} alt="Recipe image "/>
                          </div>
                          <div className="col-sm-6">
                            <h4 className="cardInfo card-title">{recipe.recipe_name}</h4><br />
                            <a href={recipe.instruction}>Click here for recipe!</a>
                                <div className="row"><br />
                                    <div className="col-sm-12">
                                        <button onClick={()=>this.savedRecipes(recipe)} className="btn btn-default">Save</button>
                                    </div>
                                </div>
                          </div>
                        </div>
                    </div>

                </li>
            )
        })
        return(
            <div>
                <form onSubmit={this.searchResults}>
                    <input type="text" ref={(a) => this._inputSearch = a} placeholder="search recipes..."></input>
                    <button type="submit">search recipe</button>
                </form>

                <h1>Search Results</h1><br />
                <div className="col-sm-11">
                    <ol>
                        {newRecipes}
                    </ol>
                </div>
            </div>
        )
    }
}
export default Search
