class Util {

    static reqToObj(req) {
        let obj = {}
        for (const [key, value] of Object.entries(req.body)) {
            obj[key] = value;
        }
        return obj;
    }

    static reqToObjNotId(req) {
        let obj = {}
        for (const [key, value] of Object.entries(req.body)) {
            if (key != "_id") obj[key] = value;
        }
        return obj;
    }
}

module.exports = Util;