async function e(){try{return(await axios.get("https://api.thecatapi.com/v1/breeds")).data}catch(e){throw e}}async function t(e){try{return(await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`)).data}catch(e){throw e}}const n=document.querySelector(".breed-select"),a=document.querySelector(".cat-info"),s=document.querySelector(".loader"),r=document.querySelector(".error");n.addEventListener("change",(async()=>{const e=n.value;s.style.display="block",a.style.display="none";try{const n=await t(e);a.innerHTML=`\n      <h2>${n[0].breeds[0].name}</h2>\n      <p><strong>Description:</strong> ${n[0].breeds[0].description}</p>\n      <p><strong>Temperament:</strong> ${n[0].breeds[0].temperament}</p>\n      <img src="${n[0].url}" alt="${n[0].breeds[0].name}" />\n    `,s.style.display="none",a.style.display="block"}catch(e){s.style.display="none",r.style.display="block"}})),window.addEventListener("load",(async()=>{try{(await e()).forEach((e=>{const t=document.createElement("option");t.value=e.id,t.textContent=e.name,n.appendChild(t)}))}catch(e){s.style.display="none",r.style.display="block"}}));
//# sourceMappingURL=index.b73323dd.js.map
