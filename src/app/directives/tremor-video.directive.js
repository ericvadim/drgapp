(function () {
    'use strict';

    angular
        .module('app')
        .directive('tremorVideo', function () {
            var directive = {};

            directive.restrict = 'A';

            var html = '<div class="tremor-video">';
            html += '<video id="{{vid}}" class="video-js vjs-default-skin" preload="auto" width="320" height="200" loop>';
            html += '<source src="http://fp31r.ads.tremorhub.com/ad/tag?adCode=m523r-uxl0e&playerWidth=550&playerHeight=300&mediaId=DRGAPP&mediaTitle=DRGAPP%20Testing&mediaDesc=DRGAPP%20Testing%20URL&mediaUrl=http://drgapp.com/&srcPageUrl=http://drgapp.com/" type="video/mp4"></source>';
            html += '<p>Video Playback Not Supported</p>';
            html += '</video>';
            html += '</div>';

            directive.template = html;

            directive.scope = {
                vid: "@"
            };

            directive.link = function (scope, element, attrs) {
                setTimeout(function () {
                    if (document.getElementById(attrs.vid) != undefined) {
                        var tremor = videojs(attrs.vid);
                        tremor.muted(true);
                        tremor.ads();
                        tremor.vast({
                            skip: -1,
                            url: "http://fp31r.ads.tremorhub.com/ad/tag?adCode=m523r-uxl0e&playerWidth=550&playerHeight=300&mediaId=DRGAPP&mediaTitle=DRGAPP%20Testing&mediaDesc=DRGAPP%20Testing%20URL&mediaUrl=http://drgapp.com/&srcPageUrl=http://drgapp.com/"
                        });
                        var waitTime = 150;
                        setTimeout(function () {
                            // Resume play if the element if is paused.
                            if (tremor.paused) {
                                tremor.play();
                            }
                        }, waitTime);
                    }
                }, 500)
            };
            return directive;
        });
})();
