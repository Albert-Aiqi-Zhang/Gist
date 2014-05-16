console.log('auth2.0, test2');
var clientId = '530271286664.apps.googleusercontent.com',
  apiKey = 'AIzaSyBePCO42fiIk2NfoZUBpgJxPScAwXCiVd4',
  scopes = 'https://www.googleapis.com/auth/youtube';

function handleClientLoad() {
  console.log('handleClientLoad');
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth, 1);
}

function handleAuthClick(event) {
  gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: false
  }, handleAuthResult);
  return false;
}

function checkAuth() {
  gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: true
  }, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}


function makeApiCall() {
  console.log('It\'s OK');
}

function addComment() {
  // 注意，要设置accessToken还有X-GData-Key
  var accessToken = gapi.auth.getToken().access_token;
  console.log('accessToken: ', accessToken);
    var xmlData = '<?xml version="1.0" encoding="UTF-8"?> <entry xmlns="http://www.w3.org/2005/Atom"xmlns:yt="http://gdata.youtube.com/schemas/2007"> <content>This is a crazy video. test 444</content> </entry>';
    var data = $.parseXML(xmlData);
    $.ajax({
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'GData-Version': 2,
        'X-GData-Key': 'key=AI39si6M3GXB3A8ZNWA6GFcWb_D6uskJL4iluYwMBZaSE6hwW45laNC4LnPqS-gsPqH1joxGfVtQYs8Ry4TobJcPJS3JawIXXA'
      },
      type: 'POST',
      url: 'https://gdata.youtube.com/feeds/api/videos/0DfPkpFjH_g/comments',
      contentType: 'application/atom+xml',
      dataType: 'xml',
      processData: false,
      data: data,
      success: function(data) {
        console.log(data);
      }
    });
}

function addLike() {
  var accessToken = gapi.auth.getToken().access_token;
  console.log('accessToken: ', accessToken);
    var xmlData = '<?xml version="1.0" encoding="UTF-8"?> <entry xmlns="http://www.w3.org/2005/Atom"xmlns:yt="http://gdata.youtube.com/schemas/2007"> <yt:rating value="like"/> </entry>';
    var data = $.parseXML(xmlData);
    $.ajax({
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'GData-Version': 2,
        'X-GData-Key': 'key=AI39si6M3GXB3A8ZNWA6GFcWb_D6uskJL4iluYwMBZaSE6hwW45laNC4LnPqS-gsPqH1joxGfVtQYs8Ry4TobJcPJS3JawIXXA'
      },
      type: 'POST',
      url: 'https://gdata.youtube.com/feeds/api/videos/0DfPkpFjH_g/ratings',
      contentType: 'application/atom+xml',
      dataType: 'xml',
      processData: false,
      data: data,
      success: function(data) {
        console.log(data);
      }
    });
}

function addDislike() {
  var accessToken = gapi.auth.getToken().access_token;
  console.log('accessToken: ', accessToken);
    var xmlData = '<?xml version="1.0" encoding="UTF-8"?> <entry xmlns="http://www.w3.org/2005/Atom"xmlns:yt="http://gdata.youtube.com/schemas/2007"> <yt:rating value="dislike"/> </entry>';
    var data = $.parseXML(xmlData);
    $.ajax({
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'GData-Version': 2,
        'X-GData-Key': 'key=AI39si6M3GXB3A8ZNWA6GFcWb_D6uskJL4iluYwMBZaSE6hwW45laNC4LnPqS-gsPqH1joxGfVtQYs8Ry4TobJcPJS3JawIXXA'
      },
      type: 'POST',
      url: 'https://gdata.youtube.com/feeds/api/videos/0DfPkpFjH_g/ratings',
      contentType: 'application/atom+xml',
      dataType: 'xml',
      processData: false,
      data: data,
      success: function(data) {
        console.log(data);
      }
    });
}