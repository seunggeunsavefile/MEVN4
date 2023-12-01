module.exports = (app) => {
    const devices = require('./device.controller.js');  //contact.controller.js를 로딩
    const datas = require('./data.controller.js');  //contact.controller.js를 로딩

    const authenticateUser = (req, res, next) => {
        console.log(req.isAuthenticated());
        if (req.isAuthenticated()) {
            console.log('인증 성공');
            next();
        } else {
//            res.status(301).redirect('/login');
            console.log('인증 실패');
            res.send({code:2});
        }
    };

    app.get('/devices', devices.findAll);             //모든 장치 검색
    app.get('/devices/:deviceId', devices.findOne);  //특정 장치 검색
    app.post('/devices',authenticateUser, devices.create);             //새로운 장치 추가
    app.put('/devices/:deviceId', devices.update);   //특정 장치 업데이트
    app.delete('/devices/:deviceId', devices.delete); //특정 장치 삭제
    app.post('/datas', datas.create);  //장치 데이터 업로드
    app.get('/datas/:deviceId', datas.findOne ); //특정 장치의 데이터 검색
}
