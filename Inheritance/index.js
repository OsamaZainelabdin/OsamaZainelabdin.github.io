(function() {
    
     Array.prototype.bubbleSort =
            function () {
                let inputArr = this;
                let len = inputArr.length;
            let swapped;
            do {
                swapped = false;
                for (let i = 0; i < len; i++) {
                    if (inputArr[i] > inputArr[i + 1]) {
                        let tmp = inputArr[i];
                        inputArr[i] = inputArr[i + 1];
                        inputArr[i + 1] = tmp;
                        swapped = true;
                    }
                }
            } while (swapped);
            return inputArr;
        }
    /**
     * Adds the bubble sort as a inherited function on arrays.
     * @returns {string} filteredstring. 
     
    String.prototype.filter = function(word) {
        return this.replace(word, '');
    }*/
	
	 String.prototype.filter = function (str) {
            let newStr = this;
            for (i = 0; i < str.length; i++) {                
                if (newStr.includes(str[i])) {
                    newStr = newStr.replace(str[i], '');                    
                }
            }
            newStr= newStr.replace('  ', '');
            return newStr;
        }
		
    /**
     * Asserts the array result.
     */
    var arrayAssert = function() {
        var arr = [5,5,4,6,7,1];
        var expected = [1, 4, 5, 5, 6, 7];
        var found = arr.bubblesort();
        context("Given Array: (" + arr + ") after sort should be: (" + expected + ')', function() {
            it("the result is: " + found, function() {
                assert.deepEqual(expected, found);
            });
        });
    };
    /**
     * Asserts the string result.
     */
    var stringAssert = function() {
        var str = "This is not good.";
        var expected = "This is good.";
        var found = str.filter('not');
        context("Given Array: (" + str + ") after filtered should be: (" + expected + ')', function() {
            it("the result is: " + found, function() {
                assert.equal(expected, found);
            });
        });
    };
    var Person = function() {};
    Person.prototype.initialize = function(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function() {
        return this.name + ", " + this.age + " years old.";
    } 

    {
        var Student = function() {};
        Student.prototype = new Person();
        Student.prototype.learn = function(subject) {
            return this.name + " just learned " + subject;
        }
    } 

    {
        var Teacher = function() {};
        Teacher.prototype = new Person();
        Teacher.prototype.teach = function(subject) {
            return this.name + " is now teaching " + subject;
        }
    }
    /**
     * Asserts the student result.
     */
    var studentAssert = function() {
        var me = new Student();
        me.initialize("Osama", 32);
        var found = me.learn("Inheritance");
        var expected = 'Osama just learned Inheritance';
        context("Given Student Details: (" + me.describe() + ") after filtered should be: (" + expected + ')', function() {
            it("the result is: " + found, function() {
                assert.equal(expected, found);
            });
        });
    };

    /**
     * Asserts the teacher result.
     */
    var teacherAssert = function() {
        var me = new Teacher();
        me.initialize("John",", 35);
        var found = me.teach("WAP");
        var expected = 'John is now teaching WAP';
        context("Given Teacher Details: (" + me.describe() + ") after filtered should be: (" + expected + ')', function() {
            it("the result is: " + found, function() {
                assert.equal(expected, found);
            });
        });
    };
    arrayAssert();
    stringAssert();
    studentAssert();
    teacherAssert();
})();
