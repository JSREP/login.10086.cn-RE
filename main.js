const window = {};
// 引入 jsencrypt
const JSEncrypt = require('node-jsencrypt');

//add by wangp at 2019-04-11 新增11位手机号码纯数字校验 end
function et(_0x32033c) {
    var _0x283d00 = 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAsgDq4OqxuEisnk2F0EJFmw4xKa5IrcqEYHvqxPs2CHEg2kolhfWA2SjNuGAHxyDDE5MLtOvzuXjBx/5YJtc9zj2xR/0moesS+Vi/xtG1tkVaTCba+TV+Y5C61iyr3FGqr+KOD4/XECu0Xky1W9ZmmaFADmZi7+6gO9wjgVpU9aLcBcw/loHOeJrCqjp7pA98hRJRY+MML8MK15mnC4ebooOva+mJlstW6t/1lghR8WNV8cocxgcHHuXBxgns2MlACQbSdJ8c6Z3RQeRZBzyjfey6JCCfbEKouVrWIUuPphBL3OANfgp0B+QG31bapvePTfXU48TYK0M5kE+8LgbbWQIDAQAB';
    var _0x1defd6 = new JSEncrypt();
    _0x1defd6['setPublicKey'](_0x283d00);
    var _0x4bd6d3 = _0x1defd6['encrypt'](_0x32033c);
    return _0x4bd6d3;
}

console.log(et("CC11001100"));
// Output:
// evm9X+EhuSKdp+2jGAPZUMVQTKO7p2RNHyd+xO9JuMxY0Wz1caXNtAoAK0wAGDixyGf95HuCWEtpdJZYuTCYyP1eA23Ukds+N5fUAHBzyoI/VgbZJSngK/O1IQwUh1ywOdsEB/LUGLq3oikrMYg3JFK5XfVvx1G+eqDveFGzB4++0Apdzn2MV4M35RtKuZhUudkfPRt4YyHsvzpR2+ie3JJvtczeExP6OR4nj0yIfRiOX6VcyajhkxgWzMRkNCkp7Dnv4T4wZJXrkXrUYw0VnJHECSUIXrgF67qnKjj/3enC8h1kHRLR4RctxCnVOEWssFjJmzhZ5YjnWnS0wgbXsA==


