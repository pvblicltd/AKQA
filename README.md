AKQA-TEST
====

Test for AKQA  
By James A B Gray  
23rd September 2014  


How I complted the test:  

1. Created a repo on github and set up remote origin.

3. Created a project file in sumblime text and commited to repo (normally I would create a git ignore file however this project dicated all code and configs be pushed).

2. Created a file structure based on src folder for dev, a test folder to run tests in dev and prior to crating the distruibution code and a public folder (essentially dist folder) where the css & js will be uglified via grunt as well as the supplied folder containing the supplied files for the project.

3. Created the bower.json and .bowerrc files to install jquery & modinizer in my src/libs directory. Ran bower intall. *NOTE: I also installed jQuery Migrate so as to make sure backwards compatibility with IE8 and lower. I'm assuming this is OK as its not a plugin as such

4. Created the node package.json file to install the dependencies for SASS, concat and uglify that grunt will need as well as intern.js for testing.

5. Ran npm install and pushed the node modules to git (I normally would not push the node modules to git however for the sake of transparency I have done).

