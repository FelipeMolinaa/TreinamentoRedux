const app = require('./src/index')

const PORT = app.get('PORT')

app.listen(PORT, () => console.log('rodando'))