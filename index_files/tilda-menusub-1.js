function t_menusub_init(recid){$("#rec"+recid+" .t-menusub").each((function(){var hook=$(this).attr("data-submenu-hook");if(void 0!==hook&&""!=hook){var hookLinks="",newVersion=!1;$("#rec"+recid+" a.t-menu__link-item").each((function(){$(this).attr("data-menu-submenu-hook")&&(newVersion=!0)})),(hookLinks=newVersion?$('a[data-menu-submenu-hook="'+hook+'"]'):$('a[href="'+hook+'"]')).addClass("t-menusub__target-link"),hookLinks.attr("data-tooltip-menu-id",recid),t_menusub_add_arrow(recid,hookLinks,hook),t_menusub_set_up_menu(recid,hookLinks,hook),t_menusub_highlight(),t_menusub_checkAnchorLinks(recid)}})),window.isMobile?$(window).bind("orientationchange",(function(){$("#rec"+recid+" .t-menusub").each((function(){t_menusub_hide_submenu($(this).find(".t-menusub__menu"))}))})):$(window).bind("resize",t_throttle((function(){$("#rec"+recid+" .t-menusub").each((function(){t_menusub_hide_submenu($(this).find(".t-menusub__menu"))}))})))}function t_menusub_set_up_menu(recid,hookLinks,hook){var submenu=$("#rec"+recid+' .t-menusub[data-submenu-hook="'+hook+'"] .t-menusub__menu'),content=submenu.find(".t-menusub__content");window.isMobile?t_menusub_set_up_menu_mobile(recid,hookLinks,submenu):t_menusub_set_up_menu_desktop(recid,hookLinks,submenu,hook),$(window).bind("scroll",t_throttle((function(){content.hover((function(){}),(function(){window.isMobile||submenu.hasClass("t-menusub__menu_show")&&t_menusub_hide_submenu(submenu)}))})))}function t_menusub_open_inME401(wrapME401){var submenuParentWrapper;wrapME401.find(".t280__menu__wrapper").hasClass("t280__menu_static")||(wrapME401.find(".t280__menu").css("transition","none"),wrapME401.find(".t280__bottom").css("transition","none"),wrapME401.find(".t280__menu__wrapper").addClass("t280__menu_static"))}function t_menusub_close_inME401(wrapME401){var submenuParentWrapper;wrapME401.find(".t280__menu__wrapper").hasClass("t280__menu_static")&&wrapME401.find(".t280__menu__wrapper").removeClass("t280__menu_static")}function t_menusub_set_up_menu_mobile(recid,hookLinks,submenu){var vIndent=$("#rec"+recid+" .t-menusub").attr("data-submenu-margin");hookLinks.on("click",(function(e){if($(window).width()>980&&$("#rec"+recid+" .t-menusub__menu").each((function(){t_menusub_hide_submenu($(this))})),submenu.hasClass("t-menusub__menu_show"))t_menusub_hide_submenu(submenu);else{var curAnchor;t_menusub_show($(this),submenu,vIndent);var wrapME401=$(this).parents(".t280"),isMobileHeight=t_menusub_is_mobile_ME401(wrapME401),isStaticME401;t_menusub_is_static_ME401(wrapME401),"n"==wrapME401.find(".t280__menu__wrapper").attr("data-submenu-static")&&wrapME401.length>0&&isMobileHeight&&t_menusub_open_inME401(wrapME401)}e.preventDefault()})),$(document).click((function(e){var isInsideSubmenu=$(e.target).hasClass("t-menusub__menu")||$(e.target).parents(".t-menusub__menu").length>0,isAnchor=$(e.target).hasClass("t-menusub__target-link")||$(e.target).parents(".t-menusub__target-link").length>0,curAnchor;isAnchor&&((curAnchor=$(e.target).hasClass("t-menusub__target-link")?$(e.target):$(e.target).parents(".t-menusub__target-link")).attr("data-tooltip-menu-id")!=recid&&submenu.hasClass("t-menusub__menu_show")&&t_menusub_hide_submenu(submenu));isInsideSubmenu||isAnchor||!submenu.hasClass("t-menusub__menu_show")||t_menusub_hide_submenu(submenu)}))}function t_menusub_set_up_menu_desktop(recid,hookLinks,submenu){var vIndent=$("#rec"+recid+" .t-menusub").attr("data-submenu-margin"),timer;hookLinks.add(submenu).on("mouseover",(function(){var curAnchor;$(this).hasClass("t-menusub__menu")&&!$(this).hasClass("t-menusub__menu_show")||(clearTimeout(timer),$(this).hasClass("t-menusub__menu")&&submenu.hasClass("t-menusub__menu_show")||t_menusub_show($(this),submenu,vIndent))})),hookLinks.add(submenu).on("mouseout",(function(){timer=setTimeout((function(){t_menusub_hide_submenu(submenu)}),300)})),hookLinks.on("click auxclick",(function(e){e.preventDefault()}))}function t_menusub_show(curAnchor,submenu,vIndent){var submenuHeight=submenu.outerHeight(),submenuWidth=submenu.outerWidth(),anchorHeight=curAnchor.height(),anchorWidth=curAnchor.outerWidth(),anchorMarginLeft=parseInt(curAnchor.css("margin-left")),winHeight=$(window).height(),winWidth=$(window).width(),scrollTop=$(window).scrollTop(),anchorLeft=curAnchor.position().left;void 0!==vIndent&&""!=vIndent&&(vIndent=1*vIndent.replace("px",""),vIndent+=10);var posy=curAnchor.position().top+anchorHeight+vIndent,posx=anchorLeft;posy+submenuHeight>scrollTop+winHeight?(posy=Math.max(posy-submenuHeight-anchorHeight-2*vIndent,scrollTop),submenu.removeClass("t-menusub__menu_bottom").addClass("t-menusub__menu_top")):submenu.removeClass("t-menusub__menu_top").addClass("t-menusub__menu_bottom"),$(window).width()<=980&&(posy=0),posx+submenuWidth/2<winWidth?(posx=posx+(anchorWidth-submenuWidth)/2+anchorMarginLeft)<0&&(posx=10):posx=winWidth-submenuWidth-10,submenu.css({display:"block",left:posx,top:posy}),submenu.offsetHeight,submenu.addClass("t-menusub__menu_show"),curAnchor.addClass("t-menusub__target-link_active")}function t_menusub_hide_submenu(submenu){var wrapME401=submenu.parents(".t280"),isMobileHeight=t_menusub_is_mobile_ME401(wrapME401),isStaticME401;submenu.css({display:"",left:"",top:""}),submenu.removeClass("t-menusub__menu_show"),$(".t-menusub__target-link_active").removeClass("t-menusub__target-link_active"),"n"==wrapME401.find(".t280__menu__wrapper").attr("data-submenu-static")&&window.isMobile&&isMobileHeight&&t_menusub_close_inME401(wrapME401)}function t_menusub_add_arrow(recid,hookLinks,hook){var arrow=$("#rec"+recid+' .t-menusub[data-submenu-hook="'+hook+'"]').attr("data-add-submenu-arrow");void 0!==arrow&&""!=arrow&&hookLinks.each((function(){$(this).append('<div class="t-menusub__arrow"></div>')}))}function t_menusub_highlight(){var url=window.location.href,pathname=window.location.pathname;"/"==url.substr(url.length-1)&&(url=url.slice(0,-1)),"/"==pathname.substr(pathname.length-1)&&(pathname=pathname.slice(0,-1)),"/"==pathname.charAt(0)&&(pathname=pathname.slice(1)),""==pathname&&(pathname="/"),$('.t-menusub__list-item a[href="'+url+'"]').addClass("t-active"),$('.t-menusub__list-item a[href="'+url+'/"]').addClass("t-active"),$('.t-menusub__list-item a[href="'+pathname+'"]').addClass("t-active"),$('.t-menusub__list-item a[href="/'+pathname+'"]').addClass("t-active"),$('.t-menusub__list-item a[href="'+pathname+'/"]').addClass("t-active"),$('.t-menusub__list-item a[href="/'+pathname+'/"]').addClass("t-active")}function t_menusub_is_static_ME401(wrapME401){wrapME401.find(".t280__menu__wrapper").hasClass("t280__menu_static")||wrapME401.find(".t280__menu__wrapper").attr("data-submenu-static","n")}function t_menusub_is_mobile_ME401(wrapME401){var menuHeight=wrapME401.find(".t280__menu").height(),menuBottomHeight=wrapME401.find(".t280__bottom").height(),menuHeaderHeight=wrapME401.find(".t280__container").height(),wrapperHeight;return menuHeight>$(window).height()-menuBottomHeight-menuHeaderHeight-40}function t_menusub_checkAnchorLinks(recid){if($(window).width()>=960){var navLinks=$("#rec"+recid).find('a:not(.tooltipstered)[href*="#"].t-menusub__link-item');navLinks.length>0&&t_menusub_catchScroll(navLinks)}}function t_menusub_catchScroll(navLinks){var clickedSectionId=null,sections=new Array,sectionIdTonavigationLink=[],interval=100,lastCall,timeoutId;(navLinks=$(navLinks.get().reverse())).each((function(){var curSection=t_menusub_getSectionByHref($(this));void 0!==curSection&&(void 0!==curSection.attr("id")&&sections.push(curSection),sectionIdTonavigationLink[curSection.attr("id")]=$(this))})),t_menusub_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId),$(window).bind("resize",t_throttle((function(){t_menusub_updateSectionsOffsets(sections)}))),setTimeout((function(){t_menusub_updateSectionsOffsets(sections),t_menusub_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)}),1e3),navLinks.click((function(){if(!$(this).hasClass("tooltipstered")){navLinks.removeClass("t-active");var section=t_menusub_getSectionByHref($(this));if(null!=section){var id=section.attr("id");sectionIdTonavigationLink[id].addClass("t-active"),clickedSectionId=id}}})),$(window).on("scroll",(function(){var now=(new Date).getTime();lastCall&&now<lastCall+100?(clearTimeout(timeoutId),timeoutId=setTimeout((function(){lastCall=now,clickedSectionId=t_menusub_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId)}),100-(now-lastCall))):(lastCall=now,clickedSectionId=t_menusub_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId))}))}function t_menusub_getSectionByHref(curlink){var hash=curlink.attr("href").replace(/\s+/g,"").substring(1),block=$('.r[id="'+hash+'"]'),anchor=$('.r[data-record-type="215"]').has('a[name="'+hash+'"]');return 1===block.length?block:1===anchor.length?anchor:void 0}function t_menusub_highlightNavLinks(navLinks,sections,sectionIdTonavigationLink,clickedSectionId){var scrollPosition=$(window).scrollTop(),valueToReturn=clickedSectionId;return 0!=sections.length&&null==clickedSectionId&&sections[sections.length-1].attr("data-offset-top")>scrollPosition+300?(navLinks.removeClass("t-active"),null):($(sections).each((function(){var curSection=$(this),sectionTop=curSection.attr("data-offset-top"),id=curSection.attr("id"),navLink=sectionIdTonavigationLink[id];if(scrollPosition+300>=sectionTop||sections[0].attr("id")==id&&scrollPosition>=$(document).height()-$(window).height())return null!=clickedSectionId||navLink.hasClass("t-active")?null!=clickedSectionId&&id==clickedSectionId&&(valueToReturn=null):(navLinks.removeClass("t-active"),navLink.addClass("t-active"),valueToReturn=null),!1})),valueToReturn)}function t_menusub_updateSectionsOffsets(sections){$(sections).each((function(){var curSection=$(this);curSection.attr("data-offset-top",curSection.offset().top)}))}