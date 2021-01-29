Testing :

1. Jest for assertions
2. Enzyme for snapshot testing
3. Selenium/Puppeteer for functional testing
4. Blazemeter for performance testing

Unit Testing:-

Test if components(Test Filter, Aggrid, button) renders without crashing.

Simulate click action for HighligtEven/Odd button using enzyme and check if the right styles are applied to id column.

Mock http request and resolve stub response . Check if the grid loads with resolved data.

Simulate click on aggrid header using enzyme and check the order of sorting.

Get the Instance of the title filter, and setState with a value. Check if the grid data returned correct.

Create spanshot and test if it matches the snapshot.

Functional testing:
Use Selenium/Puppeteer to record all the the flows. We can export these tests to different extentions and play back

Performance Testing:
We can load the scripts to blazemeter and it will give us various metrics of how fast is our application.
