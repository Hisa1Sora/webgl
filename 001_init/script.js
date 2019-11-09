onload = function(){
    const c = document.getElementById('canvas');
    c.width = 640;
    c.height = 480;

    const gl = c.getContext('webgl') || c.getContext('experimental-webgl');

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
};