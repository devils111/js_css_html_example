(function flexible(window, document) {
    //获取html的根元素
    var docE1 = document.documentElement;
    //dpr:物理像素比
    var dpr = window.devicePixelRatio || 1

    //1.adjust body font size 设置body的字体大小
    function setBodyFontSize() {
        //如果页面中有body这个元素就设置body的字体大小
        if (document.body) {
            document.body.style.fontSize = (12 * dpr) + 'px'
        } else {
            //如果页面中没有body这个元素，则等着我们页面DOM元素加载完之后再设置body字体大小
            document.addEventListener('DomContentLoaded', setBodyFontSize)
        }
    }
    setBodyFontSize();
    //set 1rem=viewWidth/10 设置html元素的文字大小
    function setRemUnit() {
        var rem = docE1.clientWidth / 10;
        docE1.style.fontSize = rem + 'px';
    }
    setRemUnit();

    //reset rem unit on page resize 当我们页面尺寸大小发生变化的时候 重新设置rem
    window.addEventListener('resize', setRemUnit);
    //pageshow事件是我们重新加载页面触发的事件
    window.addEventListener('pageshow', function (e) {
        //e.persisted返回的是true 就是说如果这个页面是从缓存取过来的页面
        //也需要重新计算一下rem的大小
        if (e.persisted)
            setRemUnit();
    })

    //detect 0.5px supports 为了让某些浏览器支持0.5像素的写法
    if (dpr >= 2) {
        var fakeBody = document.createElement('body');
        var testElement = document.createElement('div');
        testElement.style.border = '.5px solid transparent';
        fakeBody.appendChild(testElement);
        docE1.appendChild(fakeBody)
        if (testElement.offsetHeight === 1) {
            doce1.classList.add('hairlines')
        }
        docE1.removeChild(fakeBody)
    }
}(window, document))