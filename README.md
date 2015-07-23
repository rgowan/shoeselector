# WDI12 Project 3 - Shoe Selector

In the final project of my Web Development Immersive course, for the first time we were given full autonomy to decide the idea and the tech we wanted to use. I really wanted to identify a problem I had in my life and create a solution to fix this problem.

I am extremely into fashion mostly in shoes and spend a coupe of hours a week browsing online retailers to find new products I might like. I find the process of doing this quite painful. You are greeted with hundreds of different products at once with sometimes 10+ pages. I really wanted to create a different way people could browse through products but in a simpler, less painful way.

#####[Visit Website](http://www.shoeselector.herokuapp.com) for best viewing quality, please access on a mobile or a small web browser window

<!--![image](http://i.imgur.com/olYcuEw.png)-->
<img src="http://i.imgur.com/olYcuEw.png" width="350">

Shoe Selector is a mobile-first Ruby on Rails app with a Postgres database, using Backbone.js for the front-end.

#### Gems:
- devise ‘3.4.1’
- acts_as_votable ‘0.10.0’ 
- omniauth ‘1.2.2’
- omniauth-facebook ‘2.0.1’
- rmagick ‘2.15.0’
- kaminari ‘0.16.3’
- httparty (api gem) ‘0.13.5’
- active_model_serializers ‘0.9.3’

#### The backbone library also includes:
- require.js
- text.js
- underscore.js
- jQuery
- backbone.paginator.js
- jquery.jTinder.js
- jquery.transform2d.js
- jquery_ujs.js

---

###### Shoe Selector uses the Popshops Rakuten API which allows access to product feeds from the top shoe outlets in the UK. This information is gathered and stored in the database via a custom rake task.

###### Users are able to sign in via Facebook and are shown one product at a time with the option to ‘like’ or ‘dislike’ the product, this decision can either be made by using the buttons or swiping on the screen.

![image](http://i.imgur.com/mcWhMbX.png)

###### Once the decision is made, the next product appears and the process is repeated. All liked projects are saved into the users wishlist, where they are given more information about the product. 

![image](http://i.imgur.com/V3GsZ1l.png)

###### Users are able to review and compare all the products they have liked with the ability to remove any they don’t want anymore. Clicking on the button which displays the price will redirect the user to an online outlet where they can purchase the product.

![image](http://i.imgur.com/qNKoBol.png)

---

 This project was 2 weeks long, i enjoyed working on it. Overall i am extremely happy with what i was able to create.

#### Here are some of the things i wish to implement in my spare time:

- improve the custom rake task to update products in the database
- make app fully responsive for larger screens
- increase the amount of products that are gathered
- implement women’s shoes
- release the app on the apple app store
