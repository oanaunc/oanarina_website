/* Event galleries use the same LightGallery viewer as the art pages. */
(function ($) {
    "use strict";
    // The bundled fullscreen module exits fullscreen on every close, even when disabled.
    // These event galleries use the standard overlay only.
    if ($.fn.lightGallery) delete $.fn.lightGallery.modules.fullscreen;
    var galleries = {
    "spring-salon-2026": [
        {
            "src": "images/exhibitions/web/spring-salon-2026/01.jpg",
            "thumb": "images/exhibitions/web/spring-salon-2026/01.jpg",
            "subHtml": "<h4>Spring Salon of AAFR Members</h4><p>National Library of Romania · Bucharest, Romania<br>April 2026</p><p>Photography group exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/spring-salon-2026/02.jpg",
            "thumb": "images/exhibitions/web/spring-salon-2026/02.jpg",
            "subHtml": "<h4>Spring Salon of AAFR Members</h4><p>National Library of Romania · Bucharest, Romania<br>April 2026</p><p>Photography group exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/spring-salon-2026/03.jpg",
            "thumb": "images/exhibitions/web/spring-salon-2026/03.jpg",
            "subHtml": "<h4>Spring Salon of AAFR Members</h4><p>National Library of Romania · Bucharest, Romania<br>April 2026</p><p>Photography group exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/spring-salon-2026/04.jpg",
            "thumb": "images/exhibitions/web/spring-salon-2026/04.jpg",
            "subHtml": "<h4>Spring Salon of AAFR Members</h4><p>National Library of Romania · Bucharest, Romania<br>April 2026</p><p>Photography group exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/spring-salon-2026/05.jpg",
            "thumb": "images/exhibitions/web/spring-salon-2026/05.jpg",
            "subHtml": "<h4>Spring Salon of AAFR Members</h4><p>National Library of Romania · Bucharest, Romania<br>April 2026</p><p>Photography group exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/spring-salon-2026/06.jpg",
            "thumb": "images/exhibitions/web/spring-salon-2026/06.jpg",
            "subHtml": "<h4>Spring Salon of AAFR Members</h4><p>National Library of Romania · Bucharest, Romania<br>April 2026</p><p>Photography group exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/spring-salon-2026/07.jpg",
            "thumb": "images/exhibitions/web/spring-salon-2026/07.jpg",
            "subHtml": "<h4>Spring Salon of AAFR Members</h4><p>National Library of Romania · Bucharest, Romania<br>April 2026</p><p>Photography group exhibition</p>"
        }
    ],
    "game-mechanics-live": [
        {
            "src": "images/exhibitions/web/game-mechanics-live/02.jpg",
            "thumb": "images/exhibitions/web/game-mechanics-live/02.jpg",
            "subHtml": "<h4>Algoritmi care se joacă. Game Mechanics Live</h4><p>Titu Maiorescu University · Building M, room M113 · Bucharest, Romania<br>28 March 2026 · 10:00–14:00</p><p>Seminar with Oana Rinaldi exploring game mechanics, algorithms and interactive systems.</p>"
        },
        {
            "src": "images/exhibitions/web/game-mechanics-live/01.jpg",
            "thumb": "images/exhibitions/web/game-mechanics-live/01.jpg",
            "subHtml": "<h4>Algoritmi care se joacă. Game Mechanics Live</h4><p>Titu Maiorescu University · Building M, room M113 · Bucharest, Romania<br>28 March 2026 · 10:00–14:00</p><p>Seminar with Oana Rinaldi exploring game mechanics, algorithms and interactive systems.</p>"
        },
        {
            "src": "images/exhibitions/web/game-mechanics-live/03.jpg",
            "thumb": "images/exhibitions/web/game-mechanics-live/03.jpg",
            "subHtml": "<h4>Algoritmi care se joacă. Game Mechanics Live</h4><p>Titu Maiorescu University · Building M, room M113 · Bucharest, Romania<br>28 March 2026 · 10:00–14:00</p><p>Seminar with Oana Rinaldi exploring game mechanics, algorithms and interactive systems.</p>"
        }
    ],
    "openart-2026": [
        {
            "src": "images/exhibitions/web/openart-2026/01.jpg",
            "thumb": "images/exhibitions/web/openart-2026/01.jpg",
            "subHtml": "<h4>OpenArt2026</h4><p>Biblioteca Angelica · Rome, Italy<br>13–16 January 2026</p><p>Group art exhibition · XXIII edition of the OpenArt award</p>"
        },
        {
            "src": "images/exhibitions/web/openart-2026/02.jpg",
            "thumb": "images/exhibitions/web/openart-2026/02.jpg",
            "subHtml": "<h4>OpenArt2026</h4><p>Biblioteca Angelica · Rome, Italy<br>13–16 January 2026</p><p>Group art exhibition · XXIII edition of the OpenArt award</p>"
        }
    ],
    "winter-salon": [
        {
            "src": "images/exhibitions/web/winter-salon/13.jpg",
            "thumb": "images/exhibitions/web/winter-salon/13.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/01.jpg",
            "thumb": "images/exhibitions/web/winter-salon/01.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/02.jpg",
            "thumb": "images/exhibitions/web/winter-salon/02.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/03.jpg",
            "thumb": "images/exhibitions/web/winter-salon/03.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/04.jpg",
            "thumb": "images/exhibitions/web/winter-salon/04.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/05.jpg",
            "thumb": "images/exhibitions/web/winter-salon/05.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/06.jpg",
            "thumb": "images/exhibitions/web/winter-salon/06.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/07.jpg",
            "thumb": "images/exhibitions/web/winter-salon/07.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/08.jpg",
            "thumb": "images/exhibitions/web/winter-salon/08.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/09.jpg",
            "thumb": "images/exhibitions/web/winter-salon/09.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/10.jpg",
            "thumb": "images/exhibitions/web/winter-salon/10.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/11.jpg",
            "thumb": "images/exhibitions/web/winter-salon/11.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/12.jpg",
            "thumb": "images/exhibitions/web/winter-salon/12.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/14.jpg",
            "thumb": "images/exhibitions/web/winter-salon/14.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/15.jpg",
            "thumb": "images/exhibitions/web/winter-salon/15.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/16.jpg",
            "thumb": "images/exhibitions/web/winter-salon/16.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/winter-salon/17.jpg",
            "thumb": "images/exhibitions/web/winter-salon/17.jpg",
            "subHtml": "<h4>Winter Salon</h4><p>Art4All Gallery · Bucharest, Romania<br>December 2025 – January 2026</p><p>Group art exhibition</p>"
        }
    ],
    "doctoral-research-2025": [
        {
            "src": "images/exhibitions/web/doctoral-research-2025/13.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/13.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/01.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/01.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/02.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/02.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/03.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/03.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/04.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/04.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/05.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/05.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/06.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/06.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/07.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/07.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/08.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/08.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/09.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/09.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/10.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/10.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/11.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/11.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/12.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/12.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/14.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/14.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/15.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/15.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/16.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/16.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/doctoral-research-2025/17.jpg",
            "thumb": "images/exhibitions/web/doctoral-research-2025/17.jpg",
            "subHtml": "<h4>Doctoral Research Exhibition 2025</h4><p>Combinatul Fondului Plastic · Bucharest, Romania<br>December 2025</p><p>Group art exhibition</p>"
        }
    ],
    "romanian-graphics-2025": [
        {
            "src": "images/exhibitions/web/romanian-graphics-2025/02.jpg",
            "thumb": "images/exhibitions/web/romanian-graphics-2025/02.jpg",
            "subHtml": "<h4>Romanian Graphics 2025 / GR 25</h4><p>Visual Arts Center · Bucharest, Romania<br>October 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/romanian-graphics-2025/01.jpg",
            "thumb": "images/exhibitions/web/romanian-graphics-2025/01.jpg",
            "subHtml": "<h4>Romanian Graphics 2025 / GR 25</h4><p>Visual Arts Center · Bucharest, Romania<br>October 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/romanian-graphics-2025/03.jpg",
            "thumb": "images/exhibitions/web/romanian-graphics-2025/03.jpg",
            "subHtml": "<h4>Romanian Graphics 2025 / GR 25</h4><p>Visual Arts Center · Bucharest, Romania<br>October 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/romanian-graphics-2025/04.jpg",
            "thumb": "images/exhibitions/web/romanian-graphics-2025/04.jpg",
            "subHtml": "<h4>Romanian Graphics 2025 / GR 25</h4><p>Visual Arts Center · Bucharest, Romania<br>October 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/romanian-graphics-2025/05.jpg",
            "thumb": "images/exhibitions/web/romanian-graphics-2025/05.jpg",
            "subHtml": "<h4>Romanian Graphics 2025 / GR 25</h4><p>Visual Arts Center · Bucharest, Romania<br>October 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/romanian-graphics-2025/06.jpg",
            "thumb": "images/exhibitions/web/romanian-graphics-2025/06.jpg",
            "subHtml": "<h4>Romanian Graphics 2025 / GR 25</h4><p>Visual Arts Center · Bucharest, Romania<br>October 2025</p><p>Group art exhibition</p>"
        },
        {
            "src": "images/exhibitions/web/romanian-graphics-2025/07.jpg",
            "thumb": "images/exhibitions/web/romanian-graphics-2025/07.jpg",
            "subHtml": "<h4>Romanian Graphics 2025 / GR 25</h4><p>Visual Arts Center · Bucharest, Romania<br>October 2025</p><p>Group art exhibition</p>"
        }
    ],
    "emotions-of-the-soul": [
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/10.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/10.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/01.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/01.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/02.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/02.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/03.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/03.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/04.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/04.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/05.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/05.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/06.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/06.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/07.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/07.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/08.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/08.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/09.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/09.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/11.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/11.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        },
        {
            "src": "images/exhibitions/web/emotions-of-the-soul/12.jpg",
            "thumb": "images/exhibitions/web/emotions-of-the-soul/12.jpg",
            "subHtml": "<h4>Emotions of the Soul</h4><p>Titu Maiorescu University · Building M · Bucharest, Romania<br>December 2024 – May 2025</p><p>Personal painting and graphics exhibition no. 22</p>"
        }
    ]
};
    $('[data-event-gallery]').on('click', function (event) {
        if (!$.fn.lightGallery) return;
        event.preventDefault();
        var trigger = this;
        $(trigger).one('onCloseAfter.lg', function () { trigger.focus(); });
        $(trigger).lightGallery({
            dynamic: true,
            dynamicEl: galleries[trigger.getAttribute('data-event-gallery')],
            hash: false,
            download: false,
            share: false,
            fullScreen: false,
            autoplay: false,
            autoplayControls: false,
            thumbnail: true,
            showThumbByDefault: false
        });
    });
})(jQuery);
