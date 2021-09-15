const ingredients = [
    "1 Maggi Noddles",
    "1 Onion",
    "1 Tometo",
    "1 bowl mix vegetables",
    "1 tablespoon gingle and garlic paste",
    "1 teaspoon garam masala",
    "1 teaspoon red chili Powder",
    "2 tablespoon butter or Oil",
    "Fresh coriander"
];

function IngredientsList({items}){
    return React.createElement(
        "ul",
        {className:"ingredients-list"},
        items.map( (ingredient,index) => React.createElement("li",{key:index},ingredient))
    );
}

ReactDOM.render(React.createElement(IngredientsList,{items:ingredients},null) ,document.getElementById("root"));