module.exports = {
    'port': process.env.PORT || 9500,

    'baseurl': "",
    //'database' : 'mongodb://localhost:27017/commerce_app',

    'secret': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVnd3VhbnlpMDQyQGdtYWlsLmNvbSIsImlhdCI6MTU1NjM2Mzk0OCwiZXhwIjoxNTU2MzY0MzA4fQ',
    'hash' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVnd3VhbnlpMDQyQGdtYWlsLmNvbSIsImlhdCI6MTU1NjM2Mzk0OCwiZXhwIjoxNTU2MzY0MzA4fQ.hlvsog5NVcZphKxpJPPBBoMww9XRNZ-_h51osqyBqPg/',
    generateCode: function (len) {
        var length = len,
            charset = "01234567890ABCDEFGHIJKLMNOPQRSTUVWXY",
            retVal = "";
        for (var i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    },

    validateEmail: function (email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}