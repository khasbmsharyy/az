$("style").last().append(`
#users .uzr.anoar1 img.co {
  border-radius: 20px 0px 20px 0px;
}

#users .uzr.anoar1 span.uhash{
    -webkit-text-fill-color: transparent;
width: 0px !important;
    height: 0px !important;
  margin-right: 1px;}


#users .uzr.anoar1 img.u-ico {
margin-left: 0px;



     

      
    }



#users .uzr.anoar1 .fitimg.u-pic {
  border: 1px solid #fff;
margin-left: 0px !important;
height: 52px !important;
z-index: 99999 !important;
  border-radius: 100px;
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
margin-bottom: 0px !important;
margin-top: 0px !important;
}

#users .uzr.anoar1 .u-msg {
 
margin-left: 5px ;
margin-right: 20px ;
margin-top: 0px !important;

 
color: #b50062 !important;
  
  padding: 0px !important;
 text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white !important;

}





#users .uzr.anoar1 {
 box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 0px #000;
  margin-bottom: 0px !important;
  margin-top: 0px !important;
  border-radius: 20px 0px 20px 0px;
   
  
  border: 3px solid #fff;
 background-image: url(https://up6.cc/2025/02/174016286534791.jpg);
background-size: 100%;

    
}



#users .uzr.anoar1 .d-flex.fl {
  padding-right: 0px !important;
}



#users .uzr.anoar1 .itarr_anoar1 {

  width: 0px;

margin-top: 28px;
cursor: pointer;
margin-left: 28px;
}
#users .uzr.anoar1 .My_star1 {
  width: 84px;
  margin-top: -67px;
  height: 80px;
}
#users .uzr.anoar1 .My_tsor {
  width: 79px;
  margin-top: -45px;
  z-index: 0;
  margin-left: 36px;
}
#users .uzr.anoar1 .My_vedio1 {
  float: right;
  width: 20px;
  margin-top: 0px;
  margin-right: 5px;
  cursor: pointer;
}
`);
var me_user1=setInterval(function(){
    if(myid!=null){
        clearInterval(me_user1);
        $("#users .uzr:contains('انوار')").addClass('anoar1');
        $("#users .uzr.anoar1 .c-flex.fr").append('<img class="My_star1" src="https://i.ibb.co/5G9Ttb7/10.gif">');
	$("#users .uzr.anoar1 .c-flex.fr").append('<img class="My_tsor" src="https://i.ibb.co/ThKHx1N/image.png">');
        $("#users .uzr span.u-topic:contains('93B')").after('<img id="mystory1" class="My_vedio1" title="ستوري" src="https://i.ibb.co/47VS4nY/image.png">');
    
        $("#users .uzr.anoar1 span.uhash, #users .uzr.anoar1 img.co").hide(); 



        
        
        $("div#users .uzr:contains('انوار') .My_vedio1").click(function(){
        $("#movon1").show();
        
        $('#movon1').addClass('anoar1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        
        
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
          
		  
        
       $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
