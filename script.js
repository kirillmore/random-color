//v1.4
jQuery(document).ready(function($){
  mode='color';
  var ca = [];
  function cc(){
    if(mode=='gray'){
      var base=Math.floor(Math.random()*255).toString(16);
      set('#'+base+base+base,'yes');
    }
    if(mode=='color'){
      var hex='#';
      var range='ABCDEF0123456789';
      for(var i=0;i<6;i++){
        hex+=range.charAt(Math.floor(Math.random()*range.length));
      }
      set(hex,'yes');
    }
  }
  function set(color,add){
    $('body').css('background-color',color);
    $("#color_txt").html('<span>'+color+'</span>');
    window.location.hash=color;
    if(add=='yes'){
      ca.push(color);
    }
  }
  var hashValue=window.location.hash;
  if(hashValue==''){cc();}else{set(hashValue,'yes');}
  $("#color").on("click mousewheel",function(){
    cc();
    $('#tip').fadeOut("slow");
    $('#history--btn').fadeIn("slow");
  });
  $("#options--btn").on("click",function(){
    $("#options").removeClass("col-xs-0 hidden").addClass("col-xs-4");
    $("#color").removeClass("col-xs-12").addClass("col-xs-8");
    $("#options--btn").addClass("hidden");
  });
  $("#history--btn").on("click",function(){
    if(ca.length>1){
      ca.splice(-1,1);
      var lst=ca[ca.length-1];
      set(lst,'no');
    }
  });
  $("i.options--close").on("click",function(){
    $("#options").removeClass("col-xs-4").addClass("col-xs-0 hidden");
    $("#options--btn").removeClass("hidden");
    $("#color").removeClass("col-xs-8").addClass("col-xs-12");
  });
  $("input[type=radio]").on("click",function(){
    mode=$("input:checked").val();
  });
});