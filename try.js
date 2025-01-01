// ==UserScript==
// @name         huawei
// @namespace    http://tampermonkey.net/
// @version      2024-12-29
// @description  try to take over the world!
// @author       You
// @match        https://vue.ruoyi.vip/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      file://D:/project/tampermonkey/QueryPlus.js
// @require      https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/mode/javascript/javascript.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/mode/sql/sql.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/hint/sql-hint.min.js
// @require      https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/addon/display/fullscreen.min.css
// @resource CodeMirror https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/codemirror.min.css
// @resource monokai https://cdn.bootcdn.net/ajax/libs/codemirror/6.65.7/theme/monokai.min.css
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

(function() {
    'use strict';
    const css = GM_getResourceText("CodeMirror");
    GM_addStyle(css);
    GM_addStyle(GM_getResourceText("monokai"));
    const run = () =>{
        queryPlus.run();
    };
    window.onload = function () {
        setTimeout(run, 1000)
    }
    // Your code here...
})();



window.queryPlus = function() {
    'use strict';
    const replaceHelper = {
        sqlDate : null,
        setDate: function(inputStr=null){
            if(inputStr===null){
                this.sqlDate = new Date();
            }
            else{
                try {
                  this.sqlDate = Date.parse(inputStr);
                } catch (error) {
                  alert(`输入的日期无法解析!${inputStr}`);
                  this.sqlDate = new Date();
                }
            }
        },
        formatDate: function(date, seq=""){
            const dateArr = [
                date.getFullYear().toString().padStart(4, '0'),
                (date.getMonth() + 1).toString().padStart(2, '0'),
                date.getDate().toString().padStart(2, '0'),
            ];
            // const hour = nowDate.getHours().toString().padStart(2, '0');
            // const minute = nowDate.getMinutes().toString().padStart(2, '0');
            // const second = nowDate.getSeconds().toString().padStart(2, '0');
            return dateArr.join(seq);
        },
        createBody: function(){
            const replaceCoreEl = this.createCoreEl();
            this.createButton(replaceCoreEl)
        },
        createButton: function(){

        },
        createCoreEl: function(){
            const el = document.createElement("div")
            el.setAttribute("id", "qppReplaceHelper")
            return document.createElement("div");
        },
        run: function(){
            this.setDate();
            console.log("start")
        },
    };

    const editorHelper = {

        createEditor: function () {
            const fatherEl = document.querySelector(".app-container")
            // const fatherEl = document.body
            const editorBody = document.createElement("form")
            editorBody.style.width = '900px'
            editorBody.style.height = '500px'
            editorBody.style.backgroundColor = '#0fff0f'
            const editorText = document.createElement("textarea")
            editorText.id = "cmEditorHelper"
            fatherEl.appendChild(editorBody)
            editorBody.appendChild(editorText)

            const editor = CodeMirror.fromTextArea(editorText, {
                lineNumbers: true,
                value: "function myScript(){return 100;}\n",
                indentUnit: 4,
                tabSize:4,
                theme: "monokai",
                mode: 'sql' // 设置mode 对应的也要这之前引入相应的js
            });
        },
        run: function () {
            console.log("start")
            this.createEditor()
        }
    }
    const run = () =>{
        // replaceHelper.run();
        editorHelper.run();
    };
    return {
        run
    }
}();
