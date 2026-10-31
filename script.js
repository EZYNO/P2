/*Pseudo code
1-recuperer le tableau

2-identifier la moyenne des notes
a-claculer la somme des note
b-diviser la somme par le nomblre totale de note
c-retourner le reultat

3-classer les note du plus grand au plus petit


4- identifier la meilleure note
a-recuperer le tableau classé de l'etape 3
b-retourner le premier element du tableau (la meilleure note) 

5- identifier la deuxieme meilleure note(suite logique de l'etape precedente)
a-recuperer le tableau classer a l'etape 3
b-retourner le second element du tableau(deuxieme meilleure note)

6-identifier la plus mauvaise note (suite logique des etape precedente)
a-recuperer le tebleau classer a l'etape 3
b-retourner le dernier element du tableau(plus mauvaise note)

7- identifier le nombre de note inferieur a 10
a-recuperer le tableau initiale
b-initialiser un compeur
c-parcourir le tableau 
   pour chaque element si 
                      element < 10 on a compeur ++
d- retourner compteur                    

8- identifier le nombre de note superieur ou egale a 10
a-recuperer le tableau initiale
b-initialiser un compeur
c-parcourir le tableau 
   pour chaque element si 
                      element >= 10 on a compeur ++
d- retourner compteur
9-identifier le pourcentage de reuissite
 a-creer un tableau contenant uniquement les notes >= 10
 b-identifier le nombre de note du tableau creer(nbrNTC)
 c- identifier le nombre de note total contenu dans le taleau initial(nbrNTTI)
 d- multiplier le nbrNTC par 100 puis diviser le resulta obtenu par nbrNTTI
e- retourner le resultat
*/ 

const calculerMoyenne = (array) => {
   const somme = array.reduce((acc, el) => acc + el, 0);
   const nbrTdeNotes = array.length
const moyenne =  somme / nbrTdeNotes

return moyenne;
};

const classementDesNotes = (array)=>{
   const classement = [...array].sort((a, b) => b - a);
   const meilleurNote = classement[0];
   const deuxiemeMeilleurNote = classement[1];
   const plusMauvaiseNote = classement[classement.length - 1];
   return {
classement,
meilleurNote,
deuxiemeMeilleurNote,
plusMauvaiseNote,
   } ;  
};

const analyserReussite = (array)=> {
   let notePlusDeDix = 0;
   let noteMoinsDeDix = 0;
   const  nbrTdeNotes = array.length;
   array.forEach(element => {
      element >= 10 ? notePlusDeDix ++ : noteMoinsDeDix ++ ;
   });
   const pourcentageReussite =Math.round((notePlusDeDix * 100) / nbrTdeNotes);

   return{
notePlusDeDix,
noteMoinsDeDix,
pourcentageReussite, 
   } 
}

function analyseDeNote(params){
  const moyenneCalculer = calculerMoyenne(params);
  const classementAnalyser = classementDesNotes(params);
  const reussiteAnalyser = analyserReussite(params);

  return{
moyenneCalculer,
classement: classementAnalyser.classement,
meilleurNote:classementAnalyser.meilleurNote,
deuxiemeMeilleurNote:classementAnalyser.deuxiemeMeilleurNote,
plusMauvaiseNote:classementAnalyser.plusMauvaiseNote,
notePlusDeDix:reussiteAnalyser.notePlusDeDix,
noteMoinsDeDix:reussiteAnalyser.noteMoinsDeDix,
pourcentageReussit:reussiteAnalyser.pourcentageReussite,

  }
}

const notes = [12, 7, 19, 0, 11, 8, 4, 3, 20, 14, 13, 10]
console.log(analyseDeNote(notes))