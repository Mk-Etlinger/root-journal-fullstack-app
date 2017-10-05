import React from 'react';

export default ({ mealsByDate }) => {    
    const mapDates = Object.keys(mealsByDate).map((date, i) => {       
        let mealsList = mealsByDate[date].map(meal => {
            return (            
                <div key={meal.id}>                    
                    <p>{meal.meal_type + ': ' + meal.ingredients.map(ing => ing.name)}</p>                
                </div>
            )
        })        
        return (
            <div key={i}>
                <h3>{date}</h3>
                {mealsList}
            </div> 
        )
    })
    return (
            <div>{mapDates}</div>
        )
}