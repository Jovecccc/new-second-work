
// way 1
var array = new Array(1,2,3,4,5,6,6,6,6,6);

var index = function (array)
{
    var array1 = new Array();
    for(i=0; i<=array.length; i++)
    {
        if(array1.indexOf(array[i]) === -1)
        {
            array1.push(array[i])
        }
    }
    return array1;
}

// way 2
var array = new Array(1,2,3,4,5,6,6,6,6,6);

var index = function (array)
{
    var set = new Set()
    for(i=0; i<array.length; i++)
    {
        set.add(array[i]);
    }
    return set;
}

console.log(set);

// way 3
var array = new Array(1,2,3,4,5,6,6,6,6,6);

var index = function (array)
{
    var set = new Set()
    for(i=0; i<array.length; i++)
    {
        if(set.has(array.length[i]) === false)
        {
            set.add(array[i])
        }
    }
    return set;
}
