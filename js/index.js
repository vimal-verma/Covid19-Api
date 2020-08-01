const India = document.querySelector('.india')
const main = document.querySelector('.main');
const table = document.createElement('table')
main.appendChild(table);
const tr = document.createElement('tr')
table.appendChild(tr);
const th1 = document.createElement('th');
const th2 = document.createElement('th')
const th3 = document.createElement('th')
const th4 = document.createElement('th')
const th5 = document.createElement('th')
const th6 = document.createElement('th')
tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tr.appendChild(th4);
tr.appendChild(th5);
tr.appendChild(th6);

th1.innerHTML='State'
th2.innerHTML='Active'
th3.innerHTML='Recovered'
th4.innerHTML='confirmed'
th5.innerHTML='deaths'
th6.innerHTML='lastupdatedtime'



const Bihar = document.querySelector('.bihar');
const table1 = document.createElement('table')
Bihar.appendChild(table1);
const tr1 = document.createElement('tr')
table1.appendChild(tr1);
const ths2 = document.createElement('th')
const ths3 = document.createElement('th')
const ths4 = document.createElement('th')
const ths5 = document.createElement('th')
const ths6 = document.createElement('th')
tr1.appendChild(ths2);
tr1.appendChild(ths3);
tr1.appendChild(ths4);
tr1.appendChild(ths5);
tr1.appendChild(ths6);
ths2.innerHTML='District'
ths3.innerHTML='Active'
ths4.innerHTML='Recovered'
ths5.innerHTML='confirmed'
ths6.innerHTML='deceased'


const url = 'https://api.covid19india.org/data.json';

fetch(url)
.then(Response => {return Response.json();})
.then(data => {
        console.log(data);
            const td2 = document.createElement('div');
            td2.classList.add('active');
            td2.style.backgroundColor = "#ff073a";
            const td3 = document.createElement('div');
            td3.classList.add('recovered');
            td3.style.backgroundColor = "#22803b";
            const td4 = document.createElement('div');
            td4.classList.add('confirmed');
            td4.style.backgroundColor = "#007bff";
            const td5 = document.createElement('div');
            td5.classList.add('deaths');
            td5.style.backgroundColor = "#551625";
            const td6 = document.createElement('div');
            td6.classList.add('lastupdatedtime');
            td6.style.backgroundColor = "#c79811";
            India.appendChild(td2);
            India.appendChild(td3);
            India.appendChild(td4);
            India.appendChild(td5);
            India.appendChild(td6);
            td2.innerHTML='<div>  <h1>Active</h1> <h1> '+data.statewise[0].active+'</h1></div>';
            td3.innerHTML='<div>  <h1>Recovered</h1> <h1> '+data.statewise[0].recovered+'</h1></div>';
            td4.innerHTML='<div>  <h1>Confirmed</h1> <h1> '+data.statewise[0].confirmed+'</h1></div>';
            td5.innerHTML='<div>  <h1>Deaths</h1> <h1> '+data.statewise[0].deaths+'</h1></div>';
            td6.innerHTML='<div>  <h3>Lastupdatedtime</h3> <h3> '+data.statewise[0].lastupdatedtime+'</h3></div>';
    });


    
    
   
    

fetch(url)
.then(Response => {return Response.json();})
.then(data => {
        console.log(data);
        for(var i=0;i<38;i++){
            const tr = document.createElement('tr');
            table.appendChild(tr);
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            const td6 = document.createElement('td');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            td1.innerHTML=data.statewise[i].state;
            td2.innerHTML=data.statewise[i].active;
            td3.innerHTML=data.statewise[i].recovered;
            td4.innerHTML=data.statewise[i].confirmed;
            td5.innerHTML=data.statewise[i].deaths;
            td6.innerHTML=data.statewise[i].lastupdatedtime;
        };
    });

const State_name =Bihar;
const urlState = 'https://api.covid19india.org/state_district_wise.json';
fetch(urlState)
.then(Response => {return Response.json();})
.then(
    data => {console.log(data);
    var dis = data.Bihar.districtData;
    for(const prop in dis){
        //console.log(prop)
        //console.log(dis[prop].active)
            const tr = document.createElement('tr');
            table1.appendChild(tr);
            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');
            const td4 = document.createElement('td');
            const td5 = document.createElement('td');
            //const td6 = document.createElement('td');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            //tr.appendChild(td6);
            td1.innerHTML=prop
            td2.innerHTML=dis[prop].active
            td3.innerHTML=dis[prop].recovered;
            td4.innerHTML=dis[prop].confirmed;
            td5.innerHTML=dis[prop].deceased;
            //td6.innerHTML=dis[prop].lastupdatedtime;
        }
    })

// const travel = 'https://api.covid19india.org/travel_history.json';
// fetch(travel)
// .then(Response => {return Response.json();})
// .then(data => {console.log(data);})

