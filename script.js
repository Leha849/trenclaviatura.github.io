var player="img/chilli.png";
var monster="img/monster3.jpg";
a0.src=monster;
a1.src=player;
a17.src="img/finish.gif";
var rand="";
var per=1;
var pr300=0;
var pr500=0;
var prm300=0;
var prm500=0;
var vrrek=1000000;
bur=["ё", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"]
bue=["`", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "z", "x", "c", "v", "b", "n", "m", ",", "."]
mk=["img/io.png", "img/Q.png", "img/w.png", "img/E.png", "img/R.png", "img/TT.png", "img/Y.png", "img/UU.png", "img/I.png", "img/O.png", "img/P.png", "img/HA.png",
 "img/TV.png", "img/A.png", "img/S.png", "img/D.png", "img/F.png", "img/G.png", "img/H.png", "img/J.png", "img/K.png", "img/L.png", "img/JH.png", "img/AE.png",
  "img/Z.png", "img/X.png", "img/C.png", "img/V.png", "img/B.png", "img/n.png", "img/MM.png", "img/BA.png", "img/IY.png"]
var bu=bur;
var indb=Math.floor(Math.random()*33); 
rand=bu[indb];
klava.src=mk[indb];
var nom=1;//положение игрока
var mon=0;//положение монстра
var m=0;//количество монеток
var vr=0
function bez(){
    per=0;
    bm();
    vr=0; 
}
function smonstr(){
    per=1;
    sm();
}
function ost(){
    vr++;
    vibor.innerHTML="Прошло "+vr+" сек.";
    };
function smr(){//если выбрали русский язык
    bu=bur;
    indb=Math.floor(Math.random()*33); 
    rand=bu[indb];
    klava.src=mk[indb];
    eng.style.color="#ff0000";
    rus.style.color="#009900";
};
function sme(){//если выбрали английский язык
    bu=bue;
    indb=Math.floor(Math.random()*33); 
    rand=bu[indb];
    klava.src=mk[indb];
    rus.style.color="#ff0000";
    eng.style.color="#009900";
}
function sm(){//если выбрали: c монстром
    vr=0;
    nom=1;
    a0.src=monster;
    a1.src=player;
    vibor.innerHTML="Выберите уровень:"
    vibor.style.textDecoration="none";
    urovny.style.visibility='visible';
    clearInterval(timevr);
    bmn.style.color="#ff0000";
    smon.style.color="#009900";
    u1.src="img/a1.png"
    u2.src="img/a2.png"
    u3.src="img/a3.png"
    u4.src="img/b4.png"
    u5.src="img/b5.png"
};
function bm(){//если выбрали: без монстра
    nom=0;
    document.addEventListener("keydown",move);
    a0.src=player;
    a1.src="img/spacer.gif";
    timevr=setInterval(ost,1000);
    text.innerHTML="Найди: "+rand;
    urovny.style.visibility='hidden';
    smon.style.color="#ff0000";
    bmn.style.color="#009900";
};

function chel(kostum){//покупаем костюм, если хватает монет
    switch(kostum){
        case 2:
        if(pr300==0&&m>299){
            player="img/chilli300px2.png";
            a1.src=player;
            m=m-300;
            mo.innerHTML=m;
            pr300=1;
            mon300.src="img/vibrano.png";
            setTimeout("mon300.src='img/a00.png'",500);
        }else if(pr300==1){
            player="img/chilli300px2.png";
            a1.src=player;
            mon300.src="img/vibrano.png";
            setTimeout("mon300.src='img/a00.png'",500);
        }
        else {
            mon300.src="img/b300kr.png";
            setTimeout("mon300.src='img/b300.png'",500);
        }
        break;
        case 3:
            if(pr500==0&&m>499){
                player="img/chilli300px3.png";
                a1.src=player;
                m=m-500;
                mo.innerHTML=m;
                pr500=1;
                mon500.src="img/vibrano.png";
                setTimeout("mon500.src='img/a00.png'",500);
            }else if(pr500==1){
                player="img/chilli300px3.png";
                a1.src=player;
                mon500.src="img/vibrano.png";
                setTimeout("mon500.src='img/a00.png'",500);
            }
            else{
                mon500.src="img/c500kr.png";
                setTimeout("mon500.src='img/c500.png'",500)}
        break;
        case 4:
        player="img/chilli300px.png";
        a1.src=player;
        start.src="img/vibrano.png";
        setTimeout("start.src='img/a00.png'",500);
        break;
        case 5:
            if(prm300==0&&m>299){
                monster="img/monster1.png";
                a0.src=monster;
                m=m-300;
                mo.innerHTML=m;
                prm300=1;
                monst300.src="img/vibrano.png";
                setTimeout("monst300.src='img/a00.png'",500);
                }
            else if(prm300==1){
                monster="img/monster1.png";
                a0.src=monster;
                monst300.src="img/vibrano.png";
                setTimeout("monst300.src='img/a00.png'",500);
                }
            else{
                monst300.src="img/b300kr.png";
                setTimeout("monst300.src='img/b300.png'",500)}
        break;
        case 6:
            if(prm500==0&&m>499){//если выбрали скин и хватает денег
                monster="img/monster2.png";
                a0.src=monster;
                m=m-500;
                mo.innerHTML=m;
                prm500=1;
                monst500.src="img/vibrano.png";
                setTimeout("monst500.src='img/a00.png'",500);
                }
            else if(prm500==1){//если скин уже куплен, второй раз не платим
                monster="img/monster2.png";
                a0.src=monster;
                monst500.src="img/vibrano.png";
                setTimeout("monst500.src='img/a00.png'",500);
            }
            else{
                monst500.src="img/c500kr.png";
                setTimeout("monst500.src='img/c500.png'",500)}
        break;
        case 7:
        monster="img/monster3.png";
        a0.src=monster;
        monstart.src="img/vibrano.png";
        setTimeout("monstart.src='img/a00.png'",500);//пауза
        break;
        } 
}
mo.innerHTML=" "+m;
var u=1;
t=0;
function ur(urov){ //определяем какой уровень игры выбрал пользователь
    a0.src=monster;
    a1.src=player;
    u=urov;
switch(urov){
    case 1:
        t=3000;
        break;
    case 2:
        t=2400;
        break;
    case 3:
        t=1800;
        break;  
    case 4:
        t=1200;
        break; 
    case 5:
        t=600;
        break;
    }
    document.addEventListener("keydown",move)//если уровень выбрна, включаем клавиатуру
    idimg=document.getElementById("a"+mon);//стираем монстра
    idimg.src="img/spacer.gif";
    mon=0;//обнуляем положение монстра
    a0.src=monster;
    idimg=document.getElementById("a"+nom);//стираем игрока
    idimg.src="img/spacer.gif";
    nom=1;//обнуляем положение игрока 
    a1.src=player;
    a17.src="img/finish.gif";
    text.innerHTML="Найди: "+rand; //выводим загаданную букву
    time1=setInterval(monstr,t);
}
function monstr(){//передвижение монстра по таймеру
        idimg=document.getElementById("a"+mon);
        idimg.src="img/spacer.gif";
        mon++;
        idimg=document.getElementById("a"+mon);
        idimg.src=monster;
        if(mon==nom){
            text.innerHTML="Вы проиграли"
            idimg=document.getElementById("a"+mon);//стираем монстра
            idimg.src="img/spacer.gif";
            mon=0;//обнуляем положение монстра
            a0.src=monster;
            idimg=document.getElementById("a"+nom);//стираем монстра
            idimg.src="img/spacer.gif";//стираем игрока
            nom=1;//обнуляем положение игрока
            a1.src=player;
            a17.src="img/finish.gif";
            document.removeEventListener('keydown',move);
            clearInterval(time1);  
        }
}
text.innerHTML="Найди: "+rand;
function move(event){//проверка: если пользователь нажал верную букву, перемещаем его в следующую клетку
    if(event.key==rand){
        idimg=document.getElementById("a"+nom);
        idimg.src="img/spacer.gif";
        nom++;
        idimg=document.getElementById("a"+nom);
        idimg.src=player;
        if(nom==17){
            if(per==1){//если пользователь дошёл до финишной клетки, добавляем ему монеты в зависимости от уровня
                switch(u){
                    case 1:
                        m=m+10;
                        mo.innerHTML=" "+m;
                        break;
                    case 2:
                        m=m+20;
                        mo.innerHTML=" "+m;
                        break;
                    case 3:
                        m=m+30;
                        mo.innerHTML=" "+m;
                        break;  
                    case 4:
                        m=m+40;
                        mo.innerHTML=" "+m;
                        break; 
                    case 5:
                        m=m+10;
                        mo.innerHTML=" "+m;
                        break;
                }
            text.innerHTML="Поздравляю! Вы прошли уровень "+u;
            }else{
                text.innerHTML="Поздравляю! Вы прошли за "+vr+"сек.";
                vibor.innerHTML="";
                clearInterval(timevr);
                if(vr<vrrek){
                    vrrek=vr;
                    rek.innerHTML="Лучшее время: "+vrrek+" сек."
                }
            }
            document.removeEventListener("keydown",move)
            idimg=document.getElementById("a"+mon);//стираем монстра
            idimg.src="img/spacer.gif";
            mon=0;//обнуляем положение монстра
            a0.src=monster;
            idimg=document.getElementById("a"+nom );//стираем игрока
            idimg.src="img/spacer.gif";//стираем игрока
            nom=1;//обнуляем положение игрока
            a1.src=player;
            a17.src="img/finish.gif"
            clearInterval(time1);
            return;
        }
        indb=Math.floor(Math.random()*33);//загадываем следующую букву
        rand=bu[indb];
        klava.src=mk[indb];
        text.innerHTML="Найди: "+rand;
    }
}