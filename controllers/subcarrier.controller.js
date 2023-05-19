const { Subcarriers } = require('../models/subcarriers.model');

const subcarriers = async (req, res) => {
    res.status(200).json({
        Subcarriers,
        success: true
    });
}

module.exports = { subcarriers }