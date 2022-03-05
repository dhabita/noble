(function () {

  "use strict";

  var app = new Framework7;
  var $$ = Dom7;
  var viewMain = app.addView('#view-main');
  var pullToRefreshPosts = $$('#content-posts');

  // When pullToRefresh is called
  pullToRefreshPosts.on('refresh', function (e) {

    // Simulation of an Ajax request for demo
    setTimeout(function(){
      $$('#post-list').prepend(''
        // '<li>'+
        //   '<a href="news/'+Math.floor(Math.random()*1000)+'">'+
        //     '<div class="post-thumbnail"><img src="https://picsum.photos/500/200?random='+Math.random()+'" alt=""></div>'+
        //     '<div class="post-infos">'+
        //       '<div class="post-title">  <span>Ninebot setting  Tutorial 1</span></div>'+
        //       '<div class="post-category green">Ethereum</div>'+
        //       '<div class="post-date"><i class="icon ion-android-time"></i>12 minutes ago</div>'+
        //     '</div>'+
        //   '</a>'+
        // '</li>'
      );
      app.pullToRefreshDone(pullToRefreshPosts);
    }, 1500);
  });

  var isLoading = false;

  // When infiniteScroll is called
  $$('#content-posts').on('infinite', function () {
    if (isLoading) return;
    isLoading = true;

    // Simulation of an Ajax request for demo
    setTimeout(function(){
      $$('#post-list').append(''
        // '<li>'+
        // '<a href="news/'+Math.floor(Math.random()*1000)+'">'+
        //     '<div class="post-thumbnail"><img src="https://picsum.photos/500/200?random='+Math.random()+'" alt=""></div>'+
        //     '<div class="post-infos">'+
        //       '<div class="post-title">  <span>Ninebot setting  Tutorial 1</span></div>'+
        //       '<div class="post-category green">Bitcoin</div>'+
        //       '<div class="post-date"><i class="icon ion-android-time"></i>12 minutes ago</div>'+
        //     '</div>'+
        //   '</a>'+
        // '</li>'+
        // '<li>'+
        // '<a href="news/'+Math.floor(Math.random()*1000)+'">'+
        //     '<div class="post-thumbnail"><img src="https://picsum.photos/500/200?random='+Math.random()+'" alt=""></div>'+
        //     '<div class="post-infos">'+
        //       '<div class="post-title">  <span>Ninebot setting  Tutorial 1</span></div>'+
        //       '<div class="post-category yellow">Bitcoin</div>'+
        //       '<div class="post-date"><i class="icon ion-android-time"></i>12 minutes ago</div>'+
        //     '</div>'+
        //   '</a>'+
        // '</li>' 
      );
      $$('#infinite-loader').remove();
      isLoading = false;
    }, 2000);

  });

  // When a post is opened
  app.onPageInit('post', function(page){
    $$('#view-main .back-hidden').toggleClass('back-hidden back-visible');
  });

  // When back arrow is clicked
  app.onPageBack('post', function(e){
    $$('#view-main .back-visible').toggleClass('back-hidden back-visible');
  });

}());
