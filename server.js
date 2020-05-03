const express = require('express');
const app = express();

app.use(express.static('./dist/usvoih-ui'));
app.get('/*', function(req, res) {
  res.sendFile('app/app.component.html', {root: 'dist/usvoih-ui/'}
);
});
app.listen(process.env.PORT || 8080);
