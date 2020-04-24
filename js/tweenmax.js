/*function viewport() {
	var e = window, a = 'inner';
	if (!('innerWidth' in window )) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}*/


/*$(function() {

	if (viewport().width > 1023) {
		var controllerCompetencies = new ScrollMagic.Controller();
		var controllerFacts = new ScrollMagic.Controller();

		var tweenCompetenciesVideo = TweenMax.to('#triggerCompetenciesVideo', 1, {
			opacity: 1,
			zIndex: 1
		});
		var tweenCompetenciesContent = TweenMax.to('#triggerCompetenciesContent', 1, {
			top: 0
		});
		var tweenFacts = TweenMax.to('#triggerFacts', 1, {
			top: 0,
			opacity: 1
		});

		var sceneCompetenciesVideo = new ScrollMagic.Scene({
			triggerElement: '#targetCompetencies',
			duration: 250,
			offset: -125
		}).setTween(tweenCompetenciesVideo).addTo(controllerCompetencies);

		var sceneCompetenciesContent = new ScrollMagic.Scene({
			triggerElement: '#targetCompetencies',
			duration: 350,
			offset: -125
		}).setTween(tweenCompetenciesContent).addTo(controllerCompetencies);

		var sceneFacts = new ScrollMagic.Scene({
			triggerElement: '#targetCompetencies',
			duration: 250,
			offset: 0
		}).setTween(tweenFacts).addTo(controllerFacts);

		sceneCompetenciesVideo.on('progress', function () {
			$('body').css({
				overflowY: 'hidden',
				paddingRight: '17px'
			});
		});
	}

});*/


(function() {
	window.addEventListener("load", function() {
		if (!window.matchMedia("(max-width: 600px)").matches) {
			const elementToPin = document.querySelector(".production-header");
			const overlay = document.querySelector(".production-header__gradient");
			const overlayText = document.querySelector(
				".production-header__inner"
			);
			const overlayTextStart = document.querySelector(
				".production-header__start"
			);
			const header = document.querySelector(".header");
			const controller = new ScrollMagic.Controller();

			const timeline = new TimelineMax();

			timeline.from(overlay, 1, {
				top: '100%'
			}).from(header, 1, {
				position: 'fixed'
			}, 0).fromTo(overlayText, 1, {
				top: (overlayText.offsetHeight - overlayTextStart.offsetHeight - 47)
			}, {
				top: 0
			}, 0);

			const scene = new ScrollMagic.Scene({
				triggerHook: 1,
				offset:
				window.pageYOffset +
				elementToPin.getBoundingClientRect().top -
				document.documentElement.clientHeight +
				elementToPin.offsetHeight,
				duration: "120%"
			})
			// .addIndicators({
			//     name: "compet-scene",
			//     colorTrigger: "black",
			//     colorStart: "orange",
			//     colorEnd: "blue"
			// })
				.setTween(timeline)
				.setPin(elementToPin, { pushFollowers: true })
				.addTo(controller);

			window.addEventListener("resize", function() {
				scene.offset(
					window.pageYOffset +
					elementToPin.getBoundingClientRect().top -
					document.documentElement.clientHeight +
					elementToPin.offsetHeight
				);
				scene.update();
			});
		} else {
			return;
		}
	});
})();