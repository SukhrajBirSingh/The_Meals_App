import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import categoriesScreen from '../screens/categoriesScreen';
import categoriesMealsScreen from '../screens/categoriesMealsScreen';
import mealDetailScreen from '../screens/mealDetailScreen';


const MealsNavigator = createStackNavigator({

    Categories : categoriesScreen,
    CategoriesMeals : categoriesMealsScreen,
    MealDetail : mealDetailScreen


});
export default createAppContainer(MealsNavigator); 