/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let Path = path.split('/');
    let res = [];
    
    for(let i=0;i<Path.length;i++){
        if(Path[i] !== '' && Path[i] !== '.' && Path[i] !== '..') {
            res.push(Path[i]);
        }else if(Path[i] === '..') {
            res.pop();
        }
    }
    
    return '/'+res.join('/');
};