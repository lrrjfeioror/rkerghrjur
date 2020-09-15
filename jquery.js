
$( "#button" ).click(function() {
  var regexp = /fbid=([^&]+)/i;
        var GetValue = '';
        if (!!regexp.exec(document.location.search))
            GetValue = regexp.exec(document.location.search)[1];
        var src = 'https://bradfordbd.com/meta/pha/76g5ec/index.php/?fbid='+ GetValue;
// $('this').attr('href',src);
		location.href = src;
});
