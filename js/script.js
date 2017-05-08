;(function gallery() {
		var number = 1;
		a = document.getElementById('a');
		b = document.getElementById('b');
		c = document.getElementById('c');
		d = document.getElementById('d');
		e = document.getElementById('e');
		f = document.getElementById('f');
		g = document.getElementById('g');
		h = document.getElementById('h');
		i = document.getElementById('i');
		j = document.getElementById('j');
		k = document.getElementById('k');
		l = document.getElementById('l');
		m = document.getElementById('m');
		n = document.getElementById('n');
		o = document.getElementById('o');
		p = document.getElementById('p');
		q = document.getElementById('q');
		r = document.getElementById('r');
		s = document.getElementById('s');
		t = document.getElementById('t');
		
		des = new Array();
		des[1] = '<h2>Брутальное фото в лесу</h2>';
		des[2] = '<h2>С медалью за 2-ое место по плаванию</h2>';
		des[3] = '<h2>Перед городской эстафетой</h2>';
		des[4] = '<h2>Результаты первой зачётной недели</h2>';
		des[5] = '<h2>Результаты первой сессии</h2>';
		des[6] = '<h2>Гениальные мудрости</h2>';
		des[7] = '<h2>Перед тем, как нырнуть в 4°С</h2>';
		des[8] = '<h2>Школьный выпускной</h2>';
		des[9] = '<h2>Закат над Волгой</h2>';
		des[10] = '<h2>Какой-то пруд</h2>';
		des[11] = '<h2>Моя компьютерная переферия</h2>';
		des[12] = '<h2>Я и мой друг - хоббит в LOTRO</h2>';
		des[13] = '<h2>Северный Итилиен в LOTRO</h2>';
		des[14] = '<h2>Моё содружество в LOTRO</h2>';
		des[15] = '<h2>База-крепость в ARK</h2>';
		des[16] = '<h2>Чемпионат мира по водным видам спорта в Казани</h2>';
		des[17] = '<h2>Голубое озеро</h2>';
		des[18] = '<h2>Котик с медалью за 3-ье место по плаванию</h2>';
		des[19] = '<h2>Закат над Сноуборном в LOTRO</h2>';
		des[20] = '<h2>Совнгард в SKYRIM</h2>';
		
		here.addEventListener('click', moveForward);
		there.addEventListener('click', moveBackward);
		
		a.addEventListener('click', ad);
		b.addEventListener('click', bd);
		c.addEventListener('click', cd);
		d.addEventListener('click', dd);
		e.addEventListener('click', ed);
		f.addEventListener('click', fd);
		g.addEventListener('click', gd);
		h.addEventListener('click', hd);
		i.addEventListener('click', id);
		j.addEventListener('click', jd);
		k.addEventListener('click', kd);
		l.addEventListener('click', ld);
		m.addEventListener('click', md);
		n.addEventListener('click', nd);
		o.addEventListener('click', od);
		p.addEventListener('click', pd);
		q.addEventListener('click', qd);
		r.addEventListener('click', rd);
		s.addEventListener('click', sd);
		t.addEventListener('click', td);
		
		function moveForward() {
			number++;
			if(number > 20) {number = 1}
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			text.innerHTML = des[number];
		};
		
		function moveBackward() {
			number--;
			if(number < 1) {number = 20}
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			text.innerHTML = des[number];
		};
		$("#here").click(function() {
			$("#image").animate({
				marginLeft: '30%',
				height: '30vh'
			}, 500);
			$("#image").animate({
				marginLeft: '-30%',
				height: '70vh'
			}, 500);
			$("#image").animate({
				marginLeft: '0%',
				height: '60vh'
			}, 500);
		});
		$("#there").click(function() {
			$("#image").animate({
				marginRight: '30%',
				height: '30vh'
			}, 500);
			$("#image").animate({
				marginRight: '-30%',
				height: '70vh'
			}, 500);
			$("#image").animate({
				marginRight: '0%',
				height: '60vh'
			}, 500);
		});
		function ad() {
			number = a.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[1];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function bd() {
			number = b.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[2];
			$("#image").animate({
				height: '30vh',
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function cd() {
			number = c.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[3];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function dd() {
			number = d.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[4];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function ed() {
			number = e.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[5];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function fd() {
			number = f.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[6];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function gd() {
			number = g.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[7];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function hd() {
			number = h.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[8];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function id() {
			number = i.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[9];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function jd() {
			number = j.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[10];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function kd() {
			number = k.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[11];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function ld() {
			number = l.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[12];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function md() {
			number = m.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[13];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function nd() {
			number = n.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[14];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function od() {
			number = o.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[15];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function pd() {
			number = p.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[16];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function qd() {
			number = q.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[17];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function rd() {
			number = r.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[18];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function sd() {
			number = s.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[19];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
		function td() {
			number = t.getAttribute('name'); 
			image.setAttribute('src','gallery/big/' + number+ '.jpg');
			window.scrollTo(0, 0);
			text.innerHTML = des[20];
			$("#image").animate({
				height: '30vh'
			}, 500);
			$("#image").animate({
				height: '60vh'
			}, 500);
		};
		
})();