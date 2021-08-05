export function converttokebabcase(str) {
    return str.replace(/([A-Z])/g, function(m){
        return '-' + m.toLowerCase();
    });
}

export function converttocamelcase(str) {
    return str.replace(/\-(\w)/g, function(m){
        return m[1].toUpperCase();
    });
}