//------------------TASK-1------------------
const country = "Canada";
const region = "Hamilton";
const population = 2345;
console.log(country, region, population);


const olkeAdadir = "Azerbaycan";
if(olkeAdadir==="Azerbaycan"){
    console.log(true);
}
else{
    console.log(false);
}
let dil = "eng";
console.log(typeof dil);
dil = 65;
console.log(typeof dil);
dil = true;
console.log(typeof dil);

let olke = " Azerbaycan";
console.log(olke); 

const istenilenAdli = population/2;
const yeni = istenilenAdli+1;
console.log(istenilenAdli);
console.log(yeni);
const fillandiaPopulation = 60000;
if(population>fillandiaPopulation){
    console.log("canadanin populasiyasi daha coxdur");
}else{
    console.log("fillandianin ehalisi daha coxdur");
}
//----------------------Challange--------------------
const mehmmedCeki = 95;
const mehmmedBoy = 1.88;
const elcinCeki = 85;
const elcinBoy = 1.76;
const mehemmedBmi = mehmmedCeki/mehmmedBoy*mehmmedBoy;
console.log(mehemmedBmi);
const elcinBmi = elcinCeki/elcinBoy*elcinBoy;
console.log(elcinBmi);
if(mehemmedBmi>elcinBmi){
    console.log(` mehemmedBmi ${mehemmedBmi}-dir, yeni daha boyukdur elcinBmi ${elcinBmi}-dir `);

}else{
    console.log(` elcinBmi ${elcinBmi}-dir,yeni  daha boyukdur mehemmedBmi ${mehemmedBmi}-dir `);

}
//------------------TASK-2------------------
console.log('9'-'5');//4
console.log('19'-'13'+'17');//617
console.log('19'-'13'+17);//23
console.log('123'<57);//false
console.log(5+6+'4'+9-4-2);//1149-4-2=1143
const Azerpopulasia = 3565;
if(Azerpopulasia>3300){
    console.log(`${Azerpopulasia}-si 33 milyondan coxdur`);

}
else{
    console.log(`${Azerpopulasia}-si 33 milyondan azdir`);
}


//switchcase???

//-------------------Challange-2-----------------------
const delfinXallari = [96,108,89];
delfinEdediOrta = (delfinXallari.at(0)+delfinXallari.at(1)+delfinXallari.at(2))/3;
console.log(delfinEdediOrta);

const koalaXallari = [88,91,110];
koalaEdediOrta = (koalaXallari.at(0)+koalaXallari.at(1)+koalaXallari.at(2))/3;
console.log(koalaEdediOrta);
if(delfinEdediOrta>koalaEdediOrta){
    console.log("Delfinler qazandi");
}
else if(koalaEdediOrta>delfinEdediOrta){
    console.log("Koalalar qazandi");
}
else{
    console.log("Berabere qaldilar");
}

console.log(koalaEdediOrta >= 100 && koalaEdediOrta > delfinEdediOrta );
console.log(delfinEdediOrta >= 100 && delfinEdediOrta > koalaEdediOrta );
console.log(koalaEdediOrta >= 100 &&  delfinEdediOrta >= 100 && delfinEdediOrta === koalaEdediOrta);

//------------------Challange-3----------------------

const hesab = 275;
const servisHaqqi = (hesab>=50 && hesab <= 300 ) ? 15 : 20;
const odenish = hesab * servisHaqqi/100;
console.log(`odenishiniz: ${odenish}`); 
console.log(`Hesab ${hesab} azn idi. Servis haqqi ${servisHaqqi} azn oldu. Umumi hesabiniz ${odenish} azn teshkil edir `);


//-------------Javascript tapşırıqlar-3-------------------
const olkeniTesvirEt = (olke,population,paytaxtSeher) => {
   const sentence = `${olke}-nin ${population}-ehalisi var ve ${paytaxtSeher} onun paytaxt sheheridir`;
   console.log(sentence);
};
olkeniTesvirEt("Finladiya", 6000, "Helsinki");
olkeniTesvirEt("Canada", 3565, "Ottowa");
olkeniTesvirEt("America", 28000, "Washington");

dunyaPopulasiasi = 7900;
function dunyaninFaizi1 (populasiya) {
    const populasiya1 = 3565;
    const populasiya2 = 45635;
    const populasiya3 = 28965;
    const faiz = dunyaPopulasiasi/populasiya1*100;
    console.log(faiz);
    console.log(` Cinin ${populasiya1} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
    console.log(` Canadanin ${populasiya2} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
    console.log(` Azerbaycanin ${populasiya3} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
};
dunyaninFaizi1();

const dunyaninFaizi2 = function (populasiya){
    const populasiya1 = 3565;
    const populasiya2 = 9835;
    const populasiya3 = 1265;
    const faiz = dunyaPopulasiasi/populasiya1*100;
    console.log(faiz);
    console.log(` Romanin ${populasiya1} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
    console.log(` Berlinin ${populasiya2} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
    console.log(` Tokyonun ${populasiya3} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
};
dunyaninFaizi2();

const dunyaninFaizi3 = () => {
    const populasiya1 = 3565;
    const populasiya2 = 520;
    const populasiya3 = 777;
    const faiz = dunyaPopulasiasi/populasiya1*100;
    console.log(faiz);
    console.log(` Parisin ${populasiya1} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
    console.log(` Londonun ${populasiya2} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
    console.log(` LosAngelesin ${populasiya3} milyon ehalisi var dunyanin ${faiz}-ini teshkil edir`);
};
dunyaninFaizi3();

const populasiyaniGoster = (olke, populasiya, faiz) => {
    return console.log(` ${olke}-nin ${populasiya} milyon ehalisi var dunyanin ${faiz}%-ini teshkil edir`);
   
};
populasiyaniGoster("Turkiye", 2637, 35.2);
populasiyaniGoster("Azerbaycan", 35657, 18.2);
populasiyaniGoster("Gurcustan", 98637, 98.2);

const delfin = [44,23,71];
const koala = [65,54,49];
const ortalamaHesabla = () => {
  const  delfinOrtalama = (delfin.at(0)+delfin.at(1)+delfin.at(2))/3;
    const koalaOrtalama = (koala.at(0)+koala.at(1)+koala.at(2))/3;
    console.log(delfinOrtalama);
    console.log(koalaOrtalama);
    console.log((delfinOrtalama+koalaOrtalama)/2);
};
ortalamaHesabla();

const qazananiTap  = (delfinOrtalama, koalaOrtalama) => {
   if(delfinOrtalama>koalaOrtalama){
    console.log("delfin qazandi");
   }
   else{
    console.log("koala qazandi");
   }
};
qazananiTap();

//---------------Javascript tapşırıqlar-3--------------

const numbers = (num1) => {
    return num1*5;
};
const beshevur = numbers(7);
console.log(beshevur);

function argumentWas (oneParametr) {
    return "Argument was: " + oneParametr;
}
const sentence = argumentWas("Aydansn");
console.log(sentence);

const other  = (num1,num2) => {
 
    return (num1+num2)/2;
};
const edediOrta = other(10,20);
console.log(edediOrta);

const kvadratHesabla = (numberFirst) => {
    return numberFirst**2;
};
const kvadrat = kvadratHesabla(5);
console.log(kvadrat);

const kokAltiHesabla = (numbers1) => {
    return Math.sqrt(numbers1);
};
const hesablaKok = kokAltiHesabla(64);
console.log(hesablaKok);

const otherFunction = (difArgument) => {

    if(typeof difArgument === "number" ){
       return difArgument*2;
    }
    else if (typeof difArgument === "string"){
        return difArgument.length;
    }
    else{
      return "argument is not definite";
    }
};
const sentence2 = otherFunction(4);
console.log(sentence2);
const sentence3 = otherFunction("Aydansn");
console.log(sentence3);

const hesablaAge = (dogumili) => {
  const currentYear = new Date().getFullYear();
  console.log(currentYear-dogumili);
    return currentYear-dogumili;
};

hesablaAge(2004);
hesablaAge(2003);
hesablaAge(2009);
hesablaAge(1978);
hesablaAge(1974);

const information =  (job,hesablaAge) => {
    const cumle = `${job} ishidir, ${hesablaAge} yashiniz `;
    console.log(cumle);
 }
 information("Drector", 50);
 information ("Developer", 20);
 information ("BusinessWoman", 46);
 information("Psychology", 21);
 information("Student", 15);

 //-----------------------Array------------------
 const populasiyalar = [234,435,543,789];
 if(populasiyalar.length===4){
    console.log("dogrudur");
 }
 else{
    console.log("yanlishdir")
 }
 const faizler = [];
 const dunyaninFaizi = populasiyalar => {
    const worldPopulation = 7900;
    const percentage = populasiyalar*100/worldPopulation;
    faizler.push(percentage);
    return percentage;
 };
 dunyaninFaizi(populasiyalar[0]);
dunyaninFaizi(populasiyalar[1]);
dunyaninFaizi(populasiyalar[2]);
dunyaninFaizi(populasiyalar[3]);
console.log(faizler);

const qonshuOlkler = ["Turkiye","Rusiya", "Iran"];
qonshuOlkler.push("Utopia");
console.log(qonshuOlkler);
qonshuOlkler.pop("Utopia");
console.log(qonshuOlkler);
if( qonshuOlkler === "Almania"){
    console.log("Merkezi Avropa olkesi deyil");
}
else{
    console.log("Avropa olkesir");
}
qonshuOlkler.splice(1, 3, "Canada");
console.log(qonshuOlkler);

function servisHaqqiniHesabla(hesab) {
    if (hesab >= 50 && hesab <= 300) {
        return hesab * 0.15;
    } else {
        return hesab * 0.20;
    }
}
function servisHesabi(hesab) {
    const servisHaqqi = servisHaqqiniHesabla(hesab);
    const umumiHesab = hesab + servisHaqqi;
    return [hesab, servisHaqqi, umumiHesab];
}

const hesablar = [125, 555, 44];
servisHesabi(hesablar);
console.log(servisHesabi);
console.log(servisHaqqiniHesabla);
console.log(hesablar);

const menimOlkem = {
    olke: "Azerbaycan",
    paytaxt: "Baku",
    dil:"Az",
    populasiya: 5000,
    qonshular: ["Turkiye", "Rusiya", "Iran" ]
    
};
console.log(`menim yasadigim olke ${menimOlkem.olke}-dir.`);
console.log(menimOlkem.populasiya+=2000);
console.log(menimOlkem['populasiya']-=3000);

menimOlkem.tesvirEt = function () {
    console.log(`2b-deki populyasiyanin son sayi ${this.populasiya}`);
}
menimOlkem.tesvirEt();

function adaolubolmadigi (object) {
    if(object.qonshular.length > 0){
        console.log(`mövcud olke ${object.olke} ada deyil`);
    }
    else{
        console.log(`mövcud olke ${object.olke} adadir`);
    }
 }
 adaolubolmadigi(menimOlkem);



const mehemmed = {
    ad:"mehemmed",
    kutle:78,
    boy:1.69,
    bmi: null, 
    bmiHesabla: function() {
      this.bmi = this.kutle / (this.boy * this.boy);
      return this.bmi;
    }
 };
 const elcin = {
    ad:"elcin",
    kutle:92,
    boy:1.95,
    bmi: null, 
    bmiHesabla: function() {
      this.bmi = this.kutle / (this.boy * this.boy);
      return this.bmi;
    }
 };
 const bmimehemmed =  mehemmed.bmiHesabla();
const bmielcin =  elcin.bmiHesabla();

if(bmimehemmed > bmielcin ){
    console.log(`${mehemmed.ad}'in BMI dəyəri ${bmimehemmed.toFixed(2)} və ${elcin.ad}'in BMI dəyəri ${bmielcin.toFixed(2)}-dən böyükdür.`);//vergulden sonra yuvarlashdirir 2dene
}
else if(bmielcin > bmimehemmed ){
    console.log(`${elcin.ad}'in BMI dəyəri ${bmielcin.toFixed(2)} və ${mehemmed.ad}'in BMI dəyəri ${bmimehemmed.toFixed(2)}-dən böyükdür.`);
}
else{
    console.log(`${mehemmed.ad} və ${elcin.ad} eyni BMI dəyərinə malikdirlər.`);
}



