# Projeto para a conversão de arquivos CSV.

### Esse script converte tabelas do excel para PDF ou HTML.

#### É necessario salvar a tabela no formato .csv.

#### O arquivo deve ser colocado na pasta input localizada na pasta files.

#### Para criar apenas arquivos PDF, comente ou delete a linha 20 no arquivo app.js.
##### Para comentar uma linha adicione //, duas barras, no inicio da linha.
~~~javascript
toHtml.WriteHTML(outputFile + '.html', html)
~~~

#### Para criar apenas arquivos HTML, comente ou delete a linha 21 no arquivo app.js.
~~~javascript
PdfWriter.WritePDF(outputFile + '.pdf', html)
~~~

#### Abra o terminal na pasta do projeto e execute os comandos:
```
npm install
```

```
node app.js
```

#### O novo arquivo criado vai estar na pasta output localizada na pasta files.
