angular.module('AppConstants', [])

.constant('SLIDER', {slider1:{title:'Thompson Reuters Japan',text:'A key website for Thomson Reuters expanding Far East market.',URL:'/#!/work-projects/thomson-reuters-japan'},slider2:{title:'Blinkboxbooks',text:'Tesco\'s new flagship eCommerce site built with AngularJS by a world-class in-house team.',URL:'/#!/work-projects/blinkbox'},slider3:{title:'lightning.gs',text:'Optimizes and coverts PNG images to Data URIs using the latest HTML5 APIs.',URL:'/#!/side-projects/lightning'},slider4:{title:'UK Law Student',text:'A clean, easy-to-navigate site to help Thomson Reuters engage with law undergraduates.',URL:'/#!/work-projects/uk-lawstudent'},slider5:{title:'Kaplan International',text:'Owned by the Washington Post Group, Kaplan International is the worlds leading education provider for those seeking to speak English.',URL:'/#!/work-projects/kaplan'},slider6:{title:'Dr Newmans Clinic',text:'One of Harley Street\'s leading specialist private clinics.',URL:'/#!/work-projects/drnewmans'},slider7:{title:'Penny Books',text:'Uses the Amazon API to search for books on sale for only one penny.',URL:'/#!/side-projects/pennybooks'},slider8:{title:'Twt Twt',text:'Send Tweets with UTF-8 character symbols to make a simple message fun → ♘ ❤ ♬ ♡ ❄ ♘',URL:'/#!/side-projects/twttwt'}})

.constant('CONFIG', {JSONP_GOOGLE_API:'//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=',RSS_FEED_LINK:'http://2223d9145efd2b35ed36-6671f2c2aa691e80e8c08f3a239bdfd7.r67.cf3.rackcdn.com/rss_feed.xml',BLOG:{BLOG_1:'images/blog-stock-images/stock-photo-one.jpg',BLOG_2:'images/blog-stock-images/stock-photo-two.jpg',BLOG_3:'images/blog-stock-images/stock-photo-three.jpg',BLOG_4:'images/blog-stock-images/stock-photo-four.jpg',BLOG_5:'images/blog-stock-images/stock-photo-five.jpg',BLOG_6:'images/blog-stock-images/stock-photo-six.jpg',BLOG_7:'images/blog-stock-images/stock-photo-seven.jpg',BLOG_8:'images/blog-stock-images/stock-photo-eight.jpg',BLOG_9:'images/blog-stock-images/stock-photo-nine.jpg',BLOG_10:'images/blog-stock-images/stock-photo-ten.jpg'},CURRENT_DOMAIN:'http://portfolio.andywalpole.me/'})

.constant('WORK', {pages:{elevaate:{id:'001',title:'elavaate',summary:'Retail advertising plaftform',details:'<p>elevaate\'s business model is aimed at large high-street retailers with a strong online presence. The company was started by a number of former Kiddicare employees, including the original CEO and Kiddicare founder.<\/p><p>The project was divided into two parts: coding the responsive design administration area and creating the JavaScript which will be used as a third-party script on the retailers\' websites.<\/p><p>The code for the third-party JavaScript had to work across the full spectrum of devices and browsers, including Internet Explorer 6 and up and all Android major versions. For performance reasons, the code had to be standalone without the support of a library like jQuery. It\'s role was to communicate from the retailers\' sites, injecting HTML in return when required.<\/p><p>The administration area used a number of JavaScript libraries including velocity.js for animation, pmrpc.js for cross-domain iFrame communication and moment.js for consistent date formatting.<\/p>',code:'JavaScript',company:'elevaate',internalUrl:'/#!/work-projects/elevaate',externalUrl:'https://demo.develevaate.com/portal/public/index.html',workImage:'/images/elevaate-screenshot.jpg'},blinkbox:{id:'002',title:'Blinkboxbooks',summary:'Tesco\'s new flagship eCommerce site built with AngularJS.',details:'<p>I worked with a world class in-house team for several months to help build this full-stack JavaScript eBooks website which is intended to be a serious rival to Amazon\'s UK dominance of the sector.<\/p><p>My primary responsibility in this project was to provide solutions to the performance problem. At the initial usability tests in November 2013, the website was over 3mb in size and took 22 seconds to load on the Tesco Hudle Android tablet. By January 2014 the size of the homepage had been reduced to 565kb in size and with a load time of under seven seconds on the low-spec Android tablet the Hudle, and just a few seconds on the desktop.<\/p><p>The website is responsive with a heavy emphasis on visual and functionality polarity between the website and the Android and iOS apps.<\/p>',code:'AngularJS',company:'Blinkboxbooks, Tescos',internalUrl:'/#!/work-projects/blinkbox',externalUrl:'https://www.blinkboxbooks.com/#!/',workImage:'/images/blinkboxbooks-screenshot.png'},thomsonreuters:{id:'003',title:'Thomson Reuters Japan',summary:'A key website for Thomson Reuters expanding Far East market.',details:'<p>I spent several months from 2012 to 2013 working at the Canary Wharf office of Thomson Reuters.<\/p><p>The company was created after the merger of Thomson Corporation with the Reuters news agency in 2008.<\/p><p>The company has two large creative services departments in London and in Eagan, Minnesota; with a smaller team at their New York headquarters.<\/p><p>The preferred CMS of the small web design team in London was Wordpress. They considered that this Open Source platform had the right blend of easy software extendability and user-friendly admin areas.<\/p><p>Due to the international reach of the company the work often involved liaising between individuals across several different countries. In the case of this project, it meant closely working with the Japanese team who provided text and guidance.<\/p><p>All coding – CSS, HTML, JavaScript and PHP – was undertaken by myself.<\/p>',code:'Wordpress',company:'Thomson Reuters',internalUrl:'/#!/work-projects/thomson-reuters-japan',externalUrl:'http://japan.thomsonreuters.com/',workImage:'/images/thomson-reuters-japan-screenshot.png'},lawstudent:{id:'004',title:'Thomson Reuters<br> Law Student',summary:'A clean, easy-to-navigate site to help Thomson Reuters engage with law undergraduates.',details:'<p>This project was a refresh of an existing website that had been online for several years.<\/p><p>The London-based Creative Services web design team were particularly keen on Wordpress because of the ease that non-technical staff could update content.<\/p><p>Due to its liberal API, Wordpress is best used as a framework, which helps to limit dependency on third-party plugins. There can be both security and performance concerns when using additional plugins so they are best avoided where possible.<\/p><p>The Thomson Reuters Law Student site is heavily customised so as to achieve the complex layouts. As with the Thomson Reuters Japan site, I was responsible for all server and client-side development work.<\/p>',code:'Wordpress',company:'Thomson Reuters',internalUrl:'/#!/work-projects/uk-lawstudent',externalUrl:'http://uklawstudent.thomsonreuters.com/',workImage:'/images/uk-lawstudents-screenshot.png'},kaplan:{id:'005',title:'Kaplan International',summary:'Owned by the Washington Post Group, Kaplan International is the worlds leading education provider for those seeking to speak English.',details:'<p>Although not a household name, Kaplan International is a multinational corporation with a multi-billion dollar turnover.<\/p><p>Due to staff sickness, this flagship human resources website had been put to the side for several months. During my time at Kaplan International, I was given the responsibility of working with the human resources team in order to get this project back on track.<\/p><p>Built with Wordpress, my first task was to refactor all the code. It is heavily customised on both the backend and frontend so as to allow the Human Resources personnel to easily update the website.<\/p>',code:'Wordpress',company:'Kaplan International',internalUrl:'/#!/work-projects/kaplan',externalUrl:'',workImage:'/images/kaplan-screenshot.png'},drnewmans:{id:'006',title:'Dr Drewmans Clinic',summary:'One of Harley Street\'s leading specialist private clinics.',details:'<p>Working for the Barn Agency, I built this website on the Drupal 7 platform.<\/p><p>Drupal is a robust Content Management System that if used with key third-party modules such as Views, can create feature rich websites with complex layouts.<\/p>',code:'Drupal',company:'Barn Agency',internalUrl:'/#!/work-projects/drnewmans',externalUrl:'http://www.drnewmansclinic.co.uk/',workImage:'/images/dr-newmans-screenshot.png'}},postContent:{className:'clearfix my-work',one:{href:'/#!/work-projects/elevaate',class:'project-box-one',name:'elevaate'},two:{href:'/#!/work-projects/blinkbox',class:'project-box-two',name:'Blinkboxbooks'},three:{href:'/#!/work-projects/thomson-reuters-japan',class:'project-box-three',name:'Thompson Reuters Japan'},four:{href:'/#!/work-projects/uk-lawstudent',class:'project-box-four',name:'UK Law Student'},five:{href:'/#!/work-projects/kaplan',class:'project-box-five',name:'Kaplan International'},six:{href:'/#!/work-projects/drnewmans',class:'project-box-six',name:'/#!/work-projects/drnewmans'}}})

.constant('PROJECTS', {pages:{lightning:{id:'001',title:'lightning.sx',summary:'Optimizes and coverts PNG images to Data URIs using the latest HTML5 API technology.',details:'<p>Lightning.sx is a single page website that allows the user to upload an image, optimize it (if PNG) and then create a data URI.<\/p><p>Technologies used on the client-side include Backbone.js, a JavaScript port of PngCrush and various HTML5 APIs including Web Workers, File and FileReader.<\/p><p>The site is built on a fluid layout and extensively uses CSS3 transforms, transitions and border-radius to achieve the pop art design homage.<\/p><p>The code is on <a href="https://github.com/TCotton/lightning" rel="external" class="underline">GitHub<\/a><\/p>',code:'Backbone.js',internalUrl:'/#!/side-projects/lightning',externalUrl:'http://lightning.sx/',workImage:'/images/lightning-screenshot.png'},pennybooks:{id:'002',title:'Penny Books',summary:'Uses the Amazon API to search for books on sale for only one penny.',details:'<p>Penny Books uses the Amazon API to find books that are on sale for just one penny.<\/p><p>Technologies used on the server-side include the HTML5 History API, history.js and the jQuery backstretch plugin.<\/p><p>The site is fully responsive and works and looks great on the mobile, tablet and desktop platforms.<\/p>',code:'HTML5 APIs and PHP backend',internalUrl:'/#!/side-projects/pennybooks',externalUrl:'http://pennybooks.info/',workImage:'/images/peenybooks-screenshot.png'},'mq-keyframes':{id:'003',title:'mq-keyframes',summary:'Part of postCSS ecosystem. PostCSS is a tool for transforming CSS with JS plugins',details:'<p>postcss-mq-keyframes is part of the postCSS ecosystem - a tool for transforming CSS with JS plugins<\/p><p>Takes CSS3 keyframe animation and moves them outside any media queries to the bottom of the file.<\/p>',code:'JavaScript - NodeJS',internalUrl:'/#!/side-projects/postcss-mq-keyframes',externalUrl:'https://www.npmjs.com/package/postcss-mq-keyframes',workImage:'/images/postcss-mq-keyframes-screenshot.png'}},postContent:{className:'clearfix side-projects',one:{href:'/#!/side-projects/lightning',class:'project-box-one',name:'lightning.sx'},two:{href:'/#!/side-projects/pennybooks',class:'project-box-two',name:'Penny Books'},three:{href:'/#!/side-projects/lightning',class:'project-box-three',name:'PostCSS MQ-Keyframes'}}})

.constant('STATS', {block1:{header:'',section:'Days working as a full-time web developer'},block2:{header:'3',section:'Cups of coffee before I start work in the morning'},block3:{header:'93',section:'Industry RSS feeds I subscribe to using NewsBlur'},block4:{header:'3',section:'Minutes before I check my Twitter feed after I wake up'},block5:{header:'78<sup>%<\/sup>',section:'Unit test coverage of this site using Karma and Jasmine'}})

.value('debug', false)

;