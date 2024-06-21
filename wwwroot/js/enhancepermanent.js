document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#redbutton').addEventListener('click', function () {
        document.querySelector('#enhance').classList = 'red';

        console.log('red');
    });
    document.querySelector('#bluebutton').addEventListener('click', function () {
        document.querySelector('#enhance').classList = 'blue';
        console.log('blue');
    });
})