
var logos = [];
logos.push("facebook.png");
logos.push("google-logo.png");
logos.push("stackOverflow.png");

window.onload = ()=>{
	

        var html = "<img src = 'logos/";
        html += logos[0];
        html += "'/>";

        var html2 = "<img src = 'logos/";
        html2 += logos[1];
        html2 += "'/>";

        var html3 = "<img src = 'logos/";
        html3 += logos[2];
        html3 += "'/>";

        logo_1.innerHTML = html;
        logo_2.innerHTML = html2;
        logo_3.innerHTML = html3;
        /*logo_4.innerHTML = html;
        logo_5.innerHTML = html3;
        logo_6.innerHTML = html3;
        logo_7.innerHTML = html3;
        logo_8.innerHTML = html3;
        logo_9.innerHTML = html3;
        */
} 