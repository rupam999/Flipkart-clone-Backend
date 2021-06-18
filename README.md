# Flipkart Clone Backend

## Authors

- [@rupam999](https://www.github.com/rupam999)

## API Reference

#### USER Registration

```http
  POST /api/user/register
```

| Parameter  | Type     | Description                         |
| :--------- | :------- | :---------------------------------- |
| `name`     | `string` | **Required** Name of the user       |
| `email`    | `string` | **Required Unique** email id        |
| `password` | `string` | **Required** user password          |
| `userType` | `string` | **Required (seller, buyer, admin)** |

```
    Response (Success)
    {
        "message": "success",
        "id": "60cc127d3f140f2299d47494",
        "name": "Sample",
        "email": "user@in.com",
        "userType": "buyer",
        "token": "token"
    }

    Error Message
    {
        "message": "Account Not Approved"
    }

    {
        "message": "Internal Server Error"
    }

    {
        "message": "Wrong Password"
    }

    {
        "message": "No User Found"
    }

```

#### USER Login

```http
  POST /api/user/login
```

| Parameter  | Type     | Description         |
| :--------- | :------- | :------------------ |
| `email`    | `string` | **Required**        |
| `password` | `string` | **Required Unique** |

```
    Response (Success)
    {
        "message": "success",
        "id": "60cc127d3f140f2299d47494",
        "name": "Sample",
        "email": "user@in.com",
        "userType": "buyer",
        "token": "token"
    }

    Error Message
    {
        "message": "Account Not Approved"
    }

    {
        "message": "Internal Server Error"
    }

    {
        "message": "Wrong Password"
    }

    {
        "message": "No User Found"
    }
```

## PRODUCT

- Upload Product Details @ **/api/product/add/details** takes (name, brand, category, description, mrp (Number), price (Number), origin, manufacturer, url) returns a message

- /product/find (optional (search, page))
- /product/topProduct
- /product/everydaySale (limit deafult 5)
