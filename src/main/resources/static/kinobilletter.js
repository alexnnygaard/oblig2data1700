function validerFornavn(Fornavn){
    let regexp = /^[a-zA-ZæøåÆØÅ .\-]{2,20}$/;
    let ok = regexp.test(Fornavn);
    if(!ok) {
        $("#feilFornavn").html("Fornavn må bestå av 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilFornavn").html("");
        return true;
    }
}



function validerAlternativer(Alternativ){
    console.log(Alternativ)
    if (Alternativ !== "Velg film her") {
        $("#feilAlternativ").html("");
        return true;
    } else {
        $("#feilAlternativ").html("Velg en av filmene");
        return false;
    }
}
function validerAntall(Antall){
    let regexp = /^[0-9]{1,2}$/;
    let ok = regexp.test(Antall);
    if(!ok) {
        $("#feilAntall").html("Skriv inn antall billetter, mellom 1-99");
        return false;
    }
    else {
        $("#feilAntall").html("");
        return true;
    }
}
function validerEtternavn(Etternavn){
    let regexp = /^[a-zA-ZæøåÆØÅ .\-]{2,20}$/;
    let ok = regexp.test(Etternavn);
    if(!ok) {
        $("#feilEtternavn").html("Skriv etternavn, mellom 2 til 20 bokstaver");
        return false;
    }
    else {
        $("#feilEtternavn").html("");
        return true;
    }
}

function validerTelefonnr(Telefonnr){
    let regexp = /^[0-9. \-]{8}$/;
    let ok = regexp.test(Telefonnr);
    if(!ok) {
        $("#feilTelefonnr").html("Ugyldig telefonnr, må bestå av åtte siffer");
        return false;
    }
    else {
        $("#feilTelefonnr").html("");
        return true;
    }
}

function validerEpost(Epost){
    let regexp = /^[a-zA-ZæøåÆØÅ0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let ok = regexp.test(Epost)
    if(!ok) {
        $("#feilEpost").html("Ugyldig epostadresse");
        return false;
    }
    else {
        $("#feilEpost").html("");
        return true;
    }
}
function ValiderOgKjopbillett() {
    let AlternativerOK = validerAlternativer($("#Alternativer").val());
    let AntallBilletterOK = validerAntall($("#Antall").val());
    let FornavnOK = validerFornavn($("#Fornavn").val());
    let EtternavnOK = validerEtternavn($("#Etternavn").val());
    let TelefonnrOK = validerTelefonnr($("#Telefonnr").val());
    let EpostOK = validerEpost($("#Epost").val());


    if (AlternativerOK && AntallBilletterOK && FornavnOK && EtternavnOK && TelefonnrOK && EpostOK) {
        Addrow();
    }
}

let billetter  = []

class Billett{
    constructor(film, antall, fornavn, etternavn, telefonnr, epost){
        this.film=film
        this.antall=antall
        this.fornavn=fornavn
        this.etternavn=etternavn
        this.telefonnr=telefonnr
        this.epost=epost
    }
}

let n = 1;
let x = 0;

function Addrow(){
    let Addrow = document.getElementById('Vis-Billett');
    let NyRow = Addrow.insertRow(n);

    const film = document.getElementById("Alternativer").value;
    const antall = document.getElementById("Antall").value;
    const fornavn = document.getElementById("Fornavn").value;
    const etternavn= document.getElementById("Etternavn").value;
    const telefonnr= document.getElementById("Telefonnr").value;
    const epost= document.getElementById("Epost").value;

    const billett=new Billett(film,antall,fornavn,etternavn,telefonnr,epost)
    billetter.push(billett)


    let cel1 = NyRow.insertCell(0);
    let cel2=NyRow.insertCell(1);
    let cel3=NyRow.insertCell(2);
    let cel4=NyRow.insertCell(3);
    let cel5=NyRow.insertCell(4);
    let cel6=NyRow.insertCell(5);

    cel1.innerHTML=billett.film;
    cel2.innerHTML=billett.antall;
    cel3.innerHTML=billett.fornavn;
    cel4.innerHTML=billett.etternavn;
    cel5.innerHTML=billett.telefonnr;
    cel6.innerHTML=billett.epost;

    n++;
    x++;
}

function SlettBillett(){
    let Addrow = document.getElementById('Vis-Billett');
    for(i = x; i > 0; i--){
        Addrow.deleteRow(i)
    }
    billetter=[];
    n=1;
    x=0;
}