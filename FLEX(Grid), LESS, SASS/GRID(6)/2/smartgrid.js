const smartgrid = require('smart-grid');

const settings = {
    columns: 12,
    offset: '32px',
    container: {
        maxWidth: '1280px',
        fields: '30px'
    },
    oldSizeStyle: false
};

smartgrid('./src/precss', settings);