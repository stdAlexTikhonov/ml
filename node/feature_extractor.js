const constants = require('../common/constants.js');
const featureFunctions = require('../common/featureFunctions.js');

const fs = require('fs');

console.log('EXTRACTING FEATURES ...');

const samples = JSON.parse(fs.readFileSync(constants.SAMPLES));

for (const sample of samples) {
    const paths = JSON.parse(fs.readFileSync(constants.JSON_DIR + '/' + sample.id + '.json'));

    sample.point = [
        featureFunctions.getPathCount(paths),
        featureFunctions.getPointCount(paths)
    ]
}

const featureNames = ['Path count', 'Point count'];

fs.writeFileSync(constants.FEATURES, JSON.stringify({ featureNames, samples }));

fs.writeFileSync(constants.FEATURES_JS, `const features = ${JSON.stringify({ featureNames, samples })};`);

console.log('DONE!');