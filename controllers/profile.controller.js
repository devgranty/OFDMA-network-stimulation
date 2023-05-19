const { Profiles } = require('../models/profiles.model');

const profiles = (req, res) => {
    res.status(200).json({
        Profiles,
        success: true
    });
}

module.exports = { profiles };