//轮播的类名
var obj = {
	wrap:'tq-carousel',
	imgs:'tq-carousel-img',
	nextClassName:'tq-next',
	prevClassName:'tq-prev',
	navClassName:'tq-carousel-nav',
	navSelected:'actives',
	scrollStyle:'scrollX',


};
var test = new tq();
test.showcarousel(obj);
var btn = document.getElementsByTagName('button')[0];
test.addEvent(btn,'click',function(){
	test.ModelShow('aaa');
});
