# Unserializer JS

**Unserialize a PHP Serialized String into a Javascript-Friendly Object (JSON)**

**Here is an example:**

####Here is some PHP Serialized Data:####
```
var someData = `a:5:{i:0;a:3:{s:4:"Name";s:18:"Person McPerson";s:5:"Notes";s:13:"Great Example";}i:1;a:3:{s:4:"Name";s:7:"Bobby Smith";s:5:"Notes";s:10:"Cool Example";}i:2;a:3:{s:4:"Name";s:21:"Emma Taylor"; s:5:"Notes";s:10:"Wonderful Example";}i:3;a:3:{s:4:"Name";s:13:"Tania Miles";s:5:"Notes";s:10:"Fantastic Example";}i:4;a:3:{s:4:"Name";s:19:"Timothy Thompson";s:5:"Notes";s:10:"Amazing Example";}};`;
```

####Now let's say the data above is set as a string to the variable "someData" and pass it into the function like so:####

```
unserializer(someData);
```

####Here is the result you will get:####

```
[
    [
        "Name",
        "Person McPerson",
        "Notes",
        "Great Example"
    ],
    [
        "Name",
        "Bobby Smith",
        "Notes",
        "Cool Example"
    ],
    [
        "Name",
        "Emma Taylor",
        " Notes",
        "Wonderful Example"
    ],
    [
        "Name",
        "Tania Miles",
        "Notes",
        "Fantastic Example"
    ],
    [
        "Name",
        "Timothy Thompson",
        "Notes",
        "Amazing Example"
    ]
]
```

**That's it! The next challenge is figuring out how to convert the Javascript-friendly object back to a PHP serialized object. Enjoy!**
