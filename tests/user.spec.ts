
import {test, expect} from '@playwright/test';

test("should be able to login using the API", async({request})=>{

    const response = await request.post("https://qacart-todo.herokuapp.com/api/v1/users/login", {
    data: {
            "email": "test12345@test.de",
            "password": "Test123"

    },   
    })
    const body = await response.json()
    const token = body.access_token

    console.log(token);
});