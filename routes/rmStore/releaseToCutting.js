const { STEEL_MODEL } = require('../../models/steels');

module.exports = {
    getPartNo: (req, res, next) => {
        req._partNo = req.body.partNo;
        req._plannedQty = req.body.plannedQty;
        next();
    },
    searchInMongo: async (req, res, next) => {
        req._availableSteel = await STEEL_MODEL.find({
                    'approvals': { $elemMatch: {'partNo': req._partNo }}
        }, 'challanNo grade section heatNo heatCode availableQty').sort({challanDate: 'asc'})
        .then(result => {
            console.log(result)
            return result;
        })
        .catch(err => {
            res.status(404).json({ error: err, data: null, msg: "Couldn't retrieve approved steel" + err }).end();
        })
        console.log(req._availableSteel);
        next();
    },
    // selectSteel: (req, res, next) => {

    // },
    retrieveCutWeight: async (req, res, next) => {
        const cutWeight = await PART_MODEL.findOne({
            partNo: req._partNo
        }, cutWeight)
        .then(result => {
            console.log(result)
            return result;
        })
        .catch(err => {
            res.status(404).json({ error: err, data: null, msg: "Part does not exist" }).end();
        })
        req._totalWeight = cutWeight * req._plannedQty;
        next();
    },
    // updateInventory: (req, res, next) => {
    //     const remQty = req._availableSteel.availableQty - totalWeight;
    //     req._updateSteel = await STEEL_MODEL.findOneAndUpdate({
    //         'req._
    //     })
    // },
    // response: (req, res, next) => {

    // }
}