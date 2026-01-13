const cloudAPK = 'https://cloud.189.cn/t/zaqm2izmA3ey'
const cloudPass = 'a6ep'
const AndroidSize = '653 M'
const AppleSize = '818 M'

var lastidx = 1
function switchLan(idx) {
	if (lastidx != 2 && idx != 2) idx = (lastidx + 1) % 2
	lastidx = idx
	let s = [lan, mail, testingtips]
	for (let i = 0; i < 3; i++)s[i].style.display = i == idx ? '' : 'none'
}

const map_area = "<map name='lan'>\
	<area shape=rect coords='0,0,173,60' onclick=loadLan('en')>\
	<area shape=rect coords='0,60,173,118' onclick=loadLan('zh-Hans-CN')>\
	<area shape=rect coords='0,118,173,178' onclick=loadLan('zh-Hant-TW')>\
	<area shape=rect coords='0,178,173,236' onclick=loadLan('fr')>\
	<area shape=rect coords='0,236,173,296' onclick=loadLan('de')>\
	<area shape=rect coords='0,296,173,355' onclick=loadLan('es')>\
	<area shape=rect coords='0,355,173,411' onclick=loadLan('ar')>\
\
	<area shape=rect coords='173,0,347,60' onclick=loadLan('pt')>\
	<area shape=rect coords='173,60,347,118' onclick=loadLan('uk')>\
	<area shape=rect coords='173,118,347,178' onclick=loadLan('tr')>\
	<area shape=rect coords='173,178,347,236' onclick=loadLan('ja')>\
	<area shape=rect coords='173,236,347,296' onclick=loadLan('ko')>\
	<area shape=rect coords='173,296,347,355' onclick=loadLan('id')>\
	<area shape=rect coords='173,355,347,411' onclick=loadLan('hi-IN')>\
</map>"

const email_link = '<a href="mailto:support@terst.xyz">support@terst.xyz</a>'
var htmls_ = ''
var HTML_ = ''

function loadLan(Culture) {
	Culture ||= window.location.hash.substring(1) || 'en'
	var txts = htmls_[Culture].split("\r")
	var txtl = txts.length
	var htmls = HTML_ || window.document.body.innerHTML
	HTML_ ||= htmls
	htmls = htmls.split("{?}");
	htmls.forEach((x, i) => { if (i < txtl) htmls[i] += txts[i].trim() })
	window.document.body.innerHTML = htmls.join('')

	if (window.map_div) window.map_div.innerHTML = map_area
	if (window.mail_div) window.mail_div.innerHTML = email_link
	if (window.spAndroidSize) window.spAndroidSize.innerHTML = AndroidSize1 || AndroidSize
	if (window.spAppleSize) window.spAppleSize.innerHTML = AppleSize1 || AppleSize
	if (window.cloudAPKA) window.cloudAPKA.href = cloudAPK1 || cloudAPK
	if (window.cloudPassS) window.cloudPassS.innerHTML = cloudPass1 || cloudPass
	if (window.privacy) window.privacy.href = "privacy-policy.html#" + Culture
	if (window.return) window.return.href = "index.html#" + Culture
	if (window.ad) window.ad.href = "ad.html#" + Culture
}
