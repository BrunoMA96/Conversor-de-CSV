const fs = require('fs')
const util = require('util')

class HtmlWriter {
    constructor() {
        this.writer = util.promisify(fs.writeFile)
    }

    async WriteHTML(filename, data) {
        try {
            await this.writer(filename, data)
            return true
        } catch (err) {
            return false
        }
    }
}

module.exports = HtmlWriter