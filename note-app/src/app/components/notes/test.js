let {PythonShell} = require('python-shell')

PythonShell.runString('x=1+1;print(x)', null).then(messages=>{
    console.log('finished');
});
