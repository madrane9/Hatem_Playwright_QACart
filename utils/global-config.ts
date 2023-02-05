import { request } from '@playwright/test';

async function globalConfig() {
    const requestContext = await request.newContext();
    await requestContext.post("https://qacart-todo.herokuapp.com/api/v1/users/login", {
        data: {
            email: "test1234@test.de",
            password:"Test123"
        }
   
})


}

  

export default globalConfig;