const ejs = require('ejs')
const path = require('path')

class HtmlParser {
    static async Parse(table) {
        const filePath = path.join(__dirname, '..', 'views', 'usersTable.ejs');
        return await ejs.renderFile(filePath, {header: table.header, rows: table.rows})
    }
}

module.exports = HtmlParser