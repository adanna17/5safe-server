var fcm = require('fcm-push');
var gcm = require('node-gcm');

const server_api_key = 'AIzaSyDJ90WVAMNf7A72NelE_kV3SzNPlVRTm0Y';

const fcm_sender = new fcm(server_api_key);
const gcm_sender = new gcm.Sender(server_api_key);

function controllerPush(){
}

//기기 토큰 등록

//기기 토큰 업데이트
controllerPush.prototype.updateRegistrationId = function(newId, oldId, callback){
    //Todo: db query
}

//기기 목록(pushList)에 fcm으로 푸쉬 보내기
controllerPush.prototype.sendPushMessageFromFcm = function(pushList){

    // var device_token = 'eMOFXM1YjO4:APA91bHtNMnw20U8ipGqcXi1gh8mGouBLqmoAzQgfXflsfZNFtxmbsKdVgOc7UgJCrXpBGnvFgL5gdmH2gqhYkOUzW5AEJ0KUozsY7S5KnvQj8t4rp9YEqtat805Ue1lRCNKvG7GkPg_';

    // 푸쉬 보내기
    pushList.forEach(function(device_token){
        var message = {
            registration_ids: [device_token],
            notification: {
                title: 'warning',
                text: '길가로 비켜주세요..!!'
            }
        };

        fcm_sender.send(message, (err, results) => {
            if(err){
                console.error('Error: ', err);
                return;
            }
            console.log('Success: ', results);
        });
    });
}

//기기 목록(pushList)에 gcm으로 푸쉬 보내기
controllerPush.prototype.sendPushMessageFromGcm = function(device_token){

    var message = new gcm.Message();
    message.addData('title', '푸쉬 노티 메시지 제목');
    message.addData('message', '푸쉬 노티 메시지 내용');

        gcm_sender.send(message, device_token, function(err, result){
            if(err){
                console.error('Error: ', err);
            }else{
                console.log('Success: ', result);
            }
        });
};

module.exports = controllerPush;
