
# API SPECS
Membuat rest API menggunakan Sequelize sebagai ORM nya


## Create Product

Request :
- Method : POST
- Endpoint : "/api/products"
- Headers : 
    - Content-Type : application/json
    - Accept : application/json

- Body :

```json
{
    "name": "string",
    "price": "number",
    "description": "text"
}
```

Response: 
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "number",
        "name": "string",
        "price": "number",
        "description": "text"
    }
}
```

## Get Product

Request :
- Method : GET
- Endpoint : "/api/products/:id"
- Headers :
    - Accept : application/json

Response: 
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "number",
        "name": "string",
        "price": "number",
        "description": "text"
    }
}
```

## Update Product

Request :
- Method : PUT
- Endpoint : "/api/products/:id"
- Headers : 
    - Content-Type : application/json
    - Accept : application/json

- Body :

```json
{
    "name": "string",
    "price": "number",
    "description": "text"
}
```

Response: 
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "number",
        "name": "string",
        "price": "number",
        "description": "text"
    }
}
```

## Delete Product

Request :
- Method : DELETE
- Endpoint : "/api/products/:id"
- Headers : 
    - Accept : application/json

Response: 
```json
{
    "code": "number",
    "status": "string",
}
```

## List Product

Request :
- Method : GET
- Endpoint : "/api/products"
- Headers : 
    - Accept : application/json

Response: 
```json
{
    "code": "number",
    "status": "string",
    "data": [
        {
        "id": "number",
        "name": "string",
        "price": "number",
        "description": "text"
    },
    {
        "id": "number",
        "name": "string",
        "price": "number",
        "description": "text"
    }
    ]
}
```
