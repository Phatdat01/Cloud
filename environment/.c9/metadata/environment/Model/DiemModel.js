{"filter":false,"title":"DiemModel.js","tooltip":"/Model/DiemModel.js","undoManager":{"mark":13,"position":13,"stack":[[{"start":{"row":81,"column":1},"end":{"row":82,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":82,"column":0},"end":{"row":83,"column":0},"action":"insert","lines":["",""]},{"start":{"row":83,"column":0},"end":{"row":84,"column":0},"action":"insert","lines":["",""]},{"start":{"row":84,"column":0},"end":{"row":85,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":84,"column":0},"end":{"row":98,"column":1},"action":"insert","lines":["async function GetById(ID,ID1)","{","  var params = {","  TableName: 'Diems',","  FilterExpression: '#name = :value AND #malop = :valu',","  ExpressionAttributeValues: { ':value': ID,':valu':ID1 },","  ExpressionAttributeNames: { '#name': 'MaMon','#malop':\"MaSV\" }","}","  try {","    const data = await docClient.scan(params).promise()","    return data","  } catch (err) {","    return err","  }","}"],"id":3}],[{"start":{"row":84,"column":28},"end":{"row":84,"column":29},"action":"remove","lines":["1"],"id":4},{"start":{"row":84,"column":27},"end":{"row":84,"column":28},"action":"remove","lines":["D"]},{"start":{"row":84,"column":26},"end":{"row":84,"column":27},"action":"remove","lines":["I"]},{"start":{"row":84,"column":25},"end":{"row":84,"column":26},"action":"remove","lines":[","]}],[{"start":{"row":88,"column":36},"end":{"row":88,"column":55},"action":"remove","lines":["AND #malop = :valu'"],"id":5}],[{"start":{"row":89,"column":43},"end":{"row":89,"column":55},"action":"remove","lines":[",':valu':ID1"],"id":6}],[{"start":{"row":90,"column":46},"end":{"row":90,"column":62},"action":"remove","lines":[",'#malop':\"MaSV\""],"id":7}],[{"start":{"row":84,"column":22},"end":{"row":84,"column":23},"action":"insert","lines":["1"],"id":8}],[{"start":{"row":88,"column":35},"end":{"row":88,"column":36},"action":"insert","lines":["'"],"id":9}],[{"start":{"row":174,"column":17},"end":{"row":174,"column":18},"action":"insert","lines":[","],"id":10}],[{"start":{"row":174,"column":18},"end":{"row":175,"column":0},"action":"insert","lines":["",""],"id":11},{"start":{"row":175,"column":0},"end":{"row":175,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":175,"column":4},"end":{"row":175,"column":20},"action":"insert","lines":["GetById:GetById,"],"id":12}],[{"start":{"row":175,"column":19},"end":{"row":175,"column":20},"action":"remove","lines":[","],"id":13}],[{"start":{"row":175,"column":11},"end":{"row":175,"column":12},"action":"insert","lines":["1"],"id":14}],[{"start":{"row":175,"column":20},"end":{"row":175,"column":21},"action":"insert","lines":["1"],"id":15}]]},"ace":{"folds":[],"scrolltop":975,"scrollleft":0,"selection":{"start":{"row":31,"column":17},"end":{"row":31,"column":21},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":68,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1638634560553,"hash":"9ad613418dc693d82dec19bf98b6b01a1de97325"}