# API Documentation

## USER

-   Register @ **/api/user/register** takes (name, email (unique), password, userType (seller, buyer, admin))
-   Login @ **/api/user/login** takes (email, password)

## PRODUCT

-   Upload Product Details @ **/api/product/add/details** takes (name, brand, category, description, mrp (Number), price (Number), origin, manufacturer, url) returns a message
