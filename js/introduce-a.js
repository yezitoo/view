var val = "";

$("#picker1").picker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker" id="btn1">确定</button><h1 class="title">请选择度数</h1></header>',
    cols: [{
        textAlign: 'center',
        values: ['100', '125', '150', '175', '200', '225', '250', '275', '300', '325', '350', '375', '400', '425', '450', '475', '500', '525', '550', '575', '600', '650', '700', '750', '800', '850', '900', '950', '1000']
    }]
});

$("#picker2").picker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker" id="btn2">确定</button><h1 class="title">请选择度数</h1></header>',
    cols: [{
        textAlign: 'center',
        values: ['100', '125', '150', '175', '200', '225', '250', '275', '300', '325', '350', '375', '400', '425', '450', '475', '500', '525', '550', '575', '600', '650', '700', '750', '800', '850', '900', '950', '1000']
    }]
});

$("#num1").picker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker" id="btn2">确定</button><h1 class="title">请选择数量</h1></header>',
    cols: [{
        textAlign: 'center',
        values: ['0', '1', '2', '3', '4']
    }]
});

$("#num2").picker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker" id="btn2">确定</button><h1 class="title">请选择数量</h1></header>',
    cols: [{
        textAlign: 'center',
        values: ['0', '1', '2', '3', '4']
    }]
});

// debugger

var flag = false;

console.log($("#num1"));
$("#num1").on("blur", function(e) {
    debugger
     console.log(parseInt($("#num1").val()));

    if (flag ) {
        debugger
     
        if ((parseInt($("#num1").val()) + parseInt($("#num2").val())) != 4) {
            if ($(".notice")) {
                $(".notice").remove();
            }
            $("form").append('<p style = "color:red;" class = "notice">购买数之和必须等于4</p>');
            $(this).val("");
        }
    }
    flag = true;
})


$("#num2").on("blur", function(e) {
    // num2value=e.target.value;
    debugger
    if (flag) {
        debugger
        if ((parseInt($("#num1").val()) + parseInt($("#num2").val())) != 4) {
            if ($(".notice")) {
                $(".notice").remove();
            }
            $("form").append('<p style = "color:red;" class = "notice">购买数之和必须等于4</p>');
            $(this).val("");
        }
    }
    flag = true;
})

//判断购买按钮点击时，四个输入框均不能为空
$("#buy_btn").click(function() {
if ($(".notice")) {
            $(".notice").remove();
        }
    console.log($("#num1").val() == false);
    if (!($("#picker1").val() && $("#picker2").val() && $("#num1").val() && $("#num2").val())) {
        $("form").append('<p style = "color:red;" class = "notice">输入不能为空</p>');
    }


})

$("#tel").click(function(){
    $(".wra").css("display","block");
    $("body").css("overflow","hidden");
})
$("#cancel").click(function(){
    $(".wra").css("display","none");
    $("body").css("overflow","auto");
})