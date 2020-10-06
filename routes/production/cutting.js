module.exports = {
    fetchPlan: async (req, res, next) => {
        const todaysPlan = await PRODPLAN_MODEL.findOne({ 'date': new Date() })
        console.log(todaysPlan);
    }
}