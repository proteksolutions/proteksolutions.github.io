function test_start() {clearInterval(test.sttm);test_init();if (arguments.length>0) test_init2(arguments[0]);test.sttm=setInterval ("doEffect('test')",10);}
function test_stop() {clearInterval(test.sttm);window.status="";}

test_init();
function test_init() {test={stel:0,stft:"",stec:1,stcel:1,stce:-1,stcl:-1,stls:-1,stcs:0,sttg:0,stea:["ProTekSolutions.com",11,10,1]};}
function test_init2 (en) {test.stea=[test.stea[(en-1)*4],test.stea[(en-1)*4+1],test.stea[(en-1)*4+2],test.stea[(en-1)*4+3]];test.stec=1;test.stel=0;}
function doEffect(es) {var s=eval(es);if (s.stce==s.stec) {if (s.stcel==s.stel) {clearInterval(s.sttm);window.status=s.stft;return;} else {if (s.stel>0) s.stcel++;s.stce=-1;s.stcl=s.stls;}}if (s.stcl==s.stls) {s.stce++;s.sttx=s.stea[s.stce*4];s.sttp=s.stea[s.stce*4+1];s.stsd=s.stea[s.stce*4+2];s.stls=s.stea[s.stce*4+3];s.stcl=0;s.stsp=1;s.sttg=0;}if (21-s.stsd-s.sttg==0) {var stres=eval("stEffect"+s.sttp+"(s.sttx,s.stsp++,es);");s.sttg=0;if (stres!="") window.status=stres;else {s.stcl++;s.stsp=1;}}s.sttg++;}
function stEffect11(text,step){if (step>3) return ""; else return text;}
test_start();