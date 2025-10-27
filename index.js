const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = '';
var password = '';
var shared_secret = '';

var games = [2807960, 714010, 1172470, 1803110, 2807960, 49520, 307950, 1938090, 10180, 730, 2507950, 1085660, 380600, 1240440, 455020, 2767030, 2357570, 1808500, 248820, 219740, 71240, 3354750, 2641470, 868270, 2073850, 43196];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
