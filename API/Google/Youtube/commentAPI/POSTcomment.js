<? xml version = "1.0"
encoding = "UTF-8" ?> < entry xmlns = "http://www.w3.org/2005/Atom"
xmlns: yt = "http://gdata.youtube.com/schemas/2007" > < content > This is a crazy video. < /content> </entry >



var xmlData = '<?xml version="1.0" encoding="UTF-8"?> <entry xmlns="http://www.w3.org/2005/Atom"xmlns:yt="http://gdata.youtube.com/schemas/2007"> <content>This is a crazy video. test 3</content> </entry>';
var data = $.parseXML(xmlData);
$.ajax({
    headers: {
        'Authorization': 'Bearer ya29.AHES6ZQuZ3eMJujnhLr8eUcc5LuKjyvC2IVBuBqGcezCbG0',
        'GData-Version':2,
        'X-GData-Key':'key=AI39si7f0LtaNAA-pduJMflkVNYfNa9X4xY_V_lASziaPddm7Z6eNbl2xgITBei5OfxQnnVcbDoaBQ7t6OWzwNxT7TvqBxK9nw'
    },
    type: 'POST',
    url: 'https://gdata.youtube.com/feeds/api/videos/jM0JMf04OgM/comments',
    contentType: 'application/atom+xml',
    dataType: 'xml',
    processData: false,
    data: data,
    success: function(data) {
        console.log(data);
    }
})


Content-Type: application/atom+xml
Content-Length: CONTENT_LENGTH
Authorization: Bearer ACCESS_TOKEN
GData-Version: 2
X-GData-Key: key=DEVELOPER_KEY


BAuthorization: Bearer ya29.AHES6ZQuZ3eMJujnhLr8eUcc5LuKjyvC2IVBuBqGcezCbG0
X - GData - Key: key = AI39si7f0LtaNAA - pduJMflkVNYfNa9X4xY_V_lASziaPddm7Z6eNbl2xgITBei5OfxQnnVcbDoaBQ7t6OWzwNxT7TvqBxK9nw