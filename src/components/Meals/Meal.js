import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
const Meal = (props) => {
  return (
    <section>
    <MealsSummary/>
    <AvailableMeals/>
    </section>
  );
};
export default Meal;
