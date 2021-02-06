## James Wyn

# Galactic Age Checker


### Description
This is my fifth week project for Epicodus.  The objective is to take a given age and return the comparrison age for Mercury, Venus, Mars and Jupiter. This also returns the years the user would have left to live based on average life expectancy.

### Technologies Used
* Bootstrap
* JavaScript
* jQuery
* JSON
* HTML
* CSS
* MD

## Setup/Installation Requirements

### Without Github template clone:
* Clone Repo
* Delete .git if needing a clean commit history
* Initilize git
* Add remote repository to new git
* Make first commit only adding .gitignore to commit
* Open new repo to begin npm initilization

### With Github
* Press use this template
* Create new repo
* Clone new repo down to
* Open new repo to begin npm initilization

### Npm Initilization
* Verify package.json has correct npm packages for needs
* Modify title on line 18 of webpack.config.js
* Modify title on line 2 of package.json
* Modify description on line 19 of package.json
* Modify title on line 2 if package-lock.json
* Run ```npm init -y```
* Run ```npm install```
* Verify install works by running ```npm run test``` and ```npm run build```

* * *

## Link where to find my GitHub link

*https://github.com/Thisisjameswyn/GalacticAge


### Specs

* Describe: GalAge\
Test: "should correctly construct an object with given age"\
Expect(testAge.age).toEqual(50)

* Test: "should correctly construct an object with average age"\
Expect(testAge.averageAge).toEqual(80)

* Test: "should correctly construct an object with an age and average age array"\
Expect(testAge.ageArray).toEqual([50, 80])

* Describe: GalAge.getMerc()\
Test: "should correctly convert given age and average age to mercury years"\
Expect(testAge.getMerc()).toEqual([208, 333])

* Describe: GalAge.getVenus()\
Test: "should correctly convert given age and average age to venus years"\
Expect(testAge.getVenus()).toEqual([80, 129])

* Describe: GalAge.getMars()\
Test: "should correctly convert given age and average age to mars years"\
Expect(testAge.getMars()).toEqual([26, 42])

* Describe: GalAge.getJupiter()\
Test: "should correctly convert given age and average age to jupiter years"\
Expect(testAge.getJupiter()).toEqual([4, 6])

## License
[MIT License](https://opensource.org/licenses/MIT)
&copy; James Wyn 2021