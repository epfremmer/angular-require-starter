module.exports = {
    dist: {
        unixNewlines: true,
        files: [{
            src: ['scss/*.scss'],
            dest: '../www/assets/css/screen.css',
            ext: '.css'
        }]
    }
};
