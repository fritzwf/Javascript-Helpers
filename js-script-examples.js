////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                            //
//                              Various Javascript examples.                                  //                                                                                      //
//                                                                                            //
////////////////////////////////////////////////////////////////////////////////////////////////        
        
        console.log('Hello from node.js!');

        var item1 = {
            'title' : 'Systems Engineer',
            'dept' : 'Engineering'
        };
        var item2 = {
            'title' : 'Software Engineer',
            'dept' : 'Engineering'
        };
        var item3 = {
            'title' : 'Electrical Engineer',
            'dept' : 'Engineering'
        };
      
        var testArray = [];
      
        testArray.push(item1);
        testArray.push(item2);
        testArray.push(item3);
      
      
        var editorsModels = {};
        /**
        * @name selectOption
        * @memberOf editorsModels
        * @description The select option attributes used by the drop-down list.
        */
        editorsModels.selectOptions = {
          'name' : 'optionName',
          'value' : 'optionValue'
        };
      
        /**
        * @description Compare function to be used to sort editors that have an optionName as thier display
        * @method compareOptionName
        * @memberOf editorsModels
        * @param a -  Editor optionName a to compare
        * @param b -  Editor optionName b to compare against optionName a.
        * @private
        */
        editorsModels.compareOptionName = function(a, b) {
          if (a[editorsModels.selectOptions.name] < b[editorsModels.selectOptions.name]) {
            return -1;
          }
          if (a[editorsModels.selectOptions.name] > b[editorsModels.selectOptions.name]) {
            return 1;
          }
          return 0;
        };
      
      
        var getSelectOptions = function(item, opNameAttr, opValueAttr) {
          var rtnSelectOptions = [];
      
          if (item) {
            var fromArr = item;
      
            // If the user passed in a single object instead of an
            // array of objects, then build a list of options from
            // the object's properties.  Note: the client may need
            // to use the result returned from the UI to get the
            // actual value that the property represents.
            var i;
            if (!(item instanceof Array)) {
              fromArr = [];
              i = 0;
              for (var property in item) {
                fromArr[i++] = property;
              }
            }
      
            // Now build the name/value objects.
            for (i = 0; i < fromArr.length; i++) {
              var newOption = {};
              var optionName = null;
              var optionValue = null;
              // Check to see if both parameters are defined.
              if (opNameAttr && opValueAttr) {
                optionName = fromArr[i][opNameAttr];
                optionValue = fromArr[i][opValueAttr];
              }
              else
              // If only opNameAttr defined, then use that for both name and value.
              if (opNameAttr && !opValueAttr) {
                optionName = fromArr[i][opNameAttr];
                optionValue = fromArr[i];
              }
              else
              // If only opValueAttr defined, then use that for both name and value.
              if (!opNameAttr && opValueAttr) {
                optionName = fromArr[i][opValueAttr];
                optionValue = fromArr[i][opValueAttr];
              }
              else {
                // Make sure it's a primitive so we can use it as a name/value.
                // This can be truthy if it's not an object or null, which is ok.
                if (typeof fromArr[i] !== 'object' && typeof fromArr[i] !== 'function') {
                  optionName = fromArr[i];
                  optionValue = fromArr[i];
                }
              }
              newOption[editorsModels.selectOptions.name] = optionName;
              newOption[editorsModels.selectOptions.value] = optionValue;
              rtnSelectOptions.push(newOption);
            }
          }
          return rtnSelectOptions.sort(editorsModels.compareOptionName);
        };
      
        console.log('getSelectOptions testArray: ' + JSON.stringify(getSelectOptions(testArray, 'title', 'dept'), null, 3));
        console.log('getSelectOptions: ' + JSON.stringify(getSelectOptions(), null, 3));
      
        var jsArr = [
          "When you were young, what did you want to be when you grew up?",
          "What was your first video game played?",
          "What kind of car did you want when you were sixteen?",
          "What is the last name of your childhood friend?",
          "Where were you when you got engaged?",
          "What three words would you tell your childhood self?",
          "Where were you when you had your first kiss?",
          "Where were you when you first heard about 9/11?",
          "What was the name of your first pet?",
          "What was the processor in your first computer?",
          "Where were you when you had your first alcoholic drink?",
          "When you were young, what animal would best fit you?",
          "What was the name of the first real program you wrote?"
        ];
        
        // Run the random selection of 1 to 3.
        for (i = 0; i < 100; i++) {
          console.log('Math.floor() = ' + Math.floor( Math.random() * 3 ) + 1);
        }
        
        console.log('Math.random() = ' + Math.random());
        
        console.log('Date().getUTCMilliseconds() = ' + new Date().getUTCMilliseconds());
        console.log('Math.floor(new Date().getUTCMilliseconds()) = ' + Math.floor(new Date().getUTCMilliseconds()));
        console.log('Number(new Date()) = ' + Number(new Date()));
        console.log('Number(getTime()) = ' + Number(new Date().getTime()));
        console.log('toISOString() = ' + new Date().toISOString());
        console.log('toDateString() = ' + new Date().toDateString());
        console.log('toString() = ' + new Date().toString());
        var theDate = new Date('01-01-2016');
        console.log('getMonth()+1-getDate()-getFullYear() = ' + (theDate.getMonth()+1) + '-' + theDate.getDate() + '-' + theDate.getFullYear());
        theDate.setMonth(theDate.getMonth()-1);
        console.log('Subtract Month = ' + (theDate.getMonth()+1) + '-' + theDate.getDate() + '-' + theDate.getFullYear());
        
        var myArr = [];
        console.log('myArr has length: ' + myArr.length);
        
        var myStr = '';
        if (myStr) {
          console.log('myStr exists!');
        }
        else {
          console.log('myStr does NOT exist!');
        }
        
        var len = 140;
        var permsArr = [];
        for (i = 0; i < len; i++) {
          permsArr.push('perm' + i + (i < len - 1 ? ',' : ''));
        }
        var perms = '';
        for (i = 0; i < 140; i++) {
          perms += 'perm' + i + (i < len - 1 ? ', ' : '');
        }
        
        var htmlStatus = {
          '200' : 'OK',
          '201' : 'Created',
          '202' : 'Accepted',
          '203' : 'Non-Authoritative Information',
          '204' : 'No Content',
          '205' : 'Reset Content',
          '206' : 'Partial Content',
          '300' : 'Multiple Choices',
          '301' : 'Moved Permanently',
          '302' : 'Found',
          '303' : 'See Other',
          '304' : 'Not Modified',
          '305' : 'Use Proxy',
          '307' : 'Temporary Redirect',
          '400' : 'Bad Request',
          '401' : 'Unauthorized',
          '402' : 'Payment Required',
          '403' : 'Forbidden',
          '404' : 'Not Found',
          '405' : 'Method Not Allowed',
          '406' : 'Not Acceptable',
          '407' : 'Proxy Authentication Required',
          '408' : 'Request Timeout',
          '409' : 'Conflict',
          '410' : 'Gone',
          '411' : 'Length Required',
          '412' : 'Precondition Failed',
          '413' : 'Request Entity Too Large',
          '414' : 'Request-URI Too Long',
          '415' : 'Unsupported Media Type',
          '416' : 'Requested Range Not Satisfiable',
          '417' : 'Expectation Failed',
          '500' : 'Internal Server Error',
          '501' : 'Not Implemented',
          '502' : 'Bad Gateway',
          '503' : 'Service Unavailable',
          '504' : 'Gateway Timeout',
          '505' : 'HTTP Version Not Supported'
        };
      
        console.log(htmlStatus['405']);
      
        var statusCode =  [];
            
        statusCode[200] = 'OK';
        statusCode[201] = 'Created';
        statusCode[202] = 'Accepted';
        statusCode[203] = 'Non-Authoritative Information';
        statusCode[204] = 'No Content';
        statusCode[205] = 'Reset Content';
        statusCode[206] = 'Partial Content';
        statusCode[300] = 'Multiple Choices';
        statusCode[301] = 'Moved Permanently';
        statusCode[302] = 'Found';
        statusCode[303] = 'See Other';
        statusCode[304] = 'Not Modified';
        statusCode[305] = 'Use Proxy';
        statusCode[307] = 'Temporary Redirect';
        statusCode[400] = 'Bad Request';
        statusCode[401] = 'Unauthorized';
        statusCode[402] = 'Payment Required';
        statusCode[403] = 'Forbidden';
        statusCode[404] = 'Not Found';
        statusCode[405] = 'Method Not Allowed';
        statusCode[406] = 'Not Acceptable';
        statusCode[407] = 'Proxy Authentication Required';
        statusCode[408] = 'Request Timeout';
        statusCode[409] = 'Conflict';
        statusCode[410] = 'Gone';
        statusCode[411] = 'Length Required';
        statusCode[412] = 'Precondition Failed';
        statusCode[413] = 'Request Entity Too Large';
        statusCode[414] = 'Request-URI Too Long';
        statusCode[415] = 'Unsupported Media Type';
        statusCode[416] = 'Requested Range Not Satisfiable';
        statusCode[417] = 'Expectation Failed';
        statusCode[500] = 'Internal Server Error';
        statusCode[501] = 'Not Implemented';
        statusCode[502] = 'Bad Gateway';
        statusCode[503] = 'Service Unavailable';
        statusCode[504] = 'Gateway Timeout';
        statusCode[505] = 'HTTP Version Not Supported';
      
        console.log(statusCode['201']);
        console.log(statusCode[202]);

        
        // Array reduce.
        var numbers = [175, 50, 25];
        
        function myFunc(total, num) {
          return total - num;
        }

        console.log('Number reduce: ' + numbers.reduce(myFunc));
        
        // Let's create an object o from function f with its own properties a and b:
        let f = function () {
          this.a = 1;
          this.b = 2;
        }
        let o = new f(); // {a: 1, b: 2}
      
        // Add properties in f function's prototype
        f.prototype.b = 3;
        f.prototype.c = 4;
      
        // Do not set the prototype f.prototype = {b:3,c:4}; this will break the prototype chain
        // o.[[Prototype]] has properties b and c.
        // o.[[Prototype]].[[Prototype]] is Object.prototype.
        // Finally, o.[[Prototype]].[[Prototype]].[[Prototype]] is null.
        // This is the end of the prototype chain, as null,
        // by definition, has no [[Prototype]].
        // Thus, the full prototype chain looks like:
        // {a: 1, b: 2} ---> {b: 3, c: 4} ---> Object.prototype ---> null
      
        console.log(o.a); // 1
        // Is there an 'a' own property on o? Yes, and its value is 1.
      
        console.log(o.b); // 2
        // Is there a 'b' own property on o? Yes, and its value is 2.
        // The prototype also has a 'b' property, but it's not visited. 
        // This is called "property shadowing."
      
        console.log(o.c); // 4
        // Is there a 'c' own property on o? No, check its prototype.
        // Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.
      
        console.log(o.d); // undefined
        // Is there a 'd' own property on o? No, check its prototype.
        // Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
        // o.[[Prototype]].[[Prototype]] is null, stop searching,
        // no property found, return undefined.
      
        o = {
          a: 2,
          m: function() {
            return this.a + 1;
          }
        };
      
        console.log(o.m()); // 3
        // When calling o.m in this case, 'this' refers to o
      
        var p = Object.create(o);
        // p is an object that inherits from o
      
        p.a = 4; // creates a property 'a' on p
        console.log(p.m()); // 5
        // when p.m is called, 'this' refers to p.
        // So when p inherits the function m of o, 
        // 'this.a' means p.a, the property 'a' of p
      
        o = {a: 1};
      
        // The newly created object o has Object.prototype as its [[Prototype]]
        // o has no own property named 'hasOwnProperty'
        // hasOwnProperty is an own property of Object.prototype. 
        // So o inherits hasOwnProperty from Object.prototype
        // Object.prototype has null as its prototype.
        // o ---> Object.prototype ---> null
      
        var b = ['yo', 'whadup', '?'];
      
        // Arrays inherit from Array.prototype 
        // (which has methods indexOf, forEach, etc.)
        // The prototype chain looks like:
        // b ---> Array.prototype ---> Object.prototype ---> null
      
        f = function () {
          return 2;
        }
      
        // Functions inherit from Function.prototype 
        // (which has methods call, bind, etc.)
        // f ---> Function.prototype ---> Object.prototype ---> null
      
        function Graph() {
          this.vertices = [];
          this.edges = [];
        }
      
        Graph.prototype = {
          addVertex: function(v) {
            this.vertices.push(v);
          }
        };
      
        var g = new Graph();
        // g is an object with own properties 'vertices' and 'edges'.
        // g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
      
        var a = {a: 1}; 
        // a ---> Object.prototype ---> null
      
        var b = Object.create(a);
        // b ---> a ---> Object.prototype ---> null
        console.log(b.a); // 1 (inherited)
      
        var c = Object.create(b);
        // c ---> b ---> a ---> Object.prototype ---> null
      
        var d = Object.create(null);
        // d ---> null
        console.log(d.hasOwnProperty); 
        // undefined, because d doesn't inherit from Object.prototype
      
        class Polygon {
          constructor(height, width) {
            this.height = height;
            this.width = width;
          }
        }
      
        class Square extends Polygon {
          constructor(sideLength) {
            super(sideLength, sideLength);
          }
          get area() {
            return this.height * this.width;
          }
          set sideLength(newLength) {
            this.height = newLength;
            this.width = newLength;
          }
        }
      
        var square = new Square(2);
      
        console.log(g.hasOwnProperty('vertices'));
        // true
      
        console.log(g.hasOwnProperty('nope'));
        // false
      
        console.log(g.hasOwnProperty('addVertex'));
        // false
      
        console.log(g.__proto__.hasOwnProperty('addVertex'));
        // true
      
        function A(a) {
          this.varA = a;
        }
      
        // What is the purpose of including varA in the prototype when A.prototype.varA will always be shadowed by
        // this.varA, given the definition of function A above?
        A.prototype = {
          varA: null,  // Shouldn't we strike varA from the prototype as doing nothing?
              // perhaps intended as an optimization to allocate space in hidden classes?
              // https://developers.google.com/speed/articles/optimizing-javascript#Initializing-instance-variables
              // would be valid if varA wasn't being initialized uniquely for each instance
          doSomething: function() {
            // ...
          }
        };
      
        // B shall inherit from A:
        function B(a, b) {
          A.call(this, a);
          this.varB = b;
        }
        B.prototype = Object.create(A.prototype, {
          varB: {
            value: null, 
            enumerable: true, 
            configurable: true, 
            writable: true 
          },
          doSomething: { 
            value: function() { // override
              A.prototype.doSomething.apply(this, arguments); // call super
              // ...
            },
            enumerable: true,
            configurable: true, 
            writable: true
          }
        });
        B.prototype.constructor = B;
      
        var b = new B();
        b.doSomething();
      
        var nullCheck = {};
        for (i = 0; nullCheck && i < 100; i++) {
          console.log('iteration: ' + i);
          if (i === 10)
          {
            console.log('setting newOption to null on iteration: ' + i);
            nullCheck = null;
          }
        }
      
        function PersonA(age) {
            this.age = age;
            this.growOld = () => {
                this.age++;
            }
            console.log('Age: ' + this.age);
        }
        var personA = new PersonA(1);
        setTimeout(personA.growOld, 1000);
        setTimeout(function() { console.log(personA.age); }, 2000);
      
        function PersonB(age) {
            this.age = age;
            var _this = this;
            this.growOld = () => {
                _this.age++;
            }
            //console.log('Age: ' + this.age);
        }
        var personB = new PersonB(1);
        setTimeout(personB.growOld, 1000);
        setTimeout(function() { console.log(personB.age); }, 2000);
      
        var array1 = ['a', 'b', 'c'];
      
        array1.forEach(function(element) {
          console.log(element);
        });
      
        //var array2 = null;
      
        //array2.forEach(function(element) {
        //  console.log(element);
        //});
      
        var testVar = 1;
        function isGraphic(element) {
          return testVar && testVar === 3 || testVar === 1;
        }
      
        console.log('value1 of isGraphic:' + isGraphic(testVar));
        testVar = 3;
        console.log('value2 of isGraphic:' + isGraphic(testVar));
      
        var myNum = 1;
        if (myNum) {
          console.log('I found something in myNum');
        }
      
        myNum = 0;
        if (!myNum) {
          console.log('myNum is false!');
        }
      
        var myBool = undefined;
      
        if (!myBool) {
          console.log('myBool is false!');
        }
      
        var deviceType = {
          "Camera" : "Camera",
          "Door" : "Door",
          "Dynamic" : "Dynamic",
          "IR Lighting" : "IR Lighting",
          "Light" : "Light",
          "Motion Detector" : "Motion Detector",
          "Panic Button" : "Panic Button",
          "Power" : "Power",
          "Speaker" : "Speaker"
          }
      
        Object.keys(deviceType).forEach(function (key) {
              console.log( key , deviceType[key] );
        });
      
        var typeStr = deviceType['Motion Detector'];
        if (typeStr) {
        console.log('Found type: ' + typeStr); 
        }
        else {
          console.log('Did not find type!'); 
        }
      
        var testStr = 'Test One Two Three';
        var regex = new RegExp('/test/i');
        var searchStr = '/test/i';
        var foundMatch = testStr.match(regex) ? true : false;
        console.log('foundMatch: ' + foundMatch);
      
        foundMatch = testStr.search(/test/i) >= 0 ? true : false;
        console.log('foundSearchRegex: ' + foundMatch);
      
        foundMatch = testStr.search('Three') >= 0 ? true : false;
        console.log('foundSearchStr: ' + foundMatch);
      
        var testStr2 = 'test';
        regex = new RegExp(/ testStr2 /gi);
        foundMatch = testStr.search(regex) >= 0 ? true : false;
        console.log('foundSearchRegex: ' + foundMatch);
      
        const items = ['item1', 'item2', 'item3'];
        var nullArray = undefined;
      
        items.forEach(function(item) {
          console.log(item);
        });
      
        //nullArray.forEach(function(item) {
        //  console.log(item);
        //});
      
        var filterText = 'Test2';
      
        // Perform match ignoring case.
        let regEx = new RegExp(filterText, 'i');
      
        console.log('regEx.test: ' + regEx.test('Speaker 3 - Test2'));
      
        regEx = new RegExp('\^' + 'Siren', 'i');
      
        var myVar;
      
        if (myVar) {
          console.log('myVar is truthy');
        }
        else {
          console.log('myVar is falsy');
        }
      
        var testVar = null;
      
        function testMe(arg1, arg2) {
          if (arg1 !== undefined) {
            console.log('testVar is not undefined!');
          }  
        }
      
        testMe(null, null);
      
        testVar = true;
      
        var newVar = testVar ? 'testVar exists' : 'testVar is null or undefined';
      
        console.log('newVar = ' + newVar);
      
        Object.defineProperty(global, '__stack', {
        get: function() {
                var orig = Error.prepareStackTrace;
                Error.prepareStackTrace = function(_, stack) {
                    return stack;
                };
                var err = new Error;
                Error.captureStackTrace(err, arguments.callee);
                var stack = err.stack;
                Error.prepareStackTrace = orig;
                return stack;
            }
        });
      
        Object.defineProperty(global, '__line', {
        get: function() {
              return __stack[1].getLineNumber();
            }
        });
      
        Object.defineProperty(global, '__function', {
        get: function() {
              return __stack[1].getFunctionName();
            }
        });
      
        Object.defineProperty(global, '__funcLine', {
        get: function() {
              return __stack[1].getFunctionName() + ':' + __stack[1].getLineNumber();
            }
        });
      
        function foo() {
          console.log(__line);
          console.log(__function);
          console.log(__funcLine);
        }
      
        foo();
      
        var weeks = '';
        for (i = 0; i < 4680; i++) {
          weeks = weeks + '.';
        }
      
        // Each dot represents a week in a 90 year life.
        console.log(weeks);