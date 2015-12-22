(function(angular) {
    "use strict";

var app = angular.module('christmasApp', []);
    
    app.controller('ChristmasController', function($scope){
        $scope.github= {
            url_extension: "cat-christmas-slider"
        }
        
        $scope.love_notes = [
            {
            img: 'img/cat1.jpg',
            heading: 'Yosemite Vernal Falls Hike',
            reason: 'I am so attracted to your personality. Your loving and nurturing heart makes you such a beautiful being inside and out. Not just toward me, but toward others that mean a lot to you in your life.'
            },
            {
            img: 'img/cat2.jpg',
            heading: 'Morro Bay Montana de Oro Hike',
            reason: 'I appreciate the fact that you take time out of your busy day to see how I am doing. I also love when you share the different experiences you had throughout your day and how you are constantly growing.'
            },
            {
            img: 'img/cat3.jpg',
            heading: 'Morro Bay Montana de Oro Hike - Oats Trail',
            reason: 'I love your passion that you have toward your art form. I love what a hard worker you are at making yourself better at what you love doing.'
            },
            {
            img: 'img/cat4.jpg',
            heading: 'The Mitchinson Compound',
            reason: 'I really admire the way you take the best from people even if they have been unkind to you in the past to fuel your decision to love them.'
            },
            {
            img: 'img/cat5.jpg',
            heading: 'Chafee Zoo - Our first trip together',
            reason: 'You are such a nurturing, kind, and loving soul. You are always there for me and I would never hesitate to say that you are the best companion that I have ever had.'
            },
            {
            img: 'img/cat6.jpg',
            heading: 'Downtown Fresno - Our First Art Hop',
            reason: 'You are the perfect combination of beautiful, sexy, and gorgeous. I love that I am so physically, emotional, and spiritually attracted to you.'
            },
            {
            img: 'img/cat7.jpg',
            heading: 'Santa Cruz - The Fishermans Warf',
            reason: 'I love the fact that you are so encouraging and supportive of my life path and passion. It means so much to me that you want me to be doing what makes me happy.'
            },
            {
            img: 'img/cat8.jpg',
            heading: 'Yosemite - At the top of Vernal Falls',
            reason: 'I love your hunger for truth. Your need to know where things are grounded in and not just taking information or scripture by what others think but by investigating for yourself. You are such an intelligent person!'
            },
            {
            img: 'img/cat9.jpg',
            heading: 'Disneyland - Outside of the Tiki Hut',
            reason: 'I really appreciate how much you respect and honor yourself. You have very honorable boundaries and virtues. I love just how grounded you are as a human being.'
            },
            {
            img: 'img/cat10.jpg',
            heading: 'Sequioa National Park - Tokopah Falls Trail',
            reason: 'I really appreciate and find great joy in what a talented artist you are. I love that you love writing letters and sealing them with wax. I love that you are just a breath taking actress.'
            },
            {
            img: 'img/cat11.jpg',
            heading: 'Chafee Zoo - Pre Thanksgiving Visit with the Lions!',
            reason: 'I love that you love me truly for who I am and not for what I can do for you.'
            }
        ]
    });
    
})(window.angular);