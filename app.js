const Reader = require('./components/Reader')
const path = require('path')
const Processor = require('./components/Processor')
const Table = require('./components/Table')
const HtmlParser = require('./components/HtmlParser')
const HtmlWriter = require('./components/HtmlWriter')
const PdfWriter = require('./components/PdfWriter')

const myReader = new Reader()
const toHtml = new HtmlWriter()

async function main() {
    let inputFile = path.join(__dirname, 'files', 'input', 'users.csv')
    let data = await myReader.Read(inputFile)
    let processedData = Processor.Process(data)
    let usersTable = new Table(processedData)
    let html = await HtmlParser.Parse(usersTable)
    
    let outputFile = path.join(__dirname, 'files', 'output', Date.now() + 'users')
    toHtml.WriteHTML(outputFile + '.html', html)
    PdfWriter.WritePDF(outputFile + '.pdf', html)
}

main()