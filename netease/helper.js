(function() {
    'use strict';
    // var script = document.createElement('script');script.src = "https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js";document.head.appendChild(script);
    var check = [
        'pxj', 'diss', 'ky', '酸', '素质', '人品', '不好', '垃圾', '不行', '就这', '滚', '小学生',
        'bb', '哔哔', '呵', '鸡', '黑', 'cxk', '抄', '难听', '举报', '差', '删', '聋子', '??', '？？', 'dy', '某音', '吐槽', '叭叭', '骂', '不累吗', '怼',
        '凭什么', '废物', 'sb', 'nm', '爬', '狗', '引战', '阴间', '阳间', '阴阳怪气', '口德', '盗', '不是人', '傻', 'nt', '不喜欢', '批判', '粪', '道德',
        '质疑', '咬', '🐴', '屌丝', '不能听', '吹', '弟弟', '热度', '不尊重', '喷', '撕', '啥玩意'
    ]
    var building = [
        '盖楼', '冲', '打卡', '刷', '999', '1万', '10万', '第一', '沙发'
    ]
    var praise = [
        '赞', '说句话', '说话', '和我说', '眼熟'
    ]
    var marketing = [
        'http', 'www', '.cn', '.com', '减了', '斤', '动态', '电台', '看看', '群', '吃饭', '穷', '听我', '歌单', '主页'
    ]
    var other = [
        '锤', '死', '杀', '复制'
    ]
    var htmlSource = {
        'battle': '<span class="battle">引战可能</span>',
        'building': '<span class="battle building">盖楼打卡</span>',
        'praise': '<span class="battle praise">求赞求粉</span>',
        'marketing': '<span class="battle marketing">营销宣传</span>',
        'hot': '<span class="battle hot2">注意高赞</span>',
        'other': '<span class="battle other">其他问题</span>',
        'none': '<span class="none">未检测到，自行判断~</span>',
        'ing': '<span class="none">检测中...</span>',
        'spanHtml': '<span>[text]</span>',
        'msgHtml': '<div class="msg" style="margin-top: 4%;height: 72px;align-items: center;justify-content: center;display: flex;flex-wrap: wrap;flex-direction: row;">'
    }
    var globalCSS = '.conventional {border-radius: 5px;background-color: rgba(255, 18, 0, 0.5);padding: 1px 2px;color: white;}\
                    span.battle {background-color: rgba(255, 18, 0, 0.5);color: white;border-radius: 10px;padding: 2px 6px;font-size: 14px;margin-right: 10px;margin-bottom: 5px;}\
                    span.building {background-color: rgb(0, 166, 255) !important;}\
                    span.praise {background-color: rgba(255, 101, 0, 0.61) !important;}\
                    span.marketing {background-color: rgba(128, 0, 255, 0.5) !important;}\
                    span.hot2 {background-color: rgba(255, 0, 241, 0.65) !important;}\
                    span.other {background-color: #5eba7de6 !important;}\
                    span.none {font-size: 14px;}'
    var style = document.createElement('style');style.innerHTML = globalCSS;document.head.appendChild(style);
    var cssList = {
        'conventional': '</span><span class="conventional">[text]</span><span>',
        'cheercover': '100%',
        'building': '</span><span class="conventional building">[text]</span><span>',
        'praise': '</span><span class="conventional praise">[text]</span><span>',
        'marketing': '</span><span class="conventional marketing">[text]</span><span>',
        'hot': '<span style="color: #000000 !important;">[text]</span> 赞',
        'other': '</span><span class="conventional other">[text]</span><span>'
    }
    var main = function(time) {
        if($('.none') != null) {
            $('.none').text('检测中...')
        }
        setTimeout(function() {
                // cheercover
                $('.cheercover').removeAttr('style').css('height', cssList.cheercover);
                // booklink
                $('.booklink').remove();
                // msg
                var msg = htmlSource.msgHtml
                // content
                var content = $('.content span').text()
                var replied = $('.replied span').text()
                console.log(content)
                console.log(replied)
                // check
                var checkMark = {
                    'battle': false,
                    'building': false,
                    'praise': false,
                    'marketing': false,
                    'hot': false,
                    'other': false
                }
                var newContent = htmlSource.spanHtml.replace('[text]', content)
                var newReplied = htmlSource.spanHtml.replace('[text]', replied)
                // check battle
                var i = 0
                for(i=0;i<check.length;i++) {
                    if(content.indexOf(check[i]) != -1) {
                        checkMark.battle = true
                        newContent = newContent.replace(check[i],
                                            cssList.conventional.replace('[text]', check[i]));

                    }
                    if(replied.indexOf(check[i]) != -1) {
                        checkMark.battle = true
                        newReplied = newReplied.replace(check[i],
                            cssList.conventional.replace('[text]', check[i]));
                    }
                }
                // check building
                for(i=0;i<building.length;i++) {
                    if(content.indexOf(building[i]) != -1) {
                        checkMark.building = true
                        newContent = newContent.replace(building[i],
                                            cssList.building.replace('[text]', building[i]));
                    }
                    if(replied.indexOf(building[i]) != -1) {
                        checkMark.building = true
                        newReplied = newReplied.replace(building[i],
                                            cssList.building.replace('[text]', building[i]));
                    }
                }
                // check praise
                for(i=0;i<praise.length;i++) {
                    if(content.indexOf(praise[i]) != -1) {
                        checkMark.praise = true
                        newContent = newContent.replace(praise[i],
                                            cssList.praise.replace('[text]', praise[i]));
                    }
                    if(replied.indexOf(praise[i]) != -1) {
                        checkMark.praise = true
                        newReplied = newReplied.replace(praise[i],
                                            cssList.praise.replace('[text]', praise[i]));
                    }
                }
                // check marketing
                for(i=0;i<marketing.length;i++) {
                    if(content.indexOf(marketing[i]) != -1) {
                        checkMark.marketing = true
                        newContent = newContent.replace(marketing[i],
                                            cssList.marketing.replace('[text]', marketing[i]));
                    }
                    if(replied.indexOf(marketing[i]) != -1) {
                        checkMark.marketing = true
                        newReplied = newReplied.replace(marketing[i],
                                            cssList.marketing.replace('[text]', marketing[i]));
                    }
                }
                // check hot comment
                var hot = parseInt($(".label.zan").text().replace('赞',''))
                if(hot >= 10) {
                    checkMark.hot = true
                    $(".label.zan").css('font-weight', 'bold')
                }
                else {
                    $(".label.zan").removeAttr('style')
                }
                // check other
                for(i=0;i<other.length;i++) {
                    if(content.indexOf(other[i]) != -1) {
                        checkMark.other = true
                        newContent = newContent.replace(other[i],
                                            cssList.other.replace('[text]', other[i]));
                    }
                    if(replied.indexOf(other[i]) != -1) {
                        checkMark.other = true
                        newReplied = newReplied.replace(other[i],
                                            cssList.other.replace('[text]', other[i]));
                    }
                }
                // check lower comment
                $('.btn span').each(function () {
                    if($(this).text() == '取消热评') {
                        $(this).css('font-weight', 'bold').css('color', 'red')
                    }
                })
                // checkMark
                if(checkMark.battle) {
                    msg += htmlSource.battle
                }
                if(checkMark.building) {
                    msg += htmlSource.building
                }
                if(checkMark.praise) {
                    msg += htmlSource.praise
                }
                if(checkMark.marketing) {
                    msg += htmlSource.marketing
                }
                if(checkMark.hot) {
                    msg += htmlSource.hot
                }
                if(checkMark.other) {
                    msg += htmlSource.other
                }
                // insert
                if(msg == htmlSource.msgHtml) {
                    msg += htmlSource.none
                }
                msg += '</div>'
                $('.cheercover').html(msg)
                // if($('.comt_img')!=null) {$('.comt_img').remove()}
                $('.content span').each(function(index) {
                    if(index == 0) {
                        $(this).html(newContent)
                    }
                    else {
                        $(this).css('display', 'none')
                    }
                })
                $('.replied span').each(function(index) {
                    if(index == 0) {
                        $(this).html(newReplied)
                    }
                    else {
                        $(this).css('display', 'none')
                    }
                })
                console.log(1);
            },time || 0)
    }
    var mainTest = function() {
        click()
        if($('body title').attr('test') != $('body title').text()) {
            main(1000)
            click();
            $('body title').attr('test',$('body title').text())
        }
    }
    var click = function() {
        if($('.jump') == null) {
            return
        }
        try{
            var objEvt = $._data($(".jump")[0], "events");
            if (objEvt && objEvt["click"]) {
            }
            else {
                $('.jump').bind('click', function(){
                    setTimeout(function(){$('.c-modal-bton').each(function(){
                        if($(this).text() == '确定') {
                            $(this).bind('click', function() {
                                main(1000)
                            })
                        }
                    })},200)
                })
            }
        }
        catch(e) {}
    }
    var load = function() {setTimeout(function() {main();
                                                  click();
                                                  $('body title').attr('test',$('body title').text())
                                                  $('body title').bind('DOMSubtreeModified',mainTest)
                                                 },1000)}
    window.onload = load
})();