window.addEventListener('load', function () {
  var arrow_l = document.querySelector('.arrow-l');
  var arrow_r = document.querySelector('.arrow-r');
  var focus = document.querySelector('.focus');
  var focusWith = focus.offsetWidth;
  focus.addEventListener('mouseenter', function () {
    arrow_l.style.display = 'block';
    arrow_r.style.display = 'block';
    clearInterval(timer);
  })
  focus.addEventListener('mouseleave', function () {
    arrow_l.style.display = 'none';
    arrow_r.style.display = 'none';
    timer = setInterval(function () {
      arrow_r.click();
    }, 2000);
  })
  var ul = focus.querySelector('ul');
  var ol = focus.querySelector('.circle');
  for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement('li');
    li.setAttribute('index', i);
    ol.appendChild(li);
    li.addEventListener('click', function () {
      for (var i = 0; i < ol.children.length; i++) {
        ol.children[i].className = '';
      }
      this.className = 'current';
      var index = this.getAttribute('index');
      num = circle = index;
      animate(ul, -index * focusWith);
    })
  }
  ol.children[0].className = 'current';
  var first = ul.children[0].cloneNode(true);
  ul.appendChild(first);
  var num = 0;
  var circle = 0;
  var flag = true;
  arrow_r.addEventListener('click', function () {
    if (flag) {
      flag = false;
      if (num == ul.children.length - 1) {
        ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(ul, -num * focusWith, function () {
        flag = true;
      });
      circle++;
      // if (circle == ol.children.length) {
      //     circle = 0;
      // }
      circle = circle == ol.children.length ? 0 : circle;
      circleChange()
    }
  });
  arrow_l.addEventListener('click', function () {
    if (num == 0) {
      num = ul.children.length - 1;
      ul.style.left = -num * focusWith + 'px';
    }
    num--;
    animate(ul, -num * focusWith);
    circle--;
    // if (circle < 0) {
    //     circle = ol.children.length - 1;
    // }
    circle = circle < 0 ? ol.children.length - 1 : circle;
    circleChange()
  });
  function circleChange () {
    for (var i = 0; i < ol.children.length; i++) {
      ol.children[i].className = '';
    }
    ol.children[circle].className = 'current';
  }
  var timer = setInterval(function () {
    arrow_r.click();
  }, 2000);
  var sliderbar = document.querySelector('.slider-bar');
  var goBack = document.querySelector('.goBack');
  // var recom = document.querySelector('.recom');
  // // var recomTop = recom.offsetTop;
  // var sliderbarTop = sliderbar.offsetTop;
  document.addEventListener('scroll', function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset >= 338) {
      sliderbar.style.position = 'fixed';
      sliderbar.style.top = '50px';
      goBack.style.display = 'block';
    } else {
      sliderbar.style.position = 'absolute';
      sliderbar.style.top = '338px';
      goBack.style.display = 'none';
    }
  })
  goBack.addEventListener('click', function () {
    window.scroll(0, 0);
  })
})
