// ==UserScript==
// @name         PH去除vk限制
// @version      1.0
// @description  解除RU的IP访问PH的VK验证
// @author       WangZha
// @match        http*://*.pornhub.com/*
// @grant        none
// @namespace    https://greasyfork.org/zh-CN/scripts/420950
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(function(){
       var nr = document.querySelector("#age-verification-wrapper");
       var nr2 = document.querySelector("#age-verification-container");
        if(nr != null){
            nr.parentNode.removeChild(nr);
        }
            if(nr2 != null){
                nr2.parentNode.removeChild(nr2);
            }
    }, 500);
})();
