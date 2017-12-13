angular.module('submission', [])
.controller('MainCtrl', [
    '$scope', '$http',
    function($scope, $http) {
        $scope.random_name = "";
        $scope.random_place = "";
        $scope.random_object = "";
        $scope.random_verb = "";
        $scope.random_img = "http://ak9.picdn.net/shutterstock/videos/8920699/thumb/2.jpg";
        $scope.headline = "";
        $scope.description = "";
        $scope.h = "";
        $scope.f = "";
        
        $scope.makePost = function() {
            $scope.headline = $scope.random_name + " " + $scope.random_verb.toUpperCase() + " " + $scope.random_object + " in " + $scope.random_place;
            $scope.description = $scope.h + $scope.headline + ".  " + $scope.f;
        }

        $scope.submitPost = function() {
            if ($scope.headline == "" ||
                $scope.description == "") {
                    alert("Please finish your FAKE headline");
                } else {
                console.log("submit time boi");
                var json = {
                    title: $scope.headline,
                    image: $scope.random_img,
                    description: $scope.description
                }
                alert("Your article is now live!  Check the home page or submit a new article!");                
                return $http.post('/headlines', json).success(function(data){
                    console.log("woah boi");
                    $scope.comments.push(data);
                });
            }
        }

        $scope.randomize = function() {
            console.log("randomize");
            var rand = Math.floor(Math.random() * $scope.names.length);
            var key = $scope.names[Math.floor(Math.random() * $scope.names.length)];
            $scope.random_name = $scope.things[key].name;
            $scope.random_place = $scope.places[Math.floor(Math.random() * $scope.places.length)];
            $scope.random_object = $scope.objects[Math.floor(Math.random() * $scope.objects.length)];
            $scope.random_verb = $scope.verbs[Math.floor(Math.random() * $scope.verbs.length)];
            $scope.random_img = $scope.things[key].images[Math.floor(Math.random() * $scope.things[key].images.length)];
            $scope.h = $scope.headers[Math.floor(Math.random() * $scope.headers.length)];
            $scope.f = $scope.footers[Math.floor(Math.random() * $scope.footers.length)];
            $scope.makePost();
        }

        $scope.things = {
            "donald": {
                name: "Donald Trump",
                images: [
                    "https://timedotcom.files.wordpress.com/2017/02/trump8.jpg?quality=85",
                    "http://cdn.cnn.com/cnnnext/dam/assets/170822235920-08-trump-phoenix-0822-large-169.jpg",
                    "https://cdn.theatlantic.com/assets/media/img/mt/2016/04/RTX1GZCO/lead_960.jpg?1461074059",
                    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/07/06/10/trump.jpg",
                    "http://15130-presscdn-0-89.pagely.netdna-cdn.com/wp-content/uploads/2017/06/0620trumppolicies01.jpg",
                    "http://revjeffhood.com/wp-content/uploads/2015/12/2015-09-29-1443550569-5683781-trumppucker.jpg",
                    "http://www.thisissierraleone.com/wp-content/uploads/2015/12/trump.jpg"
                ]
            },
            "kim": {
                name: "Kim Jong-Un",
                images: [
                    "http://i.telegraph.co.uk/multimedia/archive/02701/kim_2701423b.jpg",
                    "https://cdn.images.dailystar.co.uk/dynamic/1/photos/901000/620x/North-Korea-nuclear-war-621566.jpg",
                    "http://www.sligotoday.ie/images/1506067783.jpg",
                    "http://www.sickchirpse.com/wp-content/uploads/2017/09/MAIN-Kim-Jong-Un-missiles.jpg",
                    "http://newsfirst.lk/english/wp-content/uploads/2016/05/TOPIC-ONLY-Kim-Jong-Un.jpg"
                ]
            },
            "taylor": {
                name: "Taylor Swift",
                images: [
                    "http://img.wennermedia.com/social/taylor-swift-swift-life-a61e99a0-bf48-4f4b-9598-fb0c529961bf.jpg",
                    "http://a57.foxnews.com/media2.foxnews.com/BrightCove/694940094001/2017/11/15/896/504/694940094001_5647910849001_5647869795001-vs.jpg?ve=1&tl=1",
                    "http://www.billboard.com/files/styles/article_main_image/public/media/taylor-swift-2014-sarah-barlow-billboard-650.jpg",
                    "https://peopledotcom.files.wordpress.com/2017/08/taylor-swift3.jpg?crop=0px%2C121px%2C1500px%2C788px&resize=1200%2C630",
                    "https://media.wmagazine.com/photos/59f335b7a1bb0c16ebe76845/4:3/w_1536/Screen%2520Shot%25202017-10-27%2520at%25209.34.21%2520AM.png",
                    "https://i.ytimg.com/vi/AgFeZr5ptV8/maxresdefault.jpg"
                ]
            },
            "obama": {
                name: "Barack Obama",
                images: [
                    "http://cdn.cnn.com/cnnnext/dam/assets/161226182723-president-barack-obama-exlarge-169.jpg",
                    "https://static.politico.com/e7/2c/d24a941e479f99d58789db041da5/160904-barack-obama-ap-16248183644375.jpg",
                    "https://s-media-cache-ak0.pinimg.com/originals/25/80/3b/25803b57d9a0a48dcd18fdeacf9a27ad.jpg",
                    "http://www.slate.com/content/dam/slate/blogs/the_slatest/2012/09/26/_2012_poll_ohio_florida_lean_obama_/152762338.jpg.CROP.rectangle3-large.jpg",
                    "https://usatftw.files.wordpress.com/2013/05/c03_obama_061.jpg?w=1000&h=600&crop=1",
                    "http://www.billboard.com/files/media/Barack-Obama-Michelle-Obama-bowtie-2016-billboard-1548.jpg"
                ]
            },
            "anderson": {
                name: "Anderson Cooper",
                images: [
                    "http://cdn.cnn.com/cnnnext/dam/assets/161130004253-exp-anderson-cooper-on-trumps-latest-tweet-storm-cnntv-00000023-large-169.jpg",
                    "https://lgbtqnation-assets.s3.amazonaws.com/assets/2017/05/Anderson-Cooper-702x468.jpg",
                    "http://uspoln.com/wp-content/uploads/2017/06/Anderson-Cooper-got-bad-news-and-cried-640x427.jpg",
                    "http://discover.knit.audio/assets/img/hosts/anderson-cooper-360.jpg"
                ]
            },
            "fox": {
                name: "Fox Reporter",
                images: [
                    "http://thehill.com/images/stories/itk/shannonbream.jpg",
                    "http://cdn1.thr.com/sites/default/files/imagecache/landscape_928x523/2017/01/gettyimages-498037200-h_2017.jpg",
                    "http://libertynews.com/wp-content/uploads/2013/11/megyn_kelly_.jpg",
                    "https://s-media-cache-ak0.pinimg.com/originals/db/c2/f0/dbc2f0ebd680a8155cb3308112a4a113.jpg",
                    "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1509146238/171027-grove-huddy-hero_ofkxqc"
                ]
            },
            "tim": {
                name: "Tim Cook",
                images: [
                    "https://pbs.twimg.com/profile_images/378800000483764274/ebce94fb34c055f3dc238627a576d251.jpeg",
                    "http://i2.cdn.turner.com/money/dam/assets/150908192226-tim-cook-apple-logo-thinking-780x439.jpg",
                    "http://static5.businessinsider.com/image/541c5c98ecad045847662e09-1200-900/tim-cook-steve-jobs-3.jpg",
                    "https://9to5mac.files.wordpress.com/2017/08/tim-cook.jpg?quality=82&strip=all&w=1500",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLImeoFABncZMWFJgZJ3Df59iLN4K0cjz6TyJbWNh9Yry7Zwpm4w"
                ]
            },
            "sundar": {
                name: "Sundar Pichai",
                images: [
                    "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/08/sundar-pichai-google.jpg",
                    "http://techlomedia.in/wp-content/uploads/2016/06/wsi-imageoptim-sundar.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYA4QZmFgkoY_xwEvNJ4W71L2TYaJ_bOdW6dhYrb4UZQY0o2wh",
                    "http://timesofindia.indiatimes.com/photo/msid-58428453/58428453.jpg?58956"
                ]
            },
            "mark": {
                name: "Mark Zuckerberg",
                images: [
                    "http://www.siliconbeat.com/wp-content/uploads/2015/06/zuck31.jpg",
                    "https://media.gq.com/photos/55941278af57fbd15c06a6d1/master/pass/mark-zuckerberg-facebook.jpg",
                    "http://www.christianitytoday.com/images/78141.jpg?w=620",
                    "https://shortlist.imgix.net/app/uploads/2017/10/19085553/mark-zuckerberg-is-a-robot-we-have-the-proof-crop-1508403531-1365x910.jpg?w=820&h=1&q=90&fit=max&auto=format"
                ]
            },
            "kanye": {
                name: "Kanye West",
                images: [
                    "https://sslg.ulximg.com/image/405x405/artist/1392767353_217f16228baaa5dc18c82925ac76edf6.jpg/9e89e114db44f266e044addd06e88d69/1392767353_kanye_west_wall_40.jpg",
                    "http://verysmartbrothas.com/images/2016/02/kanye-west-fan.jpg",
                    "https://peopledotcom.files.wordpress.com/2016/12/kanye-west-660x450.jpg?w=660",
                    "http://www.trbimg.com/img-59a98734/turbine/ct-ent-taylor-swift-kanye-west-donda-west-20170831",
                    "https://i.ytimg.com/vi/PsO6ZnUZI0g/maxresdefault.jpg",
                    "http://www.trbimg.com/img-583cb040/turbine/la-et-mg-kanye-west-hospitalized-kim-kardashian-20161128"
                ]
            },
            "clinton": {
                name: "Hillary Clinton",
                images: [
                    "http://thehill.com/sites/default/files/hillaryclinton_1_2.jpg",
                    "https://www.biography.com/.image/t_share/MTE4MDAzNDEwMDU4NTc3NDIy/hillary-clinton-9251306-2-402.jpg",
                    "https://media.tmz.com/2017/09/10/091017-hillary-clinton-kal-1080x608.jpeg",
                    "http://www.dailywire.com/sites/default/files/styles/article_full/public/uploads/2017/10/96ac7cc4-21bf-4420-8d09-35fe8c59edc9.jpeg?itok=EMcL4mrB",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jpXJicPDzYTASinPlaWxyOBZ-5t2hX8PfiW9h80y-HmGfbzAmQ",
                    "https://cdn.vox-cdn.com/thumbor/dUD8UWCP6XN2X8fhc7vdYxS6ruI=/0x0:3456x2304/1200x800/filters:focal(1452x876:2004x1428)/cdn.vox-cdn.com/uploads/chorus_image/image/55031967/REC_ASA_CODE17_20170531_122148_1272.0.jpg"
                ]
            },
            "putin": {
                name: "Vladimir Putin",
                images: [
                    "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/12/16/104172344-GettyImages-479224659.530x298.jpg?v=1486758278",
                    "http://www.sickchirpse.com/wp-content/uploads/2017/02/Vladimir-Putin.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLP3WOJg-ts5gvtYR17jpK9FD1Jegjw0B5OAYysjop9el7tWe4",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkRFLkjp-4futOg7DbupbLEVIU5izS7L8WxUGo3KnO4fyryomyWw",
                    "http://static3.businessinsider.com/image/5134c5b46bb3f7431f00001c-1200/a-16-year-veteran-of-the-kgb-putin-knows-his-way-around-a-gun-after-his-retirement-in-1991-he-rapidly-rose-through-russian-politics-to-become-top-dog-in-the-worlds-largest-nation.jpg",
                    "https://timedotcom.files.wordpress.com/2015/06/pope-francis-putin.jpg?quality=85",
                    "http://assets.nydailynews.com/polopoly_fs/1.2873047.1479161413!/img/httpImage/image.jpg_gen/derivatives/article_750/putin15n-1-web.jpg"
                ]
            },
            "kar": {
                name: "Kim Kardashian",
                images: [
                    "https://media.toofab.com/2017/11/15/kim-kardashian-ellen-810x610.jpg",
                    "https://media.toofab.com/2017/11/13/kim-kardashian-blackface-480x360.jpg",
                    "http://media.thisisinsider.com/images/59aeaf3db065da7d088b4ac4-750-562.jpg",
                    "https://pmcfootwearnews.files.wordpress.com/2017/04/kim-kardashian-the-promise-premiere-3.jpg?w=1024"
                ]
            },
            "pope": {
                name: "The Pope",
                images: [
                    "https://cruxnow.com/wp-content/uploads/2016/12/20160914T0844-5137-CNS-POPE-AUDIENCE-PRINCES-1024x675.jpg",
                    "http://www.telegraph.co.uk/content/dam/news/2017/04/13/TELEMMGLPICT000125832463_trans_NvBQzQNjv4BqrnKnv-EZ40EhYX8nU7dr81GwsaKsFlgjiGj2x2RvG-c.jpeg?imwidth=450",
                    "http://img.timeinc.net/time/photoessays/2008/10_rome/pope.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThR70z_YI9DszkByURUdKdxwr8fIESX5ThcGPlBVu5BpVupq0I",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNWNc6UjKpuLKi7YqtOUQfr7GIHuZM9XeM7AJcQzCBqq1QNnRc",
                    "https://www.thesun.co.uk/wp-content/uploads/2017/10/nintchdbpict000316980827.jpg?strip=all&w=960",
                    "http://static2.businessinsider.com/image/59c5108c25acc239008b4932-1190-625/pope-francis-said-the-catholic-church-was-a-bit-late-in-responding-to-child-sex-abuse.jpg"
                ]
            },
            "sanders": {
                name: "Bernie Sanders",
                images: [
                    "http://cdn.cnn.com/cnnnext/dam/assets/160608135318-01-bernie-sanders-0608-super-169.jpg",
                    "https://media2.s-nbcnews.com/j/msnbc/components/video/151102/a_scoutingreport_sanders_151102.nbcnews-ux-1080-600.jpg",
                    "http://thehill.com/sites/default/files/styles/thumb_small_article/public/sandersbernie_052317gn2_lead.jpg?itok=2dSGQJSv",
                    "https://images.newrepublic.com/4b93cbf2f6461add6b767d658c308d2417b65f7b.jpeg",
                    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iXiYFDqTq7QM/v2/800x-1.jpg"
                ]
            },
            "hayden": {
                name: "Hayden Christensen",
                images: [
                    "http://assets.nydailynews.com/polopoly_fs/1.1387272.1499367293!/img/httpImage/image.jpg_gen/derivatives/gallery_1200/hayden-christensen.jpg",
                    "https://i.ytimg.com/vi/fwtpyEOVWbo/maxresdefault.jpg",
                    "https://resizing.flixster.com/hk2ooezfrDMhihFo2StPkBArhTY=/300x300/v1.cjsxMTQxO2o7MTc1MDU7MTIwMDs0NDE7NjUy",
                    "http://img4.looper.com/img/gallery/why-hollywood-wont-cast-hayden-christensen-anymore/whats-next-for-hayden-christensen-1482168495.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wvV-J92MbeMKPmkt-IDVyhPyGhDTleP_0LV6kpnvXrTgUPNl"
                ]
            },
            "mike": {
                name: "Mike Pence",
                images: [
                    "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_2102,w_3738,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1492111522/articles/2016/07/15/mike-pence-trump-s-likely-vp-pick-is-too-anti-gay-even-for-republicans/160714-michaelson-mike-pence-tease_imhr9j",
                    "https://media.newyorker.com/photos/59097d9b1c7a8e33fb39060e/4:3/w_960,c_limit/Borowitz-Letter-from-Mike-Pence.jpg",
                    "https://media.salon.com/2016/09/mike_pence11-620x412.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzS9ARd-fnzeHMgPgFX1OJZeW9uANWJeVgDQyEvMzJGInujSAkQ",
                    "http://media.advance.net/politics_news_national_desk/photo/mike-pence-127ef1b4df4ee8c5.jpg"
                ]
            },
            "biden": {
                name: "Joe Biden",
                images: [
                    "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/06/01/104503727-GettyImages-687902530-joe-biden.jpg?v=1496316551",
                    "https://media1.s-nbcnews.com/j/MSNBC/Components/Video/201711/joe-biden-today-interview-tease-001-171113__883275.today-inline-vid-featured-desktop.jpg",
                    "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/11/13/104838696-GettyImages-869035584-joe-biden.jpg?v=1510586207",
                    "http://pixel.nymag.com/imgs/daily/intelligencer/2015/02/17/17-joe-biden-hillary-clinton.w710.h473.2x.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGf1liHPZ3Jphzht7YxkmZAdVmfolsDJH0-cqx5ooK0zvgpp4RVw"
                ]
            },
            "perry": {
                name: "Katy Perry",
                images: [
                    "https://media.glamour.com/photos/591c9a13047fb461a59c1ca2/master/pass/katy-perry-pixie.jpg",
                    "https://pbs.twimg.com/media/DCsl0D_VYAEllGU.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/c/c2/Katy_Perry_UNICEF_2012.jpg",
                    "https://peopledotcom.files.wordpress.com/2017/06/katy-perry6.jpg?w=2000&h=1333"
                ]
            },
            "george": {
                name: "George Lucas",
                images: [
                    "http://www.filmdumpster.com/wp-content/uploads/2015/12/george-lucas_0.jpg",
                    'https://specials-images.forbesimg.com/imageserve/59d679e44bbe6f37dda00f43/416x416.jpg?background=000000&cropX1=424&cropX2=1658&cropY1=116&cropY2=1350',
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC0aNW7UOSASXtCjAYfflBv40g4n2akz85Uyh6iLPPT2A8JLAn",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCBQvF9t0bbvCsi1WEAMzv5k0Iwd7EA-jqlCf4D78AfyAE-mYyaQ"
                ]
            },
            "cage": {
                name: "Nicolas Cage",
                images: [
                    "https://img.buzzfeed.com/buzzfeed-static/static/2014-01/campaign_images/webdr06/7/14/50-reasons-why-nicolas-cage-is-the-greatest-human-1-5571-1389124720-1_big.jpg",
                    "https://cdn.empireonline.com/jpg/80/0/0/1200/675/0/0/0/0/0/0/0/c/articles/59b858d7b43fedb81e7262aa/nicolas-cage.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74Zl952ycxhiWhBszyJ_OMuLWWSaQo-leR7SecDCtIzpoyGNI",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qtew-Kjfy4FONiYHnrN3pRX1VR6OhTFxcKIWvPlYtsc7TRZRmw",
                    "https://pmcdeadline2.files.wordpress.com/2016/11/nicolas-cage.jpg?w=605"
                ]
            }
        }
        $scope.names = ["donald", "kim", "taylor", "obama", "anderson", "fox", "tim", "sundar", "mark", "kanye", "clinton", "putin", "kar", "pope",
                        "sanders", "hayden", "mike", "biden", "biden", "emma", "george", "cage"]
        $scope.places = ["Afghanistan", "Albania", "Algeria", "Antarctica", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
                        "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan",
                        "Bolivia","Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Bulgaria", "Burkina Faso",
                        "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad",
                        "Chile", "China", "Christmas Island", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Cote d'Ivoire",
                        "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
                        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia",
                        "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan",
                        "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany",
                        "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea",
                        "Guinea-Bissau", "Guyana", "Haiti", "the Vatican", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia",
                        "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "South Korea",
                        "North Korea", "Kuwait", "Kyrgyzstan", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein",
                        "Lithuania", "Luxembourg", "Macau", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
                        "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique",
                        "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua",
                        "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau",
                        "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico",
                        "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Lucia", "Samoa", "San Marino", "Saudi Arabia", "Senegal",
                        "Seychelles", "Sierra Leone", "Singapore", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka",
                        "St. Helena", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Tajikistan", "Thailand", "Togo",
                        "Tokelau", "Tonga", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom",
                        "United States"]
        $scope.objects = ["dogs", "cats", "flowers", "money", "lamp shades", "Donald Trump", "Melania Trump", "Barack Obama", "Taylor Swift",
                            "McDonalds", "burger", "civilians", "desserts", "Walmart", "Google", "Facebook", "Apple", "Microsoft", "the Pope",
                            "Kanye West", "Kevin Spacey", "Tom Cruise", "Star Wars", "Darth Vader", "private island", "car", "house", "White House",
                            "Empire State Building", "Statue of Liberty", "Doritos", "BYU students", "Bernie Sanders", "Hillary Clinton", "fake news",
                            "Disney", "Russia", "Vladimir Putin", "Wendy's", "University of Utah", "Star Trek", "Boy Scouts of America",
                            "Stalin", "Pewdiepie", "children", "iPhone", "Twitter following", "Obi Wan Kenobi", "Sport's Car", "Imagine Dragons",
                            "Johnny Depp", "database", "government website", "gun laws", "the poor", "the rich", "the 1%", "Bernie Sanders",
                            "Rick and Morty Fans", "the CIA", "the FBI", "Buzzfeed", "The Wall Street Journal", "The New York Times", "Batman",
                            "Emma Stone", "fans"]
        $scope.verbs = ["pets", "plays with", "smells", "cleans", "launches", "deceives", "preserves", "kills", "kisses", "forces",
                        "passes", "sins against", "runs", "stabs", "knives", "trumps", "devours", "captures", "accuses", "destroys",
                        "laughs at", "forbids", "eats", "offends", "triggers", "cancels", "distrupts", "enjoys",
                        "eliminates", "trashes", "insults", "pleases", "generates", "compliments", "battles", "dresses up as", "wears",
                        "buys", "spreads", "encourages", "pressures", "leads on", "dedicates", "fires", "lies about", "trafficks", "sells",
                        "marries", "tweets at", "misgenders", "loves", "assualts", "hacks", "steals info from", "blushes in front of", "dies next to",
                        "defeats", "challenges", "glorifies", "bans", "hits", "endorces", "attacks", "meets", "grieves over death of",
                        "battles", "fights with", "starts drama with", "approves of", "violates agreement with", "blesses", "helps", "creates",
                        "resurrects", "eats", "is dating", "is in an affair with", "is cheating with", "defends", "scares off", "appreciates"]
        $scope.headers = ["Sources reveal the SHOCKING information that ", "BREAKING NEWS - ", "You would have NEVER guessed that ",
                            "LEAKED - ", "SCANDALOUS information regarding the fact that ", "Did you know that ", "It's truly frustrating that ",
                            "Republicans are upset that ", "Democrats are upset that ", "Millenials can't believe that ", "NO ONE expected that "];
        $scope.footers = ["What will happen next?", "Upvote to show your support.", "We demand answers.", "Will anyone truly understand?",
                            "They have yet to respond.", "How much longer can they get away with it?", "NO ONE believes it.", "Not surprisingly, this is the second time this year.",
                            "When will they actually listen to us?", "Could this be part of a bigger scheme?", "This is why people are upset.",
                            "Why couldn't this wait?", "We'll have updates in the weeks to come."];
    }
])
