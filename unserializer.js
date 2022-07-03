// Unserializer JS
// Unserialize a PHP Serialized String into a Javascript-Friendly Object
function unserializer(str) {
  let data = [];
  let arrStat = -1;
  let objStat = -1;
  let splita = str.split(/(a:\d:)/);
  if(splita && splita.length > 0) {
    splita.forEach((sub,i) => {
      if(sub !== "") {
        if(/(a:\d:)/.test(sub) && /({[^a-zA-Z]:\d;)/.test(splita[i - 1]) === false && sub.indexOf('}') === -1) {
          ++arrStat;
          data[arrStat] = [];
        } else if(/({[^a-zA-Z]:\d;)/.test(sub) && /(a:\d:)/.test(splita[i+1])) {
          data[arrStat].push([]);
        } else if(sub.indexOf('{') > -1 && sub.indexOf('}') > -1) {
            let objData = sub.split('}')[0].replace('{', '').split(';');
            if(objData && objData.length > 0) {
              objData.forEach(sobj => {
                  let ssub = sobj.replace(/[a-zA-Z]:\d+:/, '').replace('"', '').replace('"', '');
                  if(ssub !== "") {data[arrStat].push(ssub);}
              });
            }
        }
      }
    });
  }
  data.shift();
  return data;
}
