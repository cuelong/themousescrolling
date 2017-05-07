 $(function() {

     function resize(elem, width, height) {
        
         var pw = document.body.clientWidth;
         var ph = document.body.clientHeight;
       
         console.log(document.body.clientWidth);
         console.log(document.body.clientHeight);
         var s = ''
         if (pw / ph > width / height) {
             //以宽为准等比例放大缩小
             s = pw / width
         } else {
             //以高为准等比例放大缩小
             s = ph / height
         }
         var iw = width * s
         var ih = height * s



         elem.css({
             //这里用的是居中。老办法解决。兼容性。替代css3
             width: iw + 'px',
             height: ih + 'px',
            
             marginLeft: '-' + iw / 2 + 'px', //jquery的-属性可以用驼峰写法
             marginTop: '-' + ih / 2 + 'px'
         })
     }



     resize($('.photo'), 1000, 1000)

     $(window).on('resize', function() {
         resize($('.photo'), 1000, 1000)
     })


 })
