# TestAiExamensprov
Examensprov i YH-kusr Testautomation och AI inom IT-test 2026

Uppgift:
You should share your repository with me (make it public)
Your repository should contain:

A pipeline which is running the tests.
Five tests for hoff.is/login page (and the store page when you logged in)
At least one test needs to be using the API
At least one test needs to be accessibility testing.
This isn’t something I’ve taught you, you will need to use playwright documentation or ChatGPT to do it.
You need to use PageObject models for the tests.
The following API's can be used to fetch product data for the store:

https://hoff.is/store2/api/v1/price/1 <- change number from 1-10
https://hoff.is/store2/api/v1/product/list <- to fetch a list of products in the store.

Use the API's to fetch data for assertions (expects), e.g.
Get price for Apple from API, make a purchase for Apple in UI.
Verify price is correct on receipt according to API.
