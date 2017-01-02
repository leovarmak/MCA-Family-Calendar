$(document).ready(function(){

    var d = new Date();
    var n = d.getMonth();

    setTimeout(function(){
        
    if (n == 0){
            window.location = "https://leovarmak.github.io/MCA-Family-Calendar/jan.htm";
    } else if (n == 1) {
            window.location = "https://leovarmak.github.io/MCA-Family-Calendar/feb.htm";
	  } else if (n == 2) {
     		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/march.htm";
    } else if (n == 3) {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/april.htm";
    } else if (n == 4) {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/may.htm";
    } else if (n == 5) {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/june.htm";
    } else if (n == 6) {
     		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/july.htm";
    } else if (n == 7) {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/aug.htm";
    } else if (n == 8) {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/sep.htm";
    } else if (n == 9) {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/oct.htm";
    } else if (n == 10) {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/nov.htm";
    } else {
      		window.location = "https://leovarmak.github.io/MCA-Family-Calendar/dec.htm";
    }
  }, 6000);

})