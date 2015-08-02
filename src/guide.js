$(document).ready(function() {
  $(".guide-images").each(function() {
    git = $("<div class='guide-image-thumbs'></div>")

    maxHeightRatio = 0;
    imageCounter = 0;
    $(this).find("img").each(function() {
      git.append($(this))
      maxHeightRatio = Math.max($(this)[0].naturalHeight/$(this)[0].naturalWidth, maxHeightRatio)
      imageCounter++
    })
    $(this).empty()
    git_first_img_src = git.find("img").first().attr("src")
    git_first_img_cap = git.find("img").first().attr("data-caption")
    $(this).attr("data-heightratio", maxHeightRatio)
    height = $(this).width() * maxHeightRatio
    $(this).append('<div class="guide-image-main" style="height: '+height+'px"><img src="'+git_first_img_src+'">' + 
      '<div class="guide-image-caption">'+git_first_img_cap+'</div></div>')
    if(imageCounter>1) {
      $(this).append(git)
    }
    $(this).show()
  })
  $(".guide-image-thumbs").find("img").click(function() {
    imgsrc = $(this).attr("src")
    imgcaption = $(this).attr("data-caption")
    $(this).closest(".guide-images").find(".guide-image-main").find("img").attr("src", imgsrc)
    $(this).closest(".guide-images").find(".guide-image-caption").text(imgcaption)
  })

  $(window).resize(function() {
    $(".guide-images").each(function() {
      heightRatio = $(this).attr("data-heightratio")
      console.log(heightRatio)
      height = $(this).width() * maxHeightRatio
      $(this).find(".guide-image-main").css("height", height + "px")
    })
  })



  var ua = navigator.userAgent.toLowerCase();
  alert(ua);
  if(ua.search(/(iphone)|(ipod)|(android)/) != -1) {
    $(".guide-for-desktop").hide();
    $(".guide-for-mobile").show();
  }
  else {
    $(".guide-for-desktop").show();
    $(".guide-for-mobile").hide();
  }  
})