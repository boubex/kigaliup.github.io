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
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'up2',
                            type: 'image',
                            rect: ['3px', '0px', '170px', '99px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"up2.png",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['4', '99', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​All About Events</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '236px', '145px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)",[270,[['rgba(255,255,255,0.00)',0],['rgba(255,255,255,0.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 1506,
                    autoPlay: true,
                    data: [
                        [
                            "eid47",
                            "opacity",
                            0,
                            318,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid33",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${up2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${up2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid35",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${up2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid42",
                            "opacity",
                            756,
                            250,
                            "linear",
                            "${up2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid43",
                            "opacity",
                            1006,
                            250,
                            "linear",
                            "${up2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid44",
                            "opacity",
                            1256,
                            250,
                            "linear",
                            "${up2}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("upkigali_edgeActions.js");
})("EDGE-170584075");
