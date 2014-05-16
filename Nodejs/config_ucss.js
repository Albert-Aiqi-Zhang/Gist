var fs = require('fs'),
    fd;

module.exports = {
    "pages": {
        "include": [
        "index.html"
        ]
    },
    "css": [
        "style.css"
    ],
    "output": {
        "logger": function(response, originalUrl, loggedIn) {
            // Do some logging here, e.g. using console.log.
        },
        "result": function(result) {
            // Do something with the result object, e.g. print every rule
            // found, together with positions in CSS file:
            // console.log('all result: ', result.selectors);
            fs.open('unusedcsslist.md', 'a', function(err, fdt) {
                if (err) {
                    console.log('create file fail');
                } else {
                    fd = fdt;
                    for (var s in result.selectors) {
                        // Only unused rules:
                        if (result.selectors[s].matches_html === 0) {
                            // Print position(s), given it's only one CSS file:
                            var pos_css = result.selectors[s].pos_css;
                            var key = Object.keys(pos_css)[0];
                            // console.log(s + ": " + pos_css[key]);
                            var results = s + ": " + pos_css[key]+'\r\n';
                            fs.write(fd, results, 0, 'utf8',function(e){
                                    if(e) throw e;
                                    // fs.closeSync(fd);
                                })
                        }
                    }
                }
            });
        }
    }
};