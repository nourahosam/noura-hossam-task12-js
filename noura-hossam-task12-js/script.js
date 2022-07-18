document.querySelector('#colors').addEventListener('change', function(e){
    // console.log(e.target.value);
    
    if(e.target.value === 'green'){
        document.body.style.backgroundColor = 'green';
    }
    else {
        document.body.style.backgroundColor = '#46b1f5';
    }
});


document.querySelector('input[name=checkbox]').addEventListener('change', function(e){
    if(e.target.checked){
        document.documentElement.style.setProperty('--theme', '#151e2b');
        document.documentElement.style.setProperty('--theme-light', '#93a5af');
        document.documentElement.style.setProperty('--theme-dark', '#4c566d');
        document.documentElement.style.setProperty('--theme-font', 'white');
        document.documentElement.style.setProperty('--theme-p', '#8e9499');
        document.querySelector('.font').textContent = "Dark Theme";
    }
    else {
        document.documentElement.style.setProperty('--theme', 'white');
        document.documentElement.style.setProperty('--theme-light', '#ead1cc');
        document.documentElement.style.setProperty('--theme-dark', '#bd9281');
        document.documentElement.style.setProperty('--theme-font', 'black');
        document.documentElement.style.setProperty('--theme-p', '#596066');
        document.querySelector('.font').textContent = "Light Theme";
    }
})

var profileName1 = document.querySelector('.head h2');
var profileName2 = document.querySelector('.profile-info h2');
var profileName3 = document.querySelector('.tweet-header h4');
var image1 = document.querySelector('.tweet-pp');
var image2 = document.querySelector('.profile-pic');

image2.innerHTML = '<img src="./images/john.jpg">';
image1.innerHTML = '<img src="./images/john.jpg">';
profileName1.textContent = 'John Doe';
profileName2.textContent = 'John Doe';
profileName3.textContent = 'John Doe';




//document.querySelector();