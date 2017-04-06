var val = "";

$("#picker1").picker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker" id="btn1">确定</button><button class="button button-link pull-left close-picker" id="btn-c1">自定义</button><h1 class="title">请选择度数</h1></header>',
    cols: [{
        textAlign: 'center',
        values: ['100', '125', '150', '175', '200', '225', '250', '275', '300', '325', '350', '375', '400', '425', '450', '475', '500', '525', '550', '575', '600', '625', '650', '675', '700', '725', '750', '775', '800']
    }]
});

$("#picker2").picker({
    toolbarTemplate: '<header class="bar bar-nav"><button class="button button-link pull-right close-picker" id="btn2">确定</button><button class="button button-link pull-left close-picker" id="btn-c2">自定义</button><h1 class="title">请选择度数</h1></header>',
    cols: [{
        textAlign: 'center',
        values: ['100', '125', '150', '175', '200', '225', '250', '275', '300', '325', '350', '375', '400', '425', '450', '475', '500', '525', '550', '575', '600', '625', '650', '675', '700', '725', '750', '775', '800']
    }]
});


var onCoustom = false;
$("#picker1").on("focus", function(e) {
    setTimeout(function() {
        $("#btn-c1").on("click", function(event) {
            onCoustom = true;
            $("#picker1").removeAttr("readonly");
            $("#picker1").attr("placeholder", "请输入");
            $("#picker1").val("");
            $("#picker1").unbind().on('focus', function(E) {
                console.log("ok");
            });
            $("#picker1").on("change", function(E) {
                if (E.target.value > 1500) {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                    $("form").append('<p style = "color:red;" class = "notice">请输入大于800且小于等于1500的整数数字</p>');
                    $("#picker1").val("");
                } else if (E.target.value < 800) {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                    $("form").append('<p style = "color:red;" class = "notice">请输入大于800且小于等于1500的整数数字</p>');
                    $("#picker1").val("");
                } else if ((E.target.value).toString().indexOf(".") > 0) {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                    $("form").append('<p style = "color:red;" class = "notice">请输入大于800且小于等于1500的整数数字</p>');
                    $("#picker1").val("");
                } else {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                }
            })
        })
    }, 500)
})

$("#picker2").on("focus", function(e) {
    setTimeout(function() {
        $("#btn-c2").on("click", function(event) {
            $("#picker2").removeAttr("readonly");
            $("#picker2").attr("placeholder", "请输入");
            $("#picker2").val("");
            $("#picker2").unbind().on('focus', function(E) {
                console.log("ok");
            });
            $("#picker2").on("change", function(E) {
                // debugger

                if (E.target.value > 1500) {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                    $("form").append('<p style = "color:red;" class = "notice">请输入大于800且小于等于1500的整数数字</p>');
                    $("#picker2").val("");
                } else if (E.target.value < 800) {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                    $("form").append('<p style = "color:red;" class = "notice">请输入大于800且小于等于1500的整数数字</p>');
                    $("#picker2").val("");
                } else if ((E.target.value).toString().indexOf(".") > 0) {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                    $("form").append('<p style = "color:red;" class = "notice">请输入大于800且小于等于1500的整数数字</p>');
                    $("#picker2").val("");
                } else {
                    if ($(".notice")) {
                        $(".notice").remove();
                    }
                }
            })
        });
    }, 500)

})

var num1Value = 0;
var num2Value = 0;
var flag = false;
$("#num1").on("change", function(e) {
    if (e.target.value < 0) {
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("form").append('<p style = "color:red;" class = "notice">请输入0-6的整数</p>');
        $(this).val("");
    } else if (e.target.value > 6) {
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("form").append('<p style = "color:red;" class = "notice">请输入0-6的整数</p>');
        $(this).val("");
    } else if (e.target.value.toString().indexOf(".") > 0) {
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("form").append('<p style = "color:red;" class = "notice">请输入0-6的整数</p>');
        $("#num1").val("");
    } else {
        num1Value = e.target.value;
        if ($(".notice")) {
            $(".notice").remove();
        }
        if(flag){
        if ((parseInt(num1Value)+ parseInt(num2Value)) !== 6) {
        $("form").append('<p style = "color:red;" class = "notice">购买数之和必须等于6</p>');
        $(this).val("");
        }
    }
    flag = true;
    }

    
})

$("#num2").on("change", function(e) {
	
    if (e.target.value < 0) {
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("form").append('<p style = "color:red;" class = "notice">请输入0-6的整数</p>');
        $(this).val("");
    } else if (e.target.value > 6) {
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("form").append('<p style = "color:red;" class = "notice">请输入0-6的整数</p>');
        $(this).val("");
    } else if (e.target.value.toString().indexOf(".") > 0) {
        if ($(".notice")) {
            $(".notice").remove();
        }
        $("form").append('<p style = "color:red;" class = "notice">请输入0-6的整数</p>');
        $("#num2").val("");
    } else {
        num2Value = e.target.value;
        if ($(".notice")) {
            $(".notice").remove();
        }
        if(flag){
        if ((parseInt(num1Value)+ parseInt(num2Value)) !== 6) {
        $("form").append('<p style = "color:red;" class = "notice">购买数之和必须等于6</p>');
        $(this).val("");
        }
    }
    flag = true;
    }

    
})

//判断购买按钮点击时，四个输入框均不能为空
$("#buy_btn").click(function(){
   if ($(".notice")) {
            $(".notice").remove();
        }
   console.log($("#num1").val() == false);
	if(!($("#picker1").val() && $("#picker2").val() && $("#num1").val() && $("#num2").val())){
         $("form").append('<p style = "color:red;" class = "notice">输入不能为空</p>');
	}
	// return false;
})

$("#tel").click(function(){
    $(".wra").css("display","block");
    $("body").css("overflow","hidden");
})
$("#cancel").click(function(){
    $(".wra").css("display","none");
    $("body").css("overflow","auto");
})