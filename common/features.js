const featureFunctions = {};

featureFunctions.getPathCount = (paths) => paths.length;

featureFunctions.getPointCount = (paths) => {
    const points = paths.flat();
    return points.length;
}

if (typeof module !== 'undefined') {
    module.exports = featureFunctions;
}