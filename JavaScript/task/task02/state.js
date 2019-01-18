



//有限状态机
var step = new StateMachine({
    init: 'step1',
    transitions:[
        {name:'one',from:'step1',to:'step2',},
        {name:'two',from:'step2',to:'step3',},
        {name:'three',from:'step3',to:'step4',},
        {name:'four',from:'step4',to:'step1',},

    ],
    //具体的事件
    methods:{
        onOne:function () {
            window.location='task04-kill.html';
            $('.one').css('background-color','#89B09A');
            // document.styleSheet[0].addRule('.one:after','border-right-color:#89B09A');
            // document.styleSheets[0].insertRule('.one:after{border-right-color:#89B09A}',0);
            $('.sj-one').css('border-right-color','#89B09A');


        },
        onTwo:function () {
            $('.two').css('background-color','#89B09A');
            $('.sj-two').css('border-right-color','#89B09A');
        },
        onThree:function () {
            $('.three').css('background-color','#89B09A');
            $('.sj-three').css('border-right-color','#89B09A');
        },
        onFour:function () {
            $('.four').css('background-color','#89B09A');
            $('.sj-four').css('border-right-color','#89B09A');
        },
    },
});
