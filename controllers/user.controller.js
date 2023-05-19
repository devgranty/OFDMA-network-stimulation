const { Subcarriers, subcarrierSpacing } = require('../models/subcarriers.model');
const { Users } = require('../models/users.model');
const { Profiles } = require('../models/profiles.model');


// Endpoint to register a new user/service
const createUser = (req, res) => {
    const profileId = parseInt(req.body.profileId);

    // Check if the profile exists
    const profile = Profiles.find(p => p.id === profileId);
    if(!profile){
        return res.status(404).json({
            error: 'Profile not found',
            success: false
        });
    }

    // Assign subcarriers to the user/service based on its bandwidth requirement
    const bandwidth = profile.bandwidth;
    const subcarrierIds = [];
    let remainingBandwidth = bandwidth;

    Subcarriers.forEach(subcarrier => {
        if(subcarrier.assignedTo === null && remainingBandwidth >= subcarrierSpacing){
            subcarrier.assignedTo = Users.length + 1;
            subcarrierIds.push(subcarrier.id);
            remainingBandwidth -= subcarrierSpacing;
        }
    });

    // Add the user/service to the active list
    const user = { id: Users.length + 1, profile: profile, subcarrierIds: subcarrierIds };
    
    Users.push(user);
    res.status(200).json(user);
}



// Endpoint to remove user/service
const removeUser = (req, res) => {
    const userId = parseInt(req.params.id);

    // check if user/service exists
    const user = Users.find(u => u.id === userId);
    if(!user){
        return res.status(404).json({
            error: 'User not found',
            success: false
        });
    }

    // Release the assigned subcarriers
    user.subcarrierIds.forEach(subcarrierId => {
        const subcarrier = Subcarriers.find(s => s.id === subcarrierId);
        subcarrier.assignedTo = null;
    });

    // Remove the user/service from the active list
    Users.splice(Users.indexOf(user), 1);

    res.status(200).json(Users);
}

module.exports = {
    createUser,
    removeUser
};