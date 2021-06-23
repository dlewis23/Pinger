var pinger = require('bencoding.pinger');

var win = Ti.UI.createWindow({
    backgroundColor: 'white',
});

var pingTime = Ti.UI.createLabel({
    backgroundColor: '#ccc',
    width: '100%',
    text: 'Ping: 0 ms',
    textAlign: 'center',
    font: {fontFamily: 'SFProMedium', fontSize: 20},
    top: 150
})

var pingStart = Ti.UI.createButton({
    title: 'Start',
});


pingStart.addEventListener('click', function() {
    pinger.ping({
        address: 'apple.com',
        completed: onCompleted,
        timeout: 15000
    });
});


function onCompleted(e){
    Ti.API.info(JSON.stringify(e));
    pingTime.text = (e.duration * 1000).toFixed(2);
};


win.add(pingTime);
win.add(pingStart);
win.open();