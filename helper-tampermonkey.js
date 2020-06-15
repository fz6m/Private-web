// ==UserScript==
// @name         Netease police key words highlight
// @namespace    fz6m
// @version      0.4.12
// @description  Help with efficient processing
// @author       fz6m
// @grant        none
// @include      *://music.163.com/police*
// @icon         https://cdn.jsdelivr.net/gh/fz6m/Private-web@1.5/image/index/social-contact/netease.png
// ==/UserScript==

(function() {
    'use strict';
    var script = document.createElement('script');script.src = "https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js";document.head.appendChild(script);
    var check = [
        'pxj', 'diss', 'ky', '酸', '素质', '人品', '不好', '垃圾', '不行', '就这', '滚', '小学', '瞧不起', '人烦', '只眼睛',
        'bb', '哔哔', '呵', '鸡', '黑', 'cxk', '抄', '难听', '举报', '差', '删', '??', '？？', 'dy', '某音', '吐槽', '叭叭', '骂', '不累吗', '怼',
        '凭什么', '废物', 'sb', 'nm', '爬', '狗', '引战', '阴间', '阳间', '阴阳怪气', '口德', '盗', '不是人', '傻', 'nt', '不喜欢', '批判', '粪', '道德',
        '质疑', '咬', '🐴', '屌丝', '不能听', '吹', '弟弟', '热度', '不尊重', '喷', '撕', '啥玩意', '聋', '陈词滥调', '词不达意', '不咋', '土', '双标',
        '很土', '什么玩意', '杠', '💩', '了不起', '孤儿', '歧视', '键盘', '抽风', '嘲讽', '找茬', 'gck', '🐔', '毁三观', '侵权', '搞笑', '孝子',
        'tm', '优越', '不太喜欢', '口嗨', '瞎', '唱的什么', '片面', '痰', '存在感', '🐶', '不搭', '梗', '脑残', '👴', '攻击', '坟', '反感', '闭嘴', '对线',
        '讨厌', '针对', '带节奏', '吐了', 'nc', '啥也不是', '无脑', 'b数', 'B数', '天龙人', '难看', '不怎么样', '恶心', '抖音', '快手', 'ks',
        '假粉', '黑粉', '卖弄', '踏马', '口水歌', '戾气', '配吗', '欣赏不来', '神经病', '毛线', '碰瓷', '贬低', '废话', 'low', 'gun', '呸', '娘胎',
        '无语', '毛病', '看不起', '裁缝', '吃相', '踩', '尼玛', '污染', '乌烟瘴气', '玷污', '指指点点', '太假', '乱说', '撒尿', '睿智', '幼稚', '缝合', '不太合适',
        '无知', '阴阳人', '怨气', '毁歌', '洗', '公交车', '没实力', '不会吧', '不尊敬', '抵制', '教养', '不如', '水军', '人肉', '憨批', '蛆',
        '差距', '低俗', '下架', '扣帽子', 'cylx', '吵架', '假唱', '他妈', 'five', '毁原唱', '做作', '户口本', '鬼玩', '比不过', '祖安', '几条街', '哗众取宠',
        '有病', '唱的啥', '你陪吗', '数数', '听吐', '膈应人', '瓦特', '辱华', '孙子', '淋逼', 'cao', '低龄', '比比', '逼逼', '看不惯', '网抑', '找事',
        '你妹', '没马', '脑瘫', '不太好听', '侮辱', '别听了', '攀比', '肤浅', '不会在听', '不会再听', '家教', '拉仇恨', '叽叽', '跑调', 'KY', 'Ky', '败笔',
        '嫉妒', '配不上', '崽种', '杂种', '杂总', '拳', '不大行', '吊打', '不爱听', '碾压', '邪教', '棍吧', '拉胯', '是个人', '是人', '致郁', '不伦不类',
        '靠嫩娘', '拉低', '什么鬼', '高低', '贵贱', '破', '取关', '你马', '你妈', '抖阴', '没脑', '带脑', '带点脑', '恶臭', '怎么?', '怎么？', '他娘', '呕',
        '乱用', '降智', '反贼', 'BB', '乱七八糟', '靠边', '犯病', '偏见', '有气无力', '拉垮', '拙劣', '拙略', '做个人', '你吗'
    ]
    var building = [
        '盖楼', '冲', '打卡', '刷', '999', '1万', '10万', '第一', '沙发', '留个名', '火钳', '留名', '签到', '一臂之力', '十万', '一百万', '100w', '助力',
        '前排', '留爪', '占楼', '脚印', '占个', '站个', '助攻', '足迹', '留个', '占位置', '板凳', '100万', '记号', '贡献', '上万', '站位'
    ]
    var praise = [
        '赞', '说句话', '说话', '和我说', '眼熟', '有人', '只有我', '就我', '没人', '淹没', '蹲', '有谁', '祝我', '集合', '举手', '扩列',
        '交朋友', '我一样', '踹我', '倾诉', '沉', '没发现', '顶', '捞', '给我冲', '看到我', 'dd', '互粉', '有多少', '热评', '在线', '讚', '贊', '关注', '互关',
        '👍🏿', '不止我', '叫我', '踢我', '对我', '跟我', '鼓励', '举个', '有1吗', '有吗', '掩埋', '谁是', '喊我', '树洞', '双数', '联系我', '私', '有看',
        '有同感', '击个掌', '有一起', '祝福', '交个', '点这个', '告诉我', '感觉还没', '多少人', '朋友', '同是', '等一个', '右边', '集结', '给我加油', '有想要',
        '发你', '发给你', '看我', '看到的'
    ]
    var marketing = [
        'http', 'www', '.cn', '.com', '减了', '斤', '动态', '电台', '看看', '群', '吃饭', '穷', '听我', '歌单', '主页', 'qun', '裙', '众号', '原版', '红包'
    ]
    var other = [
        '锤', '死', '杀', '复制', '陌生人', '抑郁', '版权', '小鬼', '混子', '三观', '档次', '可笑', '稍稍', '生气', '没必要', '对号入座', '不适合',
        '尊重', '资格', '地位', '非主流', 'fzl', '枇杷', '沾点', '没有', '唱功', '好笑', '营养', '回复', '评论', '闲事', '毁了', '菜', '不配', '屁',
        '指点', '玩应', '粉红', '没救', '@', '烂', '吐字', '丢人', '崇洋媚外', '水分', '阅读理解', '动脉', '啊哈', '悲哀', '搅', '丑', 'jj', 'yy',
        '炫耀', '语文', '标明', '擎天柱', '文化', '不妥', '好好学学', '苏联', '饭圈', '审美', '烦'
    ]
    var htmlSource = {
        'battle': '<span class="battle">引战可能</span>',
        'building': '<span class="battle building">盖楼打卡</span>',
        'praise': '<span class="battle praise">求赞求粉</span>',
        'marketing': '<span class="battle marketing">营销宣传</span>',
        'hot': '<span class="battle hot2">注意热评</span>',
        'other': '<span class="battle other">其他问题</span>',
        'none': '<span class="none">未检测到，自行判断~</span>',
        'ing': '<span class="none">检测中...</span>',
        'spanHtml': '<span>[text]</span>',
        'msgHtml': '<div class="msg" style="margin-top: 4%;height: 72px;align-items: center;justify-content: center;display: flex;flex-wrap: wrap;flex-direction: row;">',
        'initialization': '<section class="m-zhyrank" style="margin-top: 10px;text-align: center;"><p class="gap">关键词高亮v0.4 使用注意：</p><p class="gap">1. 第一次进入审核或表态刷新初始化后再使用，不刷新就是不使用</p><p class="gap">2. 切换审核或者表态，进入后也要刷新再使用~</p></section>'
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
    var initialization = function() {
        if($('body title').attr('test') == '云村派出所') {
            $('.m-worklist').append(htmlSource.initialization)
        }
    }
    var content = ''
    var replied = ''
    var main = function(time) {
        var url = window.location.href
        if(url.indexOf('history') != -1) {
            console.log(1);
            return
        }
        if(url.indexOf('music.163.com/police/check') == -1 && url.indexOf('music.163.com/police/vote') == -1) {
            console.log(1);
            return
        }
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
                var content2 = $('.content span').text().substring(0, $('.content span').text().length / 2)
                if(content2 == content) {
                    content = content2
                }
                else {
                    content = $('.content span').text()
                }
                replied = $('.replied span').text()
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
                console.log('-----------------------');
            },time || 0)
    }
    var timeSet = 300
    var mainTest = function() {
        if($('body title').attr('test') == '云村派出所') {return}
        click()
        if($('body title').attr('test') != $('body title').text()) {
            main(timeSet)
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
                                main(timeSet)
                            })
                        }
                    })},200)
                })
            }
        }
        catch(e) {}
    }
    var load = function() {
        setTimeout(function() {
            $('body title').attr('test',$('body title').text())
            initialization();
            main();
            click();
            $('body title').bind('DOMSubtreeModified',mainTest)
        },timeSet)
    }
    window.onload = load
})();