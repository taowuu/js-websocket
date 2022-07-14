const log = function () {
    console.log.apply(console, arguments)
}

const e = function (sel) {
    return document.querySelector(sel)
}

const bindEvent = function (element, event, func) {
    /*
    给页面元素绑定事件
    */
    element.addEventListener(event, func)
}

const clearactive = function () {
    /*
    移除 active class
    */
    let span = e('.active')
    span.classList.remove('active')
}
