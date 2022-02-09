async function addSource(){
   //------------------------------POST----------------------------------------------------
    let header = document.getElementById("baslik").value;
    let youtube = document.getElementById("youtube").value;
    let aciklama = document.getElementById("aciklama").value;
    let saat = document.getElementById("saat").value;
    let dakika = document.getElementById("dakika").value;
    let dil = document.getElementById("dil").value;
    let altyazi = document.getElementById("altyazi").value;
    let egitim = document.getElementById("egitim").value;
    const sourceData = {
        baslik: header,
        link: youtube,
        aciklama: aciklama,
        saat: saat,
        dakika: dakika,
        dil: dil,
        altyazi: altyazi,
        egitim: egitim
      };
      await fetch("https://learn2flow-36b39-default-rtdb.europe-west1.firebasedatabase.app/sources.json").then((response) => {return response.json()}).then(data => {
        const addedSourceData = [];
        for (const key in data){
          const Data = {
            id: key,
            ...data[key]
          }
          addedSourceData.push(Data);
        }
       })
    if(header && youtube && aciklama && saat && dakika && dil && altyazi && egitim) 
    {
       await fetch("https://learn2flow-36b39-default-rtdb.europe-west1.firebasedatabase.app/sources.json",{
          method: "POST",
          body: JSON.stringify(sourceData)
      }) 
    //------------------------------GET----------------------------------------------------
  fetch("https://learn2flow-36b39-default-rtdb.europe-west1.firebasedatabase.app/sources.json").then((response) => {return response.json()}).then(data => {
    const addedSourceData = [];
    for (const key in data){
      const Data = {
        id: key,
        ...data[key]
      }
      addedSourceData.push(Data);
    }
    const baslik = document.createElement("p");
    baslik.innerText = `${addedSourceData[addedSourceData.length-1].baslik} - ${addedSourceData[addedSourceData.length-1].egitim}`;
    document.getElementById("eklenenBaslik").appendChild(baslik)
   })
  }else{
    alert("Boş alan bıraktınız!")
  }
  }
  
    
        