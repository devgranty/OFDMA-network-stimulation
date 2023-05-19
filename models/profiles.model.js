// Define the user/service profiles
// Profile are like broadband networks .E.g. MTN & GLO

const Profiles = [
    { id: 1, name: '[1] MTN Text', bandwidth: 100, latency: 100 },
    { id: 2, name: '[2] MTN Voice', bandwidth: 500, latency: 200 },
    { id: 3, name: '[3] MTN Video', bandwidth: 1000, latency: 300 }
];

module.exports = { Profiles };