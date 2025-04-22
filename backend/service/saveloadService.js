const tools = require("xml-js");
const fs = require("fs");

const saveJson = (program, saveLoc) => {
    program.array.forEach(shape => {
        fs.writeFile(saveLoc, shape, (error) => {
            // throwing the error
            // in case of a writing problem
            if (error) {
                // logging the error
                console.error(error);
            
                throw error;
            };
        });
    });
}

const saveXML = (program, saveLoc) => {
    program.array.forEach(shape => {
        fs.writeFile(saveLoc, tools.js2xml({shape}), (error) => {
            // throwing the error
            // in case of a writing problem
            if (error) {
                // logging the error
                console.error(error);
            
                throw error;
            };
        });
    });
}

const loadJson = (program, saveLoc) => {
    program.array.forEach(shape => {
        fs.re(saveLoc, tools.js2xml({shape}), (error) => {
            // throwing the error
            // in case of a writing problem
            if (error) {
                // logging the error
                console.error(error);
            
                throw error;
            };
        });
    });
}

const loadXML = (program, saveLoc) => {
    program.array.forEach(shape => {
        fs.writeFile(saveLoc, tools.js2xml({shape}), (error) => {
            // throwing the error
            // in case of a writing problem
            if (error) {
                // logging the error
                console.error(error);
            
                throw error;
            };
        });
    });
}

module.exports = {
    loadJson,
    loadXML,
    saveJson,
    saveXML
}