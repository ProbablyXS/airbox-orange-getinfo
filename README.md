# airbox-orange-getinfo
A small program for displaying various information without accessing the administrator page

Using command fetch with node JS.
Converted XML TO JSON VALUE

HOW TO USE IT : 

Download .js file

Install node js

Execute .js with command : node airbox.js

PREVIEW : 

![airbox_cmyk_rose](https://github.com/ProbablyXS/airbox-orange-getinfo/assets/99107085/ac0bcc90-a449-4e6c-9830-4d0e4182209a)

![airbox](https://github.com/ProbablyXS/airbox-orange-getinfo/assets/99107085/4782b794-e964-4c7a-8764-da0f4662eec3)


**scripts/xml.js**

```
var get_request_valid_url = [
	'api/wlan/liveboxmode',
	'api/wlan/station-information',
	'api/wlan/multi-basic-settings',
	'api/wlan/multi-switch-settings',
	'api/wlan/host-list',
	'api/wlan/basic-settings',
	'api/wlan/handover-setting',
	'api/sdcard/sdcard',
	'api/sdcard/sdcapacity',
	'api/sdcard/sdfile',
	'api/sdcard/uploadflag',
	'api/sdcard/Check_file_exist',
	'api/sdcard/sdfilestate',
	'api/monitoring/status',
	'api/monitoring/statusex',
	'api/monitoring/traffic-statistics',
	'api/monitoring/month_statistics',
	'api/monitoring/start_date',
	'api/monitoring/converged-status',
	'api/net/current-plmn',
	'api/dialup/profiles',
	'api/device/information',
	'api/sms/sms-count',
	'api/sms/send-status',
	'api/sms/send-sms',
	'api/sms/cancel-send',
	'api/pin/status',
	'api/pin/save-pin',
	'api/pin/simlock',
	'api/user/remind',
	'api/user/state-login',
	'api/ussd/get',
	'api/ussd/release',
	'api/global/module-switch',
	'api/online-update/upgrade-messagebox',
	'api/monitoring/check-notifications',
	'api/online-update/configuration',
	'api/online-update/url-list',
	'api/prsite/getrandurl',
	'api/online-update/ack-newversion',	
	'api/online-update/upgrade_redirction',	   
	'api/webserver/publickey',
	'api/webserver/token',
	'api/device/api_ini_version',
	'api/language/current-language',
	'api/device/basic_information',
	'api/usbstorage/fsstatus',
	'api/sdcard/dlna-setting',
	'api/dialup/connection',
	'api/online-update/autoupdate-config',
	'api/online-update/redirect_cancel',
	'api/monitoring/default-language-flag',
	'api/sms/splitinfo-sms',
	'api/wlan/status-switch-settings'
];
```

```
var post_request_valid_url = [
	'api/user/login',
	'api/sdcard/sdcard',
	'api/sdcard/fileupload',
	'api/sdcard/deletefile',
	'api/sdcard/createdir',
	'api/sdcard/sdfile',
	'api/dialup/mobile-dataswitch',
	'api/dialup/dial',
	'api/sms/sms-list',
	'api/sms/delete-sms',
	'api/sms/set-read',
	'api/sms/save-sms',
	'api/sms/send-sms',
	'api/sms/cancel-send',
	'api/sms/sms-list-phone',
	'api/sms/copy-sms',
	'api/sms/move-sms',
	'api/pb/pb-match',
	'api/pin/operate',
	'api/pin/save-pin',
	'api/user/remind',
	'api/user/login',
	'api/user/logout',
	'api/ussd/send',
	'api/monitoring/clear-traffic',
	'api/wlan/multi-basic-settings',
	'api/wlan/multi-switch-settings',
	'api/wlan/handover-setting',
	'api/language/current-language',
	'api/sdcard/Check_file_exist',
	'api/prsite/getrandurl',
	'api/online-update/ack-newversion',	
	'api/webserver/publickey',
	'api/pin/verify-simlock',
	'api/user/challenge_login',
	'api/user/authentication_login',
	'api/usbstorage/fsstatus',
	'api/sdcard/dlna-setting',
	'api/online-update/autoupdate-config',
	'api/monitoring/default-language-flag'
];
```

