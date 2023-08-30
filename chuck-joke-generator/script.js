const jokeE1=document.getElementById('joke');
const jokebtn=document.getElementById('joke-btn');
jokebtn.addEventListener('click',generateJoke);
function generateJoke()
{
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange=function(){
        if(this.readyState===4)
        {
            if(this.status===200)
        {
            jokeE1.innerHTML=(JSON.parse(this.responseText)).value;
        }
        else
        {
         jokeE1.innerHTML='Something Went Wrong (Not Funny)';
        }     
        }   
        };
    xhr.send();
}
document.addEventListener('DOMContentLoaded',generateJoke);