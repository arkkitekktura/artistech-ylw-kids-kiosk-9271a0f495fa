/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'clouds_blue',
                            type: 'image',
                            rect: ['-1713px', '466px', '3062px', '1543px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"clouds_blue.svg",'0px','0px'],
                            transform: [[],[],[],['0.83','0.83']]
                        },
                        {
                            id: 'sun',
                            type: 'image',
                            rect: ['724px', '83px', '161px', '161px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sun.svg",'0px','0px']
                        },
                        {
                            id: 'cloud_01',
                            type: 'image',
                            rect: ['-396px', '64px', '350px', '174px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_01.svg",'0px','0px']
                        },
                        {
                            id: 'cloud_03',
                            type: 'image',
                            rect: ['-333px', '299px', '287px', '101px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_01.svg",'0px','0px']
                        },
                        {
                            id: 'cloud_00',
                            type: 'image',
                            rect: ['277px', '436px', '118px', '51px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cloud_00.svg",'0px','0px']
                        },
                        {
                            id: 'balloon_all',
                            symbolName: 'balloon_all',
                            type: 'rect',
                            rect: ['-424', '392px', '424', '499', 'auto', 'auto'],
                            transform: [[],['22']]
                        },
                        {
                            id: 'clouds_white',
                            type: 'image',
                            rect: ['-2020px', '577px', '3062px', '1543px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"clouds_white.svg",'0px','0px']
                        },
                        {
                            id: 'go_button',
                            symbolName: 'go_button',
                            type: 'rect',
                            rect: ['735px', '479px', '223', '223', 'auto', 'auto'],
                            transform: [[],[],[],['0.69','0.69']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(143,206,209,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    labels: {
                        "Label 1": 0
                    },
                    data: [
                        [
                            "eid34",
                            "originY",
                            0,
                            0,
                            "linear",
                            "${balloon_all}",
                            '45%',
                            '45%'
                        ],
                        [
                            "eid38",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${go_button}",
                            '0.69',
                            '0.69'
                        ],
                        [
                            "eid37",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${go_button}",
                            '0.69',
                            '0.69'
                        ],
                        [
                            "eid62",
                            "left",
                            0,
                            0,
                            "linear",
                            "${go_button}",
                            '735px',
                            '735px'
                        ],
                        [
                            "eid32",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${balloon_all}",
                            '22deg',
                            '22deg'
                        ],
                        [
                            "eid53",
                            "top",
                            0,
                            0,
                            "linear",
                            "${go_button}",
                            '479px',
                            '479px'
                        ]
                    ]
                }
            },
            "balloon_all": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'banner_backsikes',
                            rect: ['-44px', '162px', '548px', '183px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.9', '0.9']],
                            fill: ['rgba(0,0,0,0)', 'images/banner_back%2Bsikes.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'baloon',
                            rect: ['62px', '34px', '319px', '469px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.9', '0.9'], ['50%', '25%']],
                            fill: ['rgba(0,0,0,0)', 'images/baloon.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'banner_front_new',
                            rect: ['45px', '58px', '349px', '266px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.9', '0.9']],
                            fill: ['rgba(0,0,0,0)', 'images/banner_front_new.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'sponsor',
                            rect: ['166px', '257px', '110px', '123px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.7', '0.7']],
                            fill: ['rgba(0,0,0,0)', 'images/sponsor.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '424px', '499px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "go_button": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'go_button-indicator',
                            rect: ['0px', '0px', '223px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/go_button-bg.svg', '0px', '0px']
                        },
                        {
                            rect: ['-68', '0', '359', '223', 'auto', 'auto'],
                            id: 'go_button-background',
                            symbolName: 'go_button-background',
                            opacity: '1',
                            type: 'rect'
                        },
                        {
                            type: 'image',
                            id: 'go_button-text',
                            rect: ['30px', '22px', '167px', '180px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/go_button-text.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'rocket_all',
                            symbolName: 'rocket_all',
                            rect: ['152px', '-9px', '142', '115', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '223px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid61",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${go_button-background}",
                            '1',
                            '1'
                        ],
                        [
                            "eid44",
                            "left",
                            0,
                            0,
                            "linear",
                            "${rocket_all}",
                            '152px',
                            '152px'
                        ],
                        [
                            "eid46",
                            "top",
                            0,
                            0,
                            "linear",
                            "${rocket_all}",
                            '-9px',
                            '-9px'
                        ]
                    ]
                }
            },
            "rocket_all": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'rocket_trail',
                            rect: ['-479px', '63px', '513px', '307px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rocket_trail.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rocket_trailCopy',
                            rect: ['-768px', '103px', '733px', '439px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rocket_trail.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rocket',
                            rect: ['0px', '0px', '142px', '115px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rocket.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '142px', '115px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "go_button-background": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'go_button-bg',
                            rect: ['68px', '0px', '223px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/go_button-bg.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rocket_shadow_masked',
                            rect: ['0px', '0px', '359px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rocket_shadow_masked.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '359px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "games": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'game_color',
                            type: 'image',
                            rect: ['199px', '229px', '300px', '225px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game_color.svg', '0px', '0px']
                        },
                        {
                            id: 'game_knowedge',
                            type: 'image',
                            rect: ['530px', '229px', '300px', '225px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game_knowedge.svg', '0px', '0px']
                        },
                        {
                            id: 'game_memory',
                            type: 'image',
                            rect: ['199px', '488px', '300px', '225px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game_memory.svg', '0px', '0px']
                        },
                        {
                            id: 'game_reflex',
                            type: 'image',
                            rect: ['530px', '488px', '300px', '225px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/game_reflex.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1023px', '768px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "redBarron": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'airplane_body',
                            symbolName: 'airplane_body',
                            rect: ['0', '0', '362', '498', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['278px', '121px', '141', '141', 'auto', 'auto'],
                            id: 'airplane_prop',
                            symbolName: 'airplane_prop',
                            type: 'rect',
                            transform: [[], [], [], ['0.7013', '1.28654']]
                        },
                        {
                            id: 'airplane_nose',
                            symbolName: 'airplane_nose',
                            rect: ['340', '171px', '43', '44', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['207', '165', '8', '9', 'auto', 'auto'],
                            id: 'plane_eyeLeft',
                            symbolName: 'plane_eye',
                            type: 'rect',
                            transform: [[], ['-35'], [], ['0.84', '1.28']]
                        },
                        {
                            rect: ['221px', '140px', '8', '9', 'auto', 'auto'],
                            id: 'plane_eyeRight',
                            symbolName: 'plane_eye',
                            type: 'rect',
                            transform: [[], ['-35'], [], ['0.59', '0.96']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '362px', '498px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid99",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${plane_eyeLeft}",
                            '-35deg',
                            '-35deg'
                        ],
                        [
                            "eid108",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${plane_eyeRight}",
                            '0.96',
                            '0.96'
                        ],
                        [
                            "eid101",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${plane_eyeLeft}",
                            '1.28',
                            '1.28'
                        ],
                        [
                            "eid78",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${airplane_prop}",
                            '1.28654',
                            '1.28654'
                        ],
                        [
                            "eid104",
                            "rotateZ",
                            0,
                            0,
                            "linear",
                            "${plane_eyeRight}",
                            '-35deg',
                            '-35deg'
                        ],
                        [
                            "eid88",
                            "top",
                            0,
                            0,
                            "linear",
                            "${plane_eyeRight}",
                            '140px',
                            '140px'
                        ],
                        [
                            "eid87",
                            "left",
                            0,
                            0,
                            "linear",
                            "${plane_eyeRight}",
                            '221px',
                            '221px'
                        ],
                        [
                            "eid107",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${plane_eyeRight}",
                            '0.59',
                            '0.59'
                        ],
                        [
                            "eid66",
                            "top",
                            0,
                            0,
                            "linear",
                            "${airplane_nose}",
                            '171px',
                            '171px'
                        ],
                        [
                            "eid81",
                            "top",
                            0,
                            0,
                            "linear",
                            "${airplane_prop}",
                            '121px',
                            '121px'
                        ],
                        [
                            "eid82",
                            "left",
                            0,
                            0,
                            "linear",
                            "${airplane_prop}",
                            '278px',
                            '278px'
                        ],
                        [
                            "eid77",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${airplane_prop}",
                            '0.7013',
                            '0.7013'
                        ],
                        [
                            "eid100",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${plane_eyeLeft}",
                            '0.84',
                            '0.84'
                        ]
                    ]
                }
            },
            "airplane_body": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'airplane',
                            type: 'image',
                            rect: ['0px', '0px', '362px', '498px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/airplane.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '362px', '498px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "airplane_nose": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'nose',
                            rect: ['0px', '0px', '43px', '44px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/nose.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '43px', '44px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "airplane_prop": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'airplane_prop_internal',
                            symbolName: 'airplane_prop_internal',
                            rect: ['0', '0', '141', '141', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "plane_eye": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'myEye',
                            symbolName: 'myEye',
                            rect: ['0', '1', '7', '7', 'auto', 'auto'],
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '8px', '9px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "airplane_prop_internal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'prop',
                            type: 'image',
                            rect: ['0px', '0px', '141px', '141px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/prop.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '141px', '141px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "myEye": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '7px', '7px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(101,101,101,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '7px', '7px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("gameAnimationTest_edgeActions.js");
})("EDGE-52025736");
