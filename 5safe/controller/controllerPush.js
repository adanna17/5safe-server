var FCM = require('fcm-push');

const server_api_key = 'AIzaSyDJ90WVAMNf7A72NelE_kV3SzNPlVRTm0Y';

const fcm = new FCM(server_api_key);

function controllerPush(){
}

//기기 토큰 등록

//기기 토큰 업데이트
controllerPush.prototype.updateRegistrationId = function(newId, oldId, callback){
    //Todo: db query

}

//기기 목록(pushList)에 푸쉬 보내기
controllerPush.prototype.sendPushMessage = function(pushList){

    // var device_token = 'eMOFXM1YjO4:APA91bHtNMnw20U8ipGqcXi1gh8mGouBLqmoAzQgfXflsfZNFtxmbsKdVgOc7UgJCrXpBGnvFgL5gdmH2gqhYkOUzW5AEJ0KUozsY7S5KnvQj8t4rp9YEqtat805Ue1lRCNKvG7GkPg_';

    // 푸쉬 보내기
    pushList.forEach(function(device_token){
        const message = {
            registration_ids: [device_token],
            notification: {
                title: 'warning',
                text: '길가로 비켜주세요..!!'
            }
        };

        fcm.send(message, (err, results) => {
            if(err){
                console.error('Error: ', err);
                return;
            }
            console.log('Success: ', results);
        });
    });
}

module.exports = controllerPush;
