//page_01

function valueSender() {
    var object = JSON.stringify(featuresSelected)
    localStorage.setItem('lote_object', object)
    window.open("page_02") 
}

//page_02

var receiver = JSON.parse(localStorage.getItem('lote_object'))
var resetValue = 0
localStorage.setItem('lote_object', resetValue)
