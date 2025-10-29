sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"zadsorber/test/integration/pages/AdsorberList",
	"zadsorber/test/integration/pages/AdsorberObjectPage"
], function (JourneyRunner, AdsorberList, AdsorberObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('zadsorber') + '/test/flp.html#app-preview',
        pages: {
			onTheAdsorberList: AdsorberList,
			onTheAdsorberObjectPage: AdsorberObjectPage
        },
        async: true
    });

    return runner;
});

