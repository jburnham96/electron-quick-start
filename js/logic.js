// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron')
const BrowserWindow = electron.remote.BrowserWindow
const path = require('path')

const newWindowBtn = document.getElementById('new-window')

// Module to control application life.
const app = electron.app


jQuery(document).ready(function(){
  document.getElementById("btnOpenNewPage").addEventListener("click", function (e) {
        app.quit();
 });

  jQuery('h1').hide();
  jQuery('p').hide();
  //jQuery('#btnOpenNewPage').hide();

  jQuery('h1').fadeIn('slow', function(){
    jQuery('p').fadeIn('slow',function(){
        //jQuery('#btnOpenNewPage').fadeIn();
    });
  });
});
