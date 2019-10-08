// 筛选地区点击事件
$('.left-module-wrapper .module-card-wrapper li').click(function() {
  $(this).addClass('select-tag a').siblings().removeClass('select-tag a')
})

// 筛选学校点击事件
$('.hot-school li').click(function() {
  $(this).addClass('select-tag a').siblings().removeClass('select-tag a')
})