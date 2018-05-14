import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/recipeActions';
import RecipesList from '../components/RecipesList';

class RecipesContainer extends Component {

  componentDidMount() {
    // if (this.props.recipes.length === 0) {
      console.log('in component did mount')
      this.props.actions.fetchRecipes()
    // }
  }

  render() {
    return(
      <div>
        <div>
          <button className="newRecipeButton">New Recipe</button>
        </div>
        <RecipesList recipes={this.props.recipes} />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer);
