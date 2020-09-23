const { STEEL_MODEL } = require('../../models/steels');

module.exports = {
    getPartNo: (req, res, next) => {
        req._partNo = req.body.partNo;
        req._plannedQty = req.body.plannedQty;
        next();
    },
    searchInMongo: async (req, res, next) => {
        req._availableSteel = await STEEL_MODEL.find({
            $and: [
                {
                    approvals: { $elemMatch: req._partNo },
                },
                {
                    heatStatus: true
                }
            ]
        }, 'challanNo grade section heatNo heatCode availableQty').sort({challanDate: 'asc'})
        .then(result => {
            console.log(result)
            return result;
        })
        .catch(err => {
            res.status(404).json({ error: err, data: null, msg: "Couldn't retrieve approved steel" }).end();
        })
        console.log(req._availableSteel);
        next();
    },
    // selectSteel: (req, res, next) => {

    // },
    // retrieveCutWeight: (req, res, next) => {
    //     const cutWeight = 4.7;
    //     req._totalWeight = cutWeight * req._plannedQty;
    //     next();
    // },
    // updateInventory: (req, res, next) => {
    //     const remQty = req._availableSteel.availableQty - totalWeight;
    //     req._updateSteel = await STEEL_MODEL.findOneAndUpdate({
    //         'req._
    //     })
    // },
    // response: (req, res, next) => {

    // }
}