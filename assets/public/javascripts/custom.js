$(document).ready(function(){kriesi_tab('#content','.jquery_tab_title','.jquery_tab');kriesi_navigation(".nav");kriesi_closeable_divs(".closeable");$(".flexy_datepicker, .flexy_datepicker_input").datepicker();$("#dialog").dialog();$('.richtext').wysiwyg();});function kriesi_closeable_divs(element)
{$(element).each(function()
{$(this).append('<div class="click_to_close"></div>')});$(".click_to_close").click(function()
{$(this).parent().slideUp(200);});}
function kriesi_navigation(element)
{$(element).each(function()
{var currentlistitem;currentlistitem=$(this).find(">li");currentlistitem.each(function()
{if(!$(this).find('ul').hasClass('opened')){$(this).find('ul').addClass("closed").css({display:"none"});}});currentlistitem.find('a:eq(0)').each(function()
{$(this).click(function()
{if($(this).next('ul').hasClass('closed')){$(this).next('ul').slideDown(200).removeClass("closed");return false;}else{$(this).next('ul').slideUp(200).addClass("closed");return false;}});});});}
function kriesi_tab(wrapper,header,content){var title=wrapper+" "+header;var container_to_hide=wrapper+" "+content;var duration=200;if($.browser.msie){duration=10;}
disable=false;$(title).each(function(i){if(i==0){$(wrapper).prepend("<div class='jquery_tab_container'><a href='/' class='heading_tab advanced_link active tab"+(i+1)+"'>"+$(this).html()+"</a></div>");}else{$(".advanced_link:last").after("<a href='/'class='heading_tab advanced_link tab"+(i+1)+"'>"+$(this).html()+"</a>");}});$(container_to_hide).each(function(i){$(this).addClass("tablist list_"+i);if(i!=0){$(this).css({display:"none"});}});$(".advanced_link").each(function(i){$(this).bind("click",function(){if($(this).hasClass('active')){return false}
if(disable==false){disable=true;$(".advanced_link").removeClass("active");$(this).addClass("active");$(container_to_hide+":visible").fadeOut(duration,function(){$(".list_"+i).fadeIn(duration,function(){disable=false;});});}
return false;});});}