export const schema = {
    "models": {
        "Todo": {
            "name": "Todo",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "Todos",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        },
        "FoodPost": {
            "name": "FoodPost",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "price": {
                    "name": "price",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "category": {
                    "name": "category",
                    "isArray": false,
                    "type": {
                        "enum": "FoodCategory"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "cuisineTags": {
                    "name": "cuisineTags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "cookingTime": {
                    "name": "cookingTime",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "cookingDate": {
                    "name": "cookingDate",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "uploadedImageUrl": {
                    "name": "uploadedImageUrl",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "servings": {
                    "name": "servings",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                }
            },
            "syncable": true,
            "pluralName": "FoodPosts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ]
        }
    },
    "enums": {
        "FoodCategory": {
            "name": "FoodCategory",
            "values": [
                "NONVEG",
                "VEG"
            ]
        }
    },
    "nonModels": {},
    "version": "7de96d7f5aa72268e81a7d46045e7a62"
};