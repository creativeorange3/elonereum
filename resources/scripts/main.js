"use strict";window.addEventListener("load",function(){}),function(e){var t={init:function(){if(t.$element=$(".launch"),!t.$element.length)return!1;t.$conceal=$(".trigger--launch-conceal"),t.$conceal.bind("click",function(e){e.preventDefault(),t.conceal()})},conceal:function(){ASTRONAUT.enableAudio(),$("body").addClass("launch--is-started"),TIMELINE.build(),setTimeout(function(){$("body").addClass("launch--is-invisible")},100),setTimeout(function(){$("body").addClass("launch--is-inactive")},500)}};e.addEventListener("load",t.init)}(window);var LOADER=function(e){var t={init:function(){if(t.$element=$(".loader"),!t.$element.length)return!1;t.$reveal=$(".trigger--loader-reveal"),t.$conceal=$(".trigger--loader-conceal"),t.$reveal.bind("click",function(e){e.preventDefault(),t.reveal()}),t.$conceal.bind("click",function(e){e.preventDefault(),t.conceal()})},reveal:function(){$("body").addClass("loader--is-active"),setTimeout(function(){$("body").addClass("loader--is-visible")},25)},conceal:function(){$(".pauzer").remove(),$("body").removeClass("loader--is-visible"),setTimeout(function(){$("body").removeClass("loader--is-active")},475)}};return e.addEventListener("load",t.init),{reveal:function(){t.reveal()},conceal:function(){t.conceal()}}}(window),TIMELINE=function(t){var o={settings:{inactivity:5e3,launched:!1,debug:!1},init:function(){if(o.$element=$(".timeline"),!o.$element.length)return!1;o.settings.debug&&$("body").addClass("mode-debug"),o.distanceFromEarth=parseInt(o.$element.data("distance"),10),o.isTouch="ontouchstart"in t||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints,o.keepScrollingTime=$(".keepscrolling").data("time")?parseInt($(".keepscrolling").data("time"),10):o.settings.inactivity,o.$launch=$(".trigger--timeline-launch"),o.$scene=o.$element.find(".target--timeline-scene"),o.$rocket=$(".target--timeline-rocket"),o.$hudDistance=$(".target--timeline-hud-distance"),o.loadAPI(),o.$launch.bind("click",function(e){e.preventDefault(),o.launch()}),$(t).on("resize",function(){clearTimeout(o.resizeTimer),clearTimeout(o.recalculateTimer),o.isTouch||LOADER.reveal(),o.resizeTimer=setTimeout(function(){o.getDimensions()},50),o.recalculateTimer=setTimeout(function(){o.reCalculateScenes()},750)}),$(t).on("scroll",function(){clearTimeout(o.scrollInactivity),o.getDimensions(),$("body").removeClass("timeline--keepscrolling"),o.scrollInactivity=setTimeout(function(){o.keepScrolling()},o.keepScrollingTime)})},getReady:function(){$("body").addClass("timeline--is-prepared"),o.buildScenes()},launch:function(){if(o.settings.launched)return!1;clearTimeout(o.scrollInactivity),o.settings.launched=!0,WORLD.enableAudio(),ASTRONAUT.enableAudio(),CERTIFICATE.enableAudio(),ANNIVERSARY.enableAudio(),MATHEMATICS.enableAudio(),RELEASE.enableAudio(),WORLD.playVideo(),o.audioplayer.playVideo(),o.$launch.addClass("state-blink"),setTimeout(function(){o.$launch.find("span").html("3")},1e3),setTimeout(function(){o.$launch.find("span").html("2")},2e3),setTimeout(function(){o.$launch.find("span").html("1")},3e3),setTimeout(function(){o.$launch.find("span").html("0")},4e3),setTimeout(function(){o.$launch.find("span").html("Scroll up!"),WORLD.startEngines()},6e3),setTimeout(function(){var e=$(".world__text").offset().top-o.dimensions.window.height/2+150;e+=$(".world__text .world__inner").outerHeight()/2,$("html, body").animate({scrollTop:e},1500)},7e3),$("body").addClass("timeline--is-launched")},loadAPI:function(){var e=document.createElement("script");e.src="https://www.youtube.com/iframe_api";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)},buildScenes:function(){o.getDimensions(),WORLD.init(),TWEET.init(),ASTRONAUT.init(),FLASH.init(),ANNIVERSARY.init(),CERTIFICATE.init(),MATHEMATICS.init(),MARS.init(),RELEASE.init(),o.rocket1.init(),o.rocket2.init(),o.audioplayer.init(),o.toEnd(),setTimeout(function(){LOADER.conceal(),$("body").addClass("loader--no-transition")},3e3)},reCalculateScenes:function(){o.isTouch||location.reload()},toEnd:function(){if(o.settings.debug)return!1;t.scrollTo(0,document.body.scrollHeight),setTimeout(function(){WORLD.ready()},250)},getDimensions:function(){o.dimensions={window:{width:$(t).outerWidth(),height:$(t).outerHeight()},scroll:{height:document.body.scrollHeight,position:$(t).scrollTop()}};var e=o.dimensions.scroll.position/(o.dimensions.scroll.height-o.dimensions.window.height),e=Math.round(e*o.distanceFromEarth);o.$hudDistance.html(o.utilities.pad(e,8)),WORLD.update()},keepScrolling:function(){return!!o.settings.launched&&(0!==o.dimensions.scroll.position&&void $("body").addClass("timeline--keepscrolling"))},rocket1:{init:function(){o.rocket1.controller=new ScrollMagic.Controller;var e=$("#rocketpath1").outerHeight();o.rocket1.scene=new ScrollMagic.Scene({triggerElement:"#rocketpath1",duration:e}).setPin("#rocket-1",{pushFollowers:!1}).addTo(o.rocket1.controller)},rebuild:function(){o.rocket1.controller.destroy(!0),o.rocket1.scene.destroy(!0),o.rocket1.init()}},rocket2:{init:function(){o.rocket2.controller=new ScrollMagic.Controller;var e=$("#rocketpath2").outerHeight()-300;o.rocket2.ANI_liftoff=new TimelineMax,o.rocket2.ANI_liftoff.set("#rocketpath2 .rocket",{opacity:0,top:-1.5*o.dimensions.window.height}),o.rocket2.ANI_liftoff.to("#rocketpath2 .rocket",.01,{opacity:0}),o.rocket2.ANI_liftoff.to("#rocketpath2 .rocket",.8,{opacity:1,top:-1.5*o.dimensions.window.height}),o.rocket2.ANI_liftoff.to("#rocketpath2 .rocket",.2,{opacity:1,top:20}),o.rocket2.ANI_liftoff.to("#rocketpath2 .rocket",.2,{opacity:1,top:0}),o.rocket2.scene=new ScrollMagic.Scene({triggerElement:"#rocketpath2",duration:e}).setPin("#rocket-2",{pushFollowers:!1}).addTo(o.rocket2.controller),o.rocket2.liftoffscene=new ScrollMagic.Scene({triggerElement:"#rocketpath2",offset:-+o.dimensions.window.height,duration:+o.dimensions.window.height-10}).setTween(o.rocket2.ANI_liftoff).addTo(o.rocket2.controller)},rebuild:function(){o.rocket2.controller.destroy(!0),o.rocket2.scene.destroy(!0),o.rocket2.liftoffscene.destroy(!0),o.rocket2.init()}},audioplayer:{init:function(){if(o.isTouch)return!1;o.audioplayer.audioId=o.$element.data("video-id"),o.audioplayer.player=new YT.Player("timeline-audioplayer--element",{height:"390",width:"640",videoId:o.audioplayer.audioId,playerVars:{playsinline:1},events:{onReady:function(){o.audioplayer.playerReady=!0},onStateChange:function(e){e.data===YT.PlayerState.ENDED&&o.audioplayer.playVideo()}}})},playVideo:function(){return!o.isTouch&&(!!o.audioplayer.playerReady&&void o.audioplayer.player.playVideo())},pauseVideo:function(){return!o.isTouch&&(!!o.audioplayer.playerReady&&void o.audioplayer.player.pauseVideo())}},utilities:{pad:function(e,t){for(e=e.toString();e.length<t;)e="0"+e;return e}}};return t.addEventListener("load",o.init),{build:function(){o.buildScenes()},youtubeApiReady:function(){setTimeout(function(){o.getReady()},750)},getDimensions:function(){return o.dimensions},toEnd:function(){o.toEnd()},worldReady:function(){LOADER.conceal()}}}(window);function onYouTubeIframeAPIReady(){TIMELINE.youtubeApiReady()}var ASTRONAUT=function(){var a={settings:{seekTo:77,playerReady:!1},init:function(){if(a.$element=$(".astronaut"),!a.$element.length)return!1;a.$scene=$("#scene--astronaut"),a.$audioplayer=$("#audioplayer"),a.dimensions=TIMELINE.getDimensions(),a.buildAudioPlayer(),a.buildAnimations(),a.buildScenes()},buildAudioPlayer:function(){a.audioId=a.$scene.data("video-id"),a.audioplayer=new YT.Player("astronaut-audioplayer--element",{height:"390",width:"640",videoId:a.audioId,playerVars:{playsinline:1},events:{onReady:function(){a.playerReady=!0,a.audioplayer.seekTo(a.settings.seekTo),a.pauseVideo()},onStateChange:function(){}}})},playVideo:function(){if(!a.playerReady)return!1;a.audioplayer.playVideo()},pauseVideo:function(){if(!a.playerReady)return!1;a.audioplayer.pauseVideo()},buildAnimations:function(){var e=a.dimensions.window.width<767?250:.2*a.dimensions.window.width,t=a.dimensions.window.width<767?.25:.45,o=a.dimensions.window.width<767?850:a.dimensions.window.width+.45*a.dimensions.window.width,i=a.dimensions.window.width<767?.5:.8,n=a.dimensions.window.width<767?1.1:3;a.ANI_astronaut=new TimelineMax,a.ANI_astronaut.set("#rocket--astronaut",{left:"-="+(a.dimensions.window.width+200),top:"+=350",scale:n,ease:"power2.in"}),a.ANI_astronaut.to("#rocket--astronaut",2,{left:"+="+o,top:"-=200",scale:i,ease:"power2.in"}),a.ANI_astronaut.call(function(){$(".rocket").removeClass("astronaut-in")}),a.ANI_astronaut.to("#rocket--astronaut",2,{left:"-="+e,top:"-=250",scale:t,ease:"power2.out"}),a.ANI_astronaut.call(function(){$(".rocket").addClass("astronaut-in")}),a.ANI_astronaut.to("#rocket--astronaut",2,{left:"50%",top:"50%",scale:"0.05",ease:"power2.out"}),a.ANI_text=new TimelineMax,a.ANI_text.set("#astronaut--text",{opacity:1}),a.ANI_text.to("#astronaut--text",9,{opacity:1,top:"+=250",ease:"power2.in"}),a.ANI_text.to("#astronaut--text",1,{opacity:0,ease:"power2.out"}),a.ANI_marker=new TimelineMax,a.ANI_marker.to("#astronaut--textMarker",2,{boxShadow:"inset 0px 0px #5371ff"})},buildScenes:function(){a.SCROLL_controller=new ScrollMagic.Controller;var e=a.$scene.outerHeight();a.astronaut_scene=new ScrollMagic.Scene({triggerElement:"#scene--astronaut",triggerHook:"onLeave",duration:e}).setTween(a.ANI_astronaut).addTo(a.SCROLL_controller),a.text_scene=new ScrollMagic.Scene({triggerElement:"#scene--astronaut",triggerHook:"onLeave",duration:e}).setTween(a.ANI_text).addTo(a.SCROLL_controller),a.marker_scene=new ScrollMagic.Scene({triggerElement:"#scene--astronaut",triggerHook:"onLeave",offset:e/2,duration:40}).setTween(a.ANI_marker).addTo(a.SCROLL_controller),a.astronaut_scene.on("leave",function(e){a.pauseVideo()}),a.astronaut_scene.on("enter",function(e){a.playVideo()})},destroy:function(){a.SCROLL_controller.destroy(!0),a.astronaut_scene.destroy(!0),a.text_scene.destroy(!0),a.marker_scene.destroy(!0)}};return{init:function(){a.init()},enableAudio:function(){a.playVideo(),a.pauseVideo()},rebuild:function(){a.destroy(),a.buildAnimations(),a.buildScenes()}}}(window),ANNIVERSARY=function(){var t={init:function(){if(t.$element=$(".flash"),!t.$element.length)return!1;t.$scene=$("#scene--flash"),t.dimensions=TIMELINE.getDimensions(),t.buildAudioPlayer(),t.buildAnimations(),t.buildScenes()},buildAnimations:function(){t.ANI_confetti1=new TimelineMax,t.ANI_confetti1.to("#anniversary--confetti1",2,{scale:100,rotation:45,opacity:0,ease:"power2.in"}),t.ANI_confetti1.to("#anniversary--confetti1",1,{opacity:1,ease:"power2.in"}),t.ANI_confetti1.to("#anniversary--confetti1",1,{scale:10,rotation:10,ease:"power2.in"}),t.ANI_confetti1.to("#anniversary--confetti1",1,{scale:.1,rotation:0,ease:"power2.in"}),t.ANI_confetti2=new TimelineMax,t.ANI_confetti2.to("#anniversary--confetti2",2,{scale:100,rotation:-45,opacity:0,ease:"power2.in"}),t.ANI_confetti2.to("#anniversary--confetti2",1,{opacity:1,ease:"power2.in"}),t.ANI_confetti2.to("#anniversary--confetti2",1,{scale:50,rotation:-10,ease:"power2.in"}),t.ANI_confetti2.to("#anniversary--confetti2",1,{scale:.1,rotation:-40,ease:"power2.in"}),t.ANI_confetti3=new TimelineMax,t.ANI_confetti3.to("#anniversary--confetti3",2,{scale:100,rotation:40,opacity:0,ease:"power2.in"}),t.ANI_confetti3.to("#anniversary--confetti3",1,{opacity:1,ease:"power2.in"}),t.ANI_confetti3.to("#anniversary--confetti3",1,{scale:100,rotation:60,ease:"power2.in"}),t.ANI_confetti3.to("#anniversary--confetti3",1,{scale:.1,rotation:120,ease:"power2.in"}),t.ANI_marker=new TimelineMax,t.ANI_marker.to("#anniversary--textMarker",2,{boxShadow:"inset 0px 0px #5371ff"}),t.ANI_solid=new TimelineMax,t.ANI_solid.to("#anniversary--darkNumber",.5,{opacity:1},"<"),t.ANI_solid.to("#anniversary--LightNumber",.5,{opacity:0},"<"),t.ANI_solid.to("#anniversary--solid",1,{opacity:1},"<")},buildScenes:function(){t.SCROLL_controller=new ScrollMagic.Controller;var e=$("#scene--anniversary").outerHeight();t.number_scene=new ScrollMagic.Scene({triggerElement:"#scene--anniversary",duration:e}).setPin("#anniversary--pin",{pushFollowers:!1}).addTo(t.SCROLL_controller),t.number_scene.on("enter",function(e){MATHEMATICS.pauseVideo()}),t.confetti1_scene=new ScrollMagic.Scene({triggerElement:"#scene--anniversary",duration:e}).setTween(t.ANI_confetti1).addTo(t.SCROLL_controller),t.confetti2_scene=new ScrollMagic.Scene({triggerElement:"#scene--anniversary",duration:e}).setTween(t.ANI_confetti2).addTo(t.SCROLL_controller),t.confetti3_scene=new ScrollMagic.Scene({triggerElement:"#scene--anniversary",duration:e}).setTween(t.ANI_confetti3).addTo(t.SCROLL_controller),t.text_scene=new ScrollMagic.Scene({triggerElement:"#scene--anniversary",offset:.3*e,duration:40}).setTween(t.ANI_marker).addTo(t.SCROLL_controller),t.solidPin_scene=new ScrollMagic.Scene({triggerElement:"#scene--anniversary",offset:.4*e,duration:.6*e}).setTween(t.ANI_solid).addTo(t.SCROLL_controller)},destroy:function(){t.SCROLL_controller.destroy(!0),t.number_scene.destroy(!0),t.confetti1_scene.destroy(!0),t.confetti2_scene.destroy(!0),t.confetti3_scene.destroy(!0),t.text_scene.destroy(!0),t.solidPin_scene.destroy(!0)},buildAudioPlayer:function(){t.audioId=$("#scene--anniversary").data("video-id"),t.audioplayer=new YT.Player("anniversary-audioplayer--element",{height:"390",width:"640",videoId:t.audioId,playerVars:{playsinline:1},events:{onReady:function(){t.playerReady=!0},onStateChange:function(){}}})},playVideo:function(){if(!t.playerReady)return!1;t.audioplayer.playVideo()},pauseVideo:function(){if(!t.playerReady)return!1;t.audioplayer.pauseVideo()}};return{init:function(){t.init()},enableAudio:function(){t.playVideo(),t.pauseVideo()},playVideo:function(){t.playVideo()},rebuild:function(){t.destroy(),t.buildAnimations(),t.buildScenes()}}}(window),CERTIFICATE=function(){var o={init:function(){if(o.$element=$(".certificate"),!o.$element.length)return!1;o.$scene=$("#scene--certificate"),o.dimensions=TIMELINE.getDimensions(),o.buildAudioPlayer(),o.buildAnimations(),o.buildScenes()},buildAnimations:function(){o.ANI_article=new TimelineMax,o.ANI_article.set("#certificate--article-glow",{height:"0%"}),o.ANI_article.set("#certificate--article-element",{x:"-100%"}),o.ANI_article.call(function(){o.playCertificateVideo()}),o.ANI_article.to("#certificate--article-glow",1,{height:"100%"}),o.ANI_article.to("#certificate--article-element",1,{x:"0%"}),o.ANI_article.to("#certificate--article-element",10,{opacity:1}),o.ANI_article.call(function(){o.playArticleVideo()}),o.ANI_article.to("#certificate--article-element",1,{x:"-100%"}),o.ANI_article.to("#certificate--article-glow",1,{height:"0%"}),o.ANI_balloon=new TimelineMax,o.ANI_balloon.call(function(){o.pauseCertificateVideo()}),o.ANI_balloon.to("#balloon--element",1,{y:o.dimensions.window.height+150})},buildScenes:function(){o.SCROLL_controller=new ScrollMagic.Controller;var e=$("#certificate--article").outerHeight(),t=$("#certificate--second").outerHeight();o.article_scene=new ScrollMagic.Scene({triggerElement:"#certificate--first",triggerHook:.35,duration:e}).setTween(o.ANI_article).addTo(o.SCROLL_controller),o.articlePin_scene=new ScrollMagic.Scene({triggerElement:"#certificate--first",triggerHook:.5,duration:e}).setPin("#certificate--article",{pushFollowers:!1}).addTo(o.SCROLL_controller),o.contentLeft_scene=new ScrollMagic.Scene({triggerElement:"#certificate--first",triggerHook:.5,duration:e}).setPin("#certificate--content-left",{pushFollowers:!1}).addTo(o.SCROLL_controller),o.contentRight_scene=new ScrollMagic.Scene({triggerElement:"#certificate--second",triggerHook:.5,duration:t}).setPin("#certificate--content-right",{pushFollowers:!1}).addTo(o.SCROLL_controller),o.balloon_scene=new ScrollMagic.Scene({triggerElement:"#certificate--second",triggerHook:.5,duration:t}).setTween(o.ANI_balloon).addTo(o.SCROLL_controller)},destroy:function(){o.SCROLL_controller.destroy(!0),o.article_scene.destroy(!0),o.articlePin_scene.destroy(!0),o.contentLeft_scene.destroy(!0),o.contentRight_scene.destroy(!0),o.balloon_scene.destroy(!0)},buildAudioPlayer:function(){o.audioArticleId=o.$scene.data("article-video-id"),o.audioCertificateId=o.$scene.data("certificate-video-id"),o.audioplayerArticle=new YT.Player("article-audioplayer--element",{height:"390",width:"640",videoId:o.audioArticleId,playerVars:{playsinline:1},events:{onReady:function(){o.articlePlayerReady=!0},onStateChange:function(){}}}),o.audioplayerCertificate=new YT.Player("certificate-audioplayer--element",{height:"390",width:"640",videoId:o.audioCertificateId,playerVars:{playsinline:1},events:{onReady:function(){o.certificatePlayerReady=!0},onStateChange:function(){}}})},playArticleVideo:function(){if(!o.articlePlayerReady)return!1;o.audioplayerArticle.playVideo()},pauseArticleVideo:function(){if(!o.articlePlayerReady)return!1;o.audioplayerArticle.pauseVideo()},playCertificateVideo:function(){if(!o.certificatePlayerReady)return!1;o.audioplayerCertificate.playVideo()},pauseCertificateVideo:function(){if(!o.certificatePlayerReady)return!1;o.audioplayerCertificate.pauseVideo()}};return{init:function(){o.init()},enableAudio:function(){o.playArticleVideo(),o.pauseArticleVideo(),o.playCertificateVideo(),o.pauseCertificateVideo()},rebuild:function(){o.destroy(),o.buildAnimations(),o.buildScenes()}}}(window),FLASH=function(){var t={init:function(){if(t.$element=$(".flash"),!t.$element.length)return!1;t.$scene=$("#scene--flash"),t.buildAnimations(),t.buildScenes()},buildAnimations:function(){t.ANI_flash=new TimelineMax,t.ANI_flash.set("#lightbeam--flash",{opacity:1,scale:10}),t.ANI_flash.call(function(){ANNIVERSARY.playVideo()}),t.ANI_flash.set("#lightbeam--solid",{opacity:1,scale:2}),t.ANI_flash.set("#rocket-1 .rocket",{top:-1e3,opacity:0}),t.ANI_flash.to("#lightbeam--solid",5,{scale:1}),t.ANI_flash.to("#lightbeam--solid",1,{opacity:0},">"),t.ANI_flash.to("#lightbeam--flash",1,{scale:1,opacity:0,ease:"power2.out"},"<"),t.ANI_flash.to("#rocket-1 .rocket",3,{top:"+=1000",opacity:1}),t.ANI_flashOut=new TimelineMax,t.ANI_flashOut.set(".lightbeam",{opacity:0}),t.ANI_flashOut.to(".lightbeam",1,{opacity:1,ease:"power2.out"},"<"),t.ANI_flashOut.to("#anniversary--solidIn",1,{opacity:0},">"),t.ANI_flashOut.to(".anniversary",1,{opacity:0})},buildScenes:function(){t.SCROLL_controller=new ScrollMagic.Controller;var e=t.$scene.outerHeight();t.flash1_scene=new ScrollMagic.Scene({triggerElement:"#scene--flash",offset:0,duration:+e}).setTween(t.ANI_flash).addTo(t.SCROLL_controller),t.flash2_scene=new ScrollMagic.Scene({triggerElement:"#scene--flash",offset:-50,duration:50}).setTween(t.ANI_flashOut).addTo(t.SCROLL_controller)},destroy:function(){t.SCROLL_controller.destroy(!0),t.flash1_scene.destroy(!0),t.flash2_scene.destroy(!0)}};return{init:function(){t.init()},rebuild:function(){t.destroy(),t.buildAnimations(),t.buildScenes()}}}(window),MARS=function(){var t={init:function(){if(t.$element=$(".mars"),!t.$element.length)return!1;t.$scene=$("#scene--mars"),t.dimensions=TIMELINE.getDimensions(),t.buildAnimations(),t.buildScenes()},buildAnimations:function(){t.ANI_tester=new TimelineMax,t.ANI_tester.set(".tester__element",{opacity:0,left:"-=50%",top:"+=45%",scale:2}),t.ANI_tester.to(".tester__element",1,{opacity:1,left:"+=50%",top:"-=45%",scale:1}),t.ANI_tester.to(".tester__element",1.5,{top:"+=5"}),t.ANI_tester.to(".tester__element",1.5,{top:"-=5"}),t.ANI_tester.to(".tester__element",1.5,{top:"+=5"}),t.ANI_tester.to(".tester__element",1.5,{top:"-=5"}),t.ANI_tester.to(".tester__element",1.5,{top:"+=5"}),t.ANI_tester.to(".tester__element",1.5,{top:"-=5"}),t.ANI_tester.to("#mars--testBox",.05,{opacity:0}),t.ANI_tester.to("#mars--testBox",.7,{opacity:0,y:"+=40"},"-=0.05"),t.ANI_tester.to(".tester__element",5,{left:"+=80%",top:"-=45%",scale:.1,opacity:0},"-=0.7"),t.ANI_toilet=new TimelineMax,t.ANI_toilet.set(".toilet__shadow img",{opacity:.4}),t.ANI_toilet.to(".toilet__shadow img",.1,{opacity:.5}),t.ANI_toilet.call(function(){$(".toilet__cabine").addClass("is-open")}),t.ANI_toilet.to(".toilet__shadow img",.01,{opacity:.6}),t.ANI_toilet.to(".mars__wishes .heading.fade",.05,{opacity:0}),t.ANI_toilet.call(function(){$(".toilet__cabine").removeClass("is-open")}),t.ANI_toilet.to(".toilet__element",1,{y:-(t.dimensions.window.height+100)}),t.ANI_toilet.to(".toilet__flamesHolder",1,{scale:2,opacity:1},"-=1"),t.ANI_toilet.to(".toilet__shadow img",1,{scale:1.5,opacity:.4},"-=1"),t.ANI_toilet.to(".toilet__shadow img",1,{opacity:0}),t.ANI_toilet.to(".toilet__flamesHolder",.25,{opacity:0}),t.ANI_toilet.to(".toilet__flamesHolder",6,{opacity:0}),t.ANI_certificate=new TimelineMax,t.ANI_certificate.to(".toilet__certificate img",10,{opacity:1}),t.ANI_certificate.to(".toilet__certificate img",.5,{opacity:0}),t.ANI_rotation=new TimelineMax,t.ANI_rotation.set(".toilet",{opacity:0,rotation:-70}),t.ANI_rotation.set(".mars__planet img",{rotation:-70}),t.ANI_rotation.set(".mars__boxHolder",{opacity:0,rotation:-120}),t.ANI_rotation.to(".brand img.type-text",.5,{opacity:0}),t.ANI_rotation.to(".toilet",.1,{opacity:1}),t.ANI_rotation.to(".mars__boxHolder",.1,{opacity:1}),t.ANI_rotation.to(".brand",1,{rotation:90}),t.ANI_rotation.to(".toilet",1,{rotation:0},"-=1"),t.ANI_rotation.to(".mars__boxHolder",1,{rotation:0},"-=1"),t.ANI_rotation.to(".mars__planet img",1,{rotation:0},"-=1"),t.ANI_rotation.to(".brand",.1,{opacity:1})},buildScenes:function(){t.SCROLL_controller=new ScrollMagic.Controller;t.$scene.outerHeight();$(".mars__bottomSpacer").height($("#mars--planet img").outerHeight()),t.planet_scene=new ScrollMagic.Scene({triggerElement:"#mars--planet-holder",triggerHook:1,duration:$("#mars--planet-holder").outerHeight()}).setClassToggle("body","arrived-at-mars").setPin("#mars--planet",{pushFollowers:!1}).addTo(t.SCROLL_controller);var e=$("#mars--wishes").outerHeight()+$("#mars--planet img").outerHeight()+500;t.wishes1_scene=new ScrollMagic.Scene({triggerElement:"#mars--wishes",triggerHook:.4,duration:e}).setPin("#mars--wishes",{pushFollowers:!1}).addTo(t.SCROLL_controller),t.wishes1_scene.on("enter",function(e){MATHEMATICS.pauseVideo()}),t.wishes2_scene=new ScrollMagic.Scene({triggerElement:"#mars--wishes",triggerHook:.4,duration:e}).setTween(t.ANI_toilet).addTo(t.SCROLL_controller),t.outro_scene=new ScrollMagic.Scene({triggerElement:"#mars--outro",triggerHook:.4,duration:$("#mars--outro").outerHeight()}).setTween(t.ANI_certificate).setPin("#mars--outro",{pushFollowers:!1}).addTo(t.SCROLL_controller),t.thanks_scene=new ScrollMagic.Scene({triggerElement:"#mars--thanks",triggerHook:.4,duration:$("#mars--thanks").outerHeight()}).setPin("#mars--thanks",{pushFollowers:!1}).addTo(t.SCROLL_controller),t.testAni_scene=new ScrollMagic.Scene({triggerElement:"#mars--thanks",triggerHook:.4,duration:$("#mars--thanks").outerHeight()}).setTween(t.ANI_tester).addTo(t.SCROLL_controller),t.rotation_scene=new ScrollMagic.Scene({triggerElement:"#mars--planet-holder",triggerHook:0,duration:.8*t.dimensions.window.height}).setTween(t.ANI_rotation).addTo(t.SCROLL_controller)},destroy:function(){t.SCROLL_controller.destroy(!0),t.planet_scene.destroy(!0),t.wishes1_scene.destroy(!0),t.wishes2_scene.destroy(!0),t.outro_scene.destroy(!0),t.thanks_scene.destroy(!0),t.testAni_scene.destroy(!0),t.rotation_scene.destroy(!0)}};return{init:function(){t.init()},rebuild:function(){t.destroy(),t.buildAnimations(),t.buildScenes()}}}(window),RELEASE=function(){var t={init:function(){if(t.$element=$(".release"),!t.$element.length)return!1;t.$scene=$("#scene--release"),t.dimensions=TIMELINE.getDimensions(),t.buildAudioPlayer(),t.buildAnimations(),t.buildScenes()},buildAnimations:function(){t.ANI_release=new TimelineMax,t.ANI_release.set(".rocket__sideBlaster .rocket__flames",{opacity:0}),t.ANI_release.set(".rocket__sideBlaster.type-left",{x:-200,y:.75*t.dimensions.window.height,rotation:-75}),t.ANI_release.set(".rocket__sideBlaster.type-right",{x:200,y:.75*t.dimensions.window.height,rotation:75}),t.ANI_release.call(function(){$(".rocket").addClass("is-released"),t.pauseVideo()}),t.ANI_release.to(".rocket__sideBlaster .rocket__flames",7,{opacity:0}),t.ANI_release.call(function(){$(".rocket").removeClass("is-released")}),t.ANI_release.to(".rocket__sideBlaster.type-left",1,{x:-100,y:100,rotation:-25}),t.ANI_release.to(".rocket__sideBlaster.type-right",1,{x:100,y:100,rotation:25},"-=1"),t.ANI_release.to(".rocket__sideBlaster.type-left",1,{x:0,y:0,rotation:0}),t.ANI_release.to(".rocket__sideBlaster.type-right",1,{x:0,y:0,rotation:0},"-=1"),t.ANI_release.call(function(){t.playVideo()}),t.ANI_release.to(".rocket__sideBlaster .rocket__flames",1,{opacity:1})},buildScenes:function(){t.SCROLL_controller=new ScrollMagic.Controller;var e=t.$scene.outerHeight();t.release_scene=new ScrollMagic.Scene({triggerElement:"#scene--release",triggerHook:1,duration:e}).setTween(t.ANI_release).addTo(t.SCROLL_controller)},buildAudioPlayer:function(){t.audioId=t.$scene.data("video-id"),t.audioplayer=new YT.Player("release-audioplayer--element",{height:"390",width:"640",videoId:t.audioId,playerVars:{playsinline:1},events:{onReady:function(){t.playerReady=!0},onStateChange:function(){}}})},playVideo:function(){if(!t.playerReady)return!1;t.audioplayer.playVideo()},pauseVideo:function(){if(!t.playerReady)return!1;t.audioplayer.pauseVideo()},destroy:function(){t.SCROLL_controller.destroy(!0),t.release_scene.destroy(!0)}};return{init:function(){t.init()},enableAudio:function(){t.playVideo(),t.pauseVideo()},rebuild:function(){t.destroy(),t.buildAnimations(),t.buildScenes()}}}(window),MATHEMATICS=function(){var t={init:function(){if(t.$element=$(".mathematics"),!t.$element.length)return!1;t.$scene=$("#scene--mathematics"),t.buildAudioPlayer(),t.buildAnimations(),t.buildScenes()},buildAnimations:function(){t.ANI_doodle1=new TimelineMax,t.ANI_doodle1.to("#mathematics--doodle-01 img",1,{opacity:0,y:"+=450"}),t.ANI_doodle2=new TimelineMax,t.ANI_doodle2.to("#mathematics--doodle-02 img",1,{opacity:0,y:"+=250"}),t.ANI_doodle3=new TimelineMax,t.ANI_doodle3.to("#mathematics--doodle-03 img",1,{opacity:0,y:"+=580"}),t.ANI_doodle4=new TimelineMax,t.ANI_doodle4.to("#mathematics--doodle-04 img",1,{opacity:0,y:"+=580"}),t.ANI_doodle5=new TimelineMax,t.ANI_doodle5.to("#mathematics--doodle-05 img",1,{opacity:0,y:"+=280"}),t.ANI_doodle6=new TimelineMax,t.ANI_doodle6.to("#mathematics--doodle-06 img",1,{opacity:0,y:"+=480"}),t.ANI_doodle7=new TimelineMax,t.ANI_doodle7.to("#mathematics--doodle-07 img",1,{opacity:0,y:"+=120"}),t.ANI_doodle8=new TimelineMax,t.ANI_doodle8.to("#mathematics--doodle-08 img",1,{opacity:0,y:"+=220"})},buildScenes:function(){t.SCROLL_controller=new ScrollMagic.Controller;var e=$("#mathematics--pin-text").outerHeight();t.pinText_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--pin-text",triggerHook:.5,duration:e}).setPin("#mathematics--text",{pushFollowers:!1}).addTo(t.SCROLL_controller),t.doodle1_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-01",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle1).addTo(t.SCROLL_controller),t.doodle2_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-02",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle2).addTo(t.SCROLL_controller),t.doodle3_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-03",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle3).addTo(t.SCROLL_controller),t.doodle4_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-04",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle4).addTo(t.SCROLL_controller),t.doodle5_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-05",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle5).addTo(t.SCROLL_controller),t.doodle6_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-06",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle6).addTo(t.SCROLL_controller),t.doodle7_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-07",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle7).addTo(t.SCROLL_controller),t.doodle8_scene=new ScrollMagic.Scene({triggerElement:"#mathematics--doodle-08",triggerHook:0,duration:"100%"}).setTween(t.ANI_doodle8).addTo(t.SCROLL_controller),t.doodle1_scene.on("enter",function(e){t.playVideo()})},buildAudioPlayer:function(){t.audioId=t.$scene.data("video-id"),t.audioplayer=new YT.Player("mathematics-audioplayer--element",{height:"390",width:"640",videoId:t.audioId,playerVars:{playsinline:1},events:{onReady:function(){t.playerReady=!0},onStateChange:function(){}}})},playVideo:function(){if(!t.playerReady)return!1;t.audioplayer.playVideo()},pauseVideo:function(){if(!t.playerReady)return!1;t.audioplayer.pauseVideo()},destroy:function(){t.SCROLL_controller.destroy(!0),t.pinText_scene.destroy(!0),t.doodle1_scene.destroy(!0),t.doodle2_scene.destroy(!0),t.doodle3_scene.destroy(!0),t.doodle4_scene.destroy(!0),t.doodle5_scene.destroy(!0),t.doodle6_scene.destroy(!0),t.doodle7_scene.destroy(!0),t.doodle8_scene.destroy(!0)}};return{init:function(){t.init()},enableAudio:function(){t.playVideo(),t.pauseVideo()},pauseVideo:function(){t.pauseVideo()},rebuild:function(){t.destroy(),t.buildAnimations(),t.buildScenes()}}}(window),TWEET=function(){var t={init:function(){if(t.$element=$(".tweet"),!t.$element.length)return!1;t.$scene=$("#scene--tweet"),t.buildAnimations(),t.buildScenes()},buildAnimations:function(){t.ANI_tweet=new TimelineMax({repeat:-1}),t.ANI_tweet.to("#tweet--box",2,{y:"-=25",ease:Sine.easeInOut}),t.ANI_tweet.to("#tweet--box",2,{y:"+=25",ease:Sine.easeInOut})},buildScenes:function(){t.SCROLL_controller=new ScrollMagic.Controller;var e=t.$scene.outerHeight();t.tweet_scene=new ScrollMagic.Scene({triggerElement:"#scene--tweet",triggerHook:"onLeave",duration:e}).setTween(t.ANI_tweet).addTo(t.SCROLL_controller),t.tweet_scene.on("enter",function(e){WORLD.pauseVideo()})},destroy:function(){t.SCROLL_controller.destroy(!0),t.tweet_scene.destroy(!0)}};return{init:function(){t.init()},rebuild:function(){t.destroy(),t.buildAnimations(),t.buildScenes()}}}(window),WORLD=function(){var t={settings:{isInit:!1,isReady:!1,isStarted:!1,isLaunched:!1,isComplete:!1,thresholdStart:75,thresholdLaunch:10},init:function(){return!t.settings.isInit&&(t.$element=$(".world"),!!t.$element.length&&(t.$scene=$("#scene--world"),t.$base=$("#world--base"),t.$rocket=$("#world--rocket"),t.settings.isInit=!0,t.buildAudioPlayer(),t.buildAnimations(),void t.buildScenes()))},buildAnimations:function(){t.ANI_text=new TimelineMax,t.ANI_text.to("#world--text",2,{top:"-=300",ease:"power2.in"}),t.ANI_marker=new TimelineMax,t.ANI_marker.to("#world--textMarker",2,{boxShadow:"inset 0px 0px #5371ff"})},buildScenes:function(){t.SCROLL_controller=new ScrollMagic.Controller;var e=t.$scene.outerHeight();t.text_scene=new ScrollMagic.Scene({triggerElement:"#scene--world",triggerHook:"onLeave",duration:e}).setTween(t.ANI_text).addTo(t.SCROLL_controller),t.marker_scene=new ScrollMagic.Scene({triggerElement:"#scene--world",triggerHook:"onLeave",offset:e/4,duration:40}).setTween(t.ANI_marker).addTo(t.SCROLL_controller)},startEngines:function(){$("body").addClass("world--liftoff-initiated")},updateScene:function(){return!!t.settings.isInit&&(!!t.settings.isReady&&((!t.settings.isStarted||!t.isLaunched)&&(t.dimensions=TIMELINE.getDimensions(),void(t.isLaunched||t.dimensions.scroll.position+t.dimensions.window.height+t.settings.thresholdLaunch<t.dimensions.scroll.height&&(t.settings.isLaunched=!0,e=2*t.dimensions.window.height,TweenMax.to(t.$base[0],.35,{bottom:"+="+e,scale:8,opacity:0,ease:"Power1.easeIn"}).eventCallback("onComplete",function(){t.settings.isComplete=!0,$("body").addClass("world--liftoff-complete")}))))));var e},buildAudioPlayer:function(){t.audioId=t.$scene.data("video-id"),t.audioplayer=new YT.Player("world-audioplayer--element",{height:"390",width:"640",videoId:t.audioId,playerVars:{playsinline:1},events:{onReady:function(){t.playerReady=!0,TIMELINE.worldReady()},onStateChange:function(){}}})},playVideo:function(){if(!t.playerReady)return!1;t.audioplayer.playVideo()},pauseVideo:function(){if(!t.playerReady)return!1;t.audioplayer.pauseVideo()}};return{init:function(){t.init()},ready:function(){t.settings.isReady=!0},update:function(){t.updateScene()},startEngines:function(){t.startEngines()},enableAudio:function(){t.playVideo(),t.pauseVideo()},playVideo:function(){t.playVideo()},pauseVideo:function(){t.pauseVideo()},rebuild:function(){}}}(window);