//点击切换背景图片
// var arr = ["red", "green", "blue", "yellow", "brown", "violet"];
// function start(arr) {
//     var arr = arr.slice();
//     var len = arr.length;
//     var temp, random_index;
//     while (len != 0) {
//         random_index = Math.round(0 + (len - 1 - 0) * Math.random());
//         temp = arr[random_index];
//         arr[random_index] = arr[len - 1];
//         arr[len - 1] = temp;
//         --len;
//     }
//     return arr;
// }

// function start() {
//
//     var arr = ["red", "green", "blue", "yellow", "brown", "violet"];
//
//     function shuffleArray(arr) {
//         var arr = arr.slice();
//         var len = arr.length;
//         var temp, random_index;
//         while (len != 0) {
//             random_index = Math.round(0 + (len - 1 - 0) * Math.random());
//             temp = arr[random_index];
//             arr[random_index] = arr[len - 1];
//             arr[len - 1] = temp;
//             --len;
//         }
//         return arr;
//     }
//     var car=shuffleArray(arr);
//     for (a in car){
//         console.log(car[a])
//     }
//
// }
let fsm = new StateMachine({
    init: 'solid',
    transitions: [
        {name: 'melt', from: 'solid', to: 'liquid'},
        {name: 'freeze', from: 'liquid', to: 'solid'},
        {name: 'vaporize', from: 'liquid', to: 'gas'},
        {name: 'condense', from: 'gas', to: 'liquid'}
    ],
    // methods: {
    //     onMelt: function () {
    //         console.log('I melted')
    //     },
    //     onFreeze: function () {
    //         console.log('I froze')
    //     },
    //     onVaporize: function () {
    //         console.log('I vaporized')
    //     },
    //     onCondense: function () {
    //         console.log('I condensed')
    //     }
    // }
});
console.log(fsm.state);
//红绿灯
var steps = new StateMachine({

    init: 'green',

    transitions: [
        { name: 'warn',  from: 'green',  to: 'yellow' },
        { name: 'stop', from: 'yellow', to: 'red' },
        { name: 'ready',  from: 'red',    to: 'yellow' },
        { name: 'go', from: 'yellow', to: 'green' }
    ],
    methods:{
        onWarn:function () {
          $('.star').css('background-color','yellow');
            console.log('颜色变成黄色');
            alert('请安顺序进行操作')
        },
        onStop:function () {
            $('.star').css('background-color','red');
            console.log('颜色变成红色');
            alert('请安顺序进行操作')
        },
        onReady:function () {
            $('.star').css('background-color','yellow');
            alert('请安顺序进行操作')
        },
        onGo:function () {
            $('.star').css('background-color','green');
            alert('请安顺序进行操作')
        },
    },

});

$(document).ready(function () {
    $('.warn').click(function () {
        steps.warn()
    });
    $('.stop').click(function () {
        steps.stop()
    });
    $('.ready').click(function () {
        steps.ready()
    });
    $('.go').click(function () {
        steps.go()
    });
});
