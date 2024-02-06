import wixLocation from 'wix-location';
import { local } from 'wix-storage';

$w.onReady(function () {
    $w("#portfolioaccountingbutton").onClick((event) => {
        console.log('click');
        local.setItem("slide-number", "0");
        wixLocation.to("/services");
    })
});

$w.onReady(function () {
    $w("#partnershipaccountingbutton").onClick((event) => {
        console.log('click');
        local.setItem("slide-number", "1");
        wixLocation.to("/services");
    })
});

$w.onReady(function () {
    $w("#investoraccountingbutton").onClick((event) => {
        console.log('click');
        local.setItem("slide-number", "2");
        wixLocation.to("/services");
    })
});

$w.onReady(function () {
    $w("#fundbutton").onClick((event) => {
        console.log('click');
        local.setItem("slide-number", "3");
        wixLocation.to("/services");
    })
});

$w.onReady(function () {
    $w("#startupbutton").onClick((event) => {
        console.log('click');
        local.setItem("slide-number", "4");
        wixLocation.to("/services");
    })
});

$w.onReady(function () {
    $w("#auditbutton").onClick((event) => {
        console.log('click');
        local.setItem("slide-number", "5");
        wixLocation.to("/services");
    })
});

$w.onReady(function () {
    $w("#offshorebutton").onClick((event) => {
        console.log('click');
        local.setItem("slide-number", "6");
        wixLocation.to("/services");
    })
});