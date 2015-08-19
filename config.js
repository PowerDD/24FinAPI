var config = {}

config.mssql = {
    user: process.env.mssqlUsername,
    password: process.env.mssqlPassword,
    server: process.env.mssqlServer,
    database: process.env.mssqlDatabase,
	options: {
        encrypt: true
    }
};

config.mssqlMaster = {
    user: process.env.mssqlUsername,
    password: process.env.mssqlPassword,
    server: process.env.mssqlServer,
    database: 'master',
	options: {
        encrypt: true
    }
};

config.mssqlWangsing = {
    user: 'sa',
    password: 'P@ssw0rd@sa',
    server: 'wangsing.ddns.info',
    database: 'Remax',
	options: {
        encrypt: true
    }
};

config.dropboxConnectionString = '?oauth_consumer_key=' + process.env.dropboxAppKey + '&oauth_token=' + process.env.dropboxOauthToken + '&oauth_signature_method=PLAINTEXT&oauth_signature=' + process.env.dropboxAppSecret + '%26' + process.env.dropboxOauthSecret + '&';

config.url = '//24fin-api.azurewebsites.net';
config.origin = ['24fin-api.azurewebsites.net', '24fin-auth.azurewebsites.net', '24fin-backend.azurewebsites.net', 'seller.24fin.com', 'www.remaxthailand.co.th', 'remaxthailand.co.th'];

config.crypto = {};
config.crypto.algorithm = 'aes256';
config.crypto.password = '24FIN';

config.sendgrid = {};
config.sendgrid.username = 'azure_52d6f9937e6782268e274635183dc493@azure.com';
config.sendgrid.password = 'e7FG3sj27TZ0q8I';
config.sendgrid.sender = 'noreply@remaxthailand.co.th';

config.gmail = {};
//config.gmail.username = 'remaxbackend@gmail.com';
//config.gmail.password = 'P@ssw0rd@remax';
config.gmail.username = 'powerddshop@gmail.com';
config.gmail.password = 'P@ssw0rd@Power';
config.gmail.senderName = 'Remax Thailand';
config.gmail.senderEmail = 'noreply@remaxthailand.co.th';
config.gmail.clientId = '664295581102-2q6742sn3f9k0s9uinm5c18ascik2hdc.apps.googleusercontent.com';
config.gmail.clientSecret = 'MFv61rFanl8A8RhYsyQs_Ggb';
config.gmail.refreshToken = '1/idVojkb6pqSSLga8CrmFwuWBNLiANQX8P6iWziXxCqo';
//http://masashi-k.blogspot.fr/2013/06/sending-mail-with-gmail-using-xoauth2.html
//https://www.google.com/settings/security/lesssecureapps เปิดใช้งานตรงนี้ก่อน ถึงจะส่ง mail ได้


config.order = {};
config.order.emailOfficer = 'remaxbackend@gmail.com';
config.order.emailSalesOfficer = 'dev@thaismartdev.com';
config.order.emailReply = 'sales@remaxthailand.co.th';
//config.order.emailBcc = 'comsci_erb@msn.com,nuttawut@msn.com,thira_wala@hotmail.com,teerich888@gmail.com,koonnoo_waiwai@hotmail.com,nunny_1980@hotmail.com,pat_jam@hotmail.co.th';
config.order.emailBcc = 'comsci_erb@msn.com,thira_wala@hotmail.com,teerich888@gmail.com,koonnoo_waiwai@hotmail.com,nunny_1980@hotmail.com,pat_jam@hotmail.co.th';

config.report = {};
config.report.aging = 'remaxbackend@gmail.com';
//config.report.agingBcc = 'comsci_erb@msn.com,nuttawut@msn.com,thira_wala@hotmail.com,teerich888@gmail.com,koonnoo_waiwai@hotmail.com,nunny_1980@hotmail.com,pat_jam@hotmail.co.th,m_boxrice@hotmail.com';
config.report.agingBcc = 'comsci_erb@msn.com,thira_wala@hotmail.com,teerich888@gmail.com,koonnoo_waiwai@hotmail.com,nunny_1980@hotmail.com,pat_jam@hotmail.co.th,m_boxrice@hotmail.com';
config.report.runRate = 'remaxbackend@gmail.com';
//config.report.runRateBcc = 'comsci_erb@msn.com,nuttawut@msn.com,thira_wala@hotmail.com,teerich888@gmail.com,koonnoo_waiwai@hotmail.com,nunny_1980@hotmail.com,pat_jam@hotmail.co.th,m_boxrice@hotmail.com';
config.report.runRateBcc = 'comsci_erb@msn.com,thira_wala@hotmail.com,teerich888@gmail.com,koonnoo_waiwai@hotmail.com,nunny_1980@hotmail.com,pat_jam@hotmail.co.th,m_boxrice@hotmail.com';

config.dealer = {};
config.dealer.approver = 'comsci_erb@msn.com';

module.exports = config;