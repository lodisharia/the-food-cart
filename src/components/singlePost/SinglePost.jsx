import './singlePost.css'

export default function SinglePost() {
    return (
        <div className = 'singlePost'>
            <div className = 'singlePostWrapper'>
                <img className = 'singlePostImage'
                src = 'https://savvybites.co.uk/wp-content/uploads/2019/07/Soft-chewy-Chocolate-chip-cookies-1-of-1.jpg'>

                </img>
                <h1 className = 'singlePostTitle'>
                    Vegan Chocolate Chip Cookies Recipe
                    <div className = 'singlePostEdit'>
                        <i className = 'singlePostIcon far fa-edit'></i>
                        <i className = 'singlePostIcon far fa-trash-alt'></i>
                    </div>
                </h1>
                <div className = 'singlePostInfo'>
                    <span className = 'singlePostAuthor'>
                        Author: <b>Lizi Odisharia</b>
                    </span>
                </div>
                <p className = 'singlePostDesc'>
                Do you ever get home from vacation with a fierce craving for freshly made home baked goods but have exactly no eggs and zero butter in the fridge? If that sounds familiar, this vegan chocolate chip cookie situation is for you!
                <h3 className = 'ingredientsTitle'>
                    Ingredients
                </h3>
                <ul className = 'singleIngredients'>
                    <li>2 cups all purpose flour 9 oz</li>
                    <li>1 1/2 tsp baking powder</li>
                    <li>1 /2 tsp baking soda</li>
                    <li>1 tsp kosher salt</li>
                    <li>1/2 cup coconut oil, melted 4 oz</li>
                    <li>1/3 cup tahini 3.15 oz</li>
                    <li>6 tbsp water</li>
                    <li>2 tsp pure vanilla extract</li>
                    <li>1 1/4 cups tightly packed dark brown sugar 9.35 oz</li>
                    <li>10 oz 70% vegan chocolate, chopped</li>
                </ul>
                <h3 className = 'instructionsTitle'>
                  Instructions  
                </h3>
                    <ol className = 'singleInstructions'>
                        <li>Heat the oven to 350°F. Line two baking sheets with parchment paper. In a large bowl, whisk together the flour, baking powder, baking soda, and salt.</li>
                        <li>In another bowl, whisk together the coconut oil, tahini, water, and vanilla until smooth. Add the sugar and whisk until combined.</li>
                        <li>Stir in the dry ingredients until just combined then stir in the chocolate.</li>
                        <li>Portion the dough into 3 tablespoon balls. If the cookie dough seems soft, refrigerate for 10 minutes.</li>
                        <li>Bake, one pan at at a time for 12 minutes, until the edges have set but the centers are gooey. Cool on the pan on a wire rack for 20 minutes, or until the edges and bottoms are firm to the touch. Enjoy warm or at room temp. Cookies will keep in an airtight container at room temp for up to 3 days.</li>
                    </ol>
                </p>
            </div>
        </div>
    )
}
