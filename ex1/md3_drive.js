var slow = function (msg){
    console.log('dan said:' + msg);
};

exports.slowly = slow;

exports.fast = function (msg){
    console.log('dan cried:' +msg);
};