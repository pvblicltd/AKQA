AKQA-TEST
====

Test for AKQA  
By James A B Gray  
23rd September 2014  


How I complted the test:  

1. Created a repo on github and set up remote origin.

3. Created a project file in sumblime text and commited to repo (normally I would create a git ignore file however this project dicated all code and configs be pushed).

2. Created a file structure based on src folder for dev, a test folder to run tests in dev and prior to creating the distruibution code; and finaly a public folder (essentially dist folder) where the css & js will be uglified via grunt as well as the supplied folder containing the supplied files for the project.

3. Created the bower.json and .bowerrc files to install jquery & modinizer in the src/libs directory. Ran bower install. *NOTE: I also installed jQuery Migrate so as to make sure backwards compatibility with IE8 and lower. I'm assuming this is OK as it's not a plugin just an extension of the jquery core.

4. Created the node package.json file to install the dependencies for SASS, concat, copy, image compression, html build and uglify that grunt will need as well as intern.js for testing.

5. Ran npm install and pushed the node modules to git (I normally would not push the node modules to git however for the sake of transparency I have done).

6. Created the Gruntfile and set up the build and watch processes. This includes image compression, js uglify and SCSS compression as well as building the final HTMl dist file. I will add the tests later.

7. Created the initial index.html template, scss structure and 12 col grid (this will need a gutterless option looking at the layout).

8. Completed basic 12 col grid and applied, have added a meadia query breakpoint and began a mobile view.

9. For accessability I am using fieldsets, labels and inputs for the cart information, fo just the information ipututs these are disbaled. All form actions have fake urls that will work if Javascript is turned off.


To do:

1. Correct page meta tags  
2. Complete the cart styling and layout  
3. Add the javscript/jquery for the form actions
4. Write the tests utilising intern.js and browser stack & grunt 
5. Run the tests  
6. Debug  


File Structure explantion

- public/ * Where grunt outpust the distribution code (grunt build)

- src/ * Where dev takes place thsi inculdes the uncompress js and scsss

- tests/ * to be completed





