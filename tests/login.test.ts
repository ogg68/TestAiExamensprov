
//Username: any name..
//Password: STORE_USER_PWD

import { expect, test } from '@playwright/test';
import { LoginPage } from "../pages/loginPage";

//test.describe('Login', () => {
  
  let password: string;

  test('Verify Role', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // 1️⃣ Kontrollera att dropdown innehåller rätt alternativ
    //const expectedOptions = ['Business', 'Consumer']; // ändra enligt vad sidan faktiskt har text i inner-HTML
    //await loginPage.assertRoleOptions(expectedOptions);

    // 2️⃣ Kontrollera vilket värde som är valt som standard
    //set value first:
    await loginPage.setRole('Consumer');            // värdet som visas/"fyll i"/inner-html
    await loginPage.assertSelectedRole('consumer'); // ändra enligt default-värdet på sidan value-namnet (typ id)
  });

  test('Failed Login wrongPwd', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('felanvändare', 'felLösenord', "Consumer");

    //await loginPage.assertFailedLogin();
    //await expect(page.getByTestId('error-message')).toContainText('Incorrect password');
    await expect(page.getByTestId('error-message')).toContainText("Incorrect password");
  });

  test('Failed Login fieldMissing', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('', 'felLösenord');

    //await loginPage.assertFailedLogin2();
    await expect(page.getByTestId("error-message")).toHaveText("Please fill in all fields.");
  });

  test.only('Succesful Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    if (process.env.STORE_USER_PWD !== undefined){
        password = process.env.STORE_USER_PWD;
    }
    await loginPage.login('joe', password, "Consumer");
    
    //await loginPage.assertSuccessfulLogin();
    //await expect(page).toHaveURL("/store2/");
  });

  test("logout", async({page}) => {
    //first do login:
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    if (process.env.STORE_USER_PWD !== undefined){
        password = process.env.STORE_USER_PWD;
    }
    await loginPage.login('joe', password, "Consumer");
    await expect(page).toHaveURL("/store2/");

    //then logout:
    await loginPage.logout();
    await expect(page).toHaveURL("/login/");
  })

//});
