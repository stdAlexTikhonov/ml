const features = {};

features.getPathCount = (paths) => paths.length;

features.getPointCount = (paths) => {
    const points = paths.flat();
    return points.length;
}

if (typeof module !== 'undefined') {
    module.exports = features;
}