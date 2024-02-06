export function portfolioaccounting_click(event,$w) {
	$w('#slideshowservices').changeSlide(0);
}

export function partnershipaccounting_click(event,$w) {
	$w('#slideshowservices').changeSlide(1);
}

export function investoraccounting_click(event,$w) {
	$w('#slideshowservices').changeSlide(2);
}

export function fundadministration_click(event,$w) {
	$w('#slideshowservices').changeSlide(3);
}

export function startupsolutions_click(event,$w) {
	$w('#slideshowservices').changeSlide(4);
}

export function audittaxservices_click(event,$w) { 
	$w('#slideshowservices').changeSlide(5);
}

export function offshoreservicing_click(event,$w) {
	$w('#slideshowservices').changeSlide(6);
}

import {local} from 'wix-storage';

$w.onReady(function () {
   let num = Number(local.getItem("slide-number"));
   $w("#slideshowservices").changeSlide(num);
});