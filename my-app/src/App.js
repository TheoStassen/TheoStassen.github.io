import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import items_json from "./checklist.json"
import "./App.css";

const items = [
  {
    id: -1,
    num_values:[
      {var:"Intubation_difficile", val:1},
      {var:"Diabétique", val:1},
    ],
    values:[
      {
        id: 1,
        name: "Intubation Difficile ? ",
        cond: {yes_id:[0], no_id:[0], num:[]},
        check : ["yes","no","?"],
        pre_check : {if:[{var:"Intubation_difficile",op:"=",val:1}],then:"yes"},
        values: [
          {
            id: 2,
            name: "A confirmer l'incubation difficile",
            cond: {yes_id:[0], no_id: [0], idk_id : [1], num:[]},
            check : ["yes","no"],
            values: []
          },
          {
            id: 3,
            name: "2ème Anesthésiste",
            cond: {yes_id:[1], no_id:[0], num:[]},
            check : ["yes","no"],
            values: []
          },
          {
            id: 4,
            name: "2ème Infirmière",
            cond: {yes_id:[1], no_id:[0], num:[]},
            check : ["yes","no"],
            values: []
          },
          {
            id: 5,
            name: "Matériel",
            cond: {yes_id:[1], no_id:[0], num:[]},
            check : [],
            values: [
              {
                id: 6,
                name: "Glidescope",
                cond: {yes_id:[1], no_id:[0], num:[]},
                check : ["yes","no"],
                values: []
              },
              {
                id: 7,
                name: "Laryngoscope",
                cond: {yes_id:[1], no_id:[0], num:[]},
                check : ["yes","no"],
                values: []
              },
              {
                id: 8,
                name: "Set Trachéo",
                cond: {yes_id:[1], no_id:[0], num:[]},
                check : ["yes","no"],
                values: []
              },
            ]
          },
          {
            id: 9,
            name: "Protocole",
            cond: {yes_id:[1], no_id:[0], num:[]},
            check : ["yes","no"],
            values: []
          },
        ]
      },
      {
        id: 10,
        name: "Est-elle susceptible d'être enceinte ?",
        comment: "(Les données patient nous indiquent que la patiente est âgée entre 15 et 60 ans)",
        cond: {yes_id:[0], no_id:[0], num:[]},
        check : ["yes","no"],
        values: [
          {
            id: 11,
            name: "Arrêt des rêgles depuis ?",
            cond: {yes_id:[10], no_id:[0], num:[]},
            check : ["text"],
            values: []
          },
          {
            id: 12,
            name: "Test disponible ?",
            cond: {yes_id:[10], no_id:[0], num:[]},
            check : ["yes","no"],
            values: [
              {
                id: 13,
                name: "Négatif ?",
                cond: {yes_id:[12], no_id:[0], num:[]},
                check : ["yes", "no"],
                values: []
              },
              {
                id: 14,
                name: "Faire test maintenant ?",
                cond: {yes_id:[0], no_id:[12], num:[]},
                check : ["yes", "no"],
                values: []
              },
              {
                id: 15,
                name: "Postposer l'intervention ?",
                cond: {yes_id:[0], no_id:[12], num:[]},
                check : ["yes", "no"],
                values: []
              },
            ]
          },
        ]
      },
      {
        id: 16,
        name: "Le patient est-il diabétique ?",
        cond: {yes_id:[0], no_id:[0], num:[]},
        check : ["yes","no"],
        pre_check : {if:[{var:"Diabétique",op:"=",val:1}],then:"yes"},
        values: [
          {
            id: 17,
            name: "Traitement Oral ?",
            cond: {yes_id:[16], no_id:[0], num:[]},
            check : ["yes", "no"],
            values: [
              {
                id: 18,
                name: "Arrêt des médicaments ?",
                cond: {yes_id:[17], no_id:[0], num:[]},
                check : ["yes", "no"],
                values: []
              }
            ]
          },
          {
            id: 19,
            name: "Traitement par piqure à insuline ?",
            cond: {yes_id:[16], no_id:[17], num:[]},
            check : ["yes", "no"],
            values: [
              {
                id: 20,
                name: "Dernière piqure le ? ",
                cond : {yes_id:[19], no_id:[0], num:[]},
                check: ["text"],
                values: []
              }
            ]
          },
        ]
      }
    ]
  },
];
const nbsc_str = String.fromCharCode(160)

function CsvGenerator(dataArray, fileName, separator, addQuotes) {
    this.dataArray = dataArray;
    this.fileName = fileName;
    this.separator = separator || ',';
    this.addQuotes = !!addQuotes;

    if (this.addQuotes) {
        this.separator = '"' + this.separator + '"';
    }

    this.getDownloadLink = function () {
        var separator = this.separator;
        var addQuotes = this.addQuotes;

        var rows = this.dataArray.map(function (row) {
            var rowData = row.join(separator);

            if (rowData.length && addQuotes) {
                return '"' + rowData + '"';
            }

            return rowData;
        });

        var type = 'data:text/csv;charset=utf-8';
        var data = rows.join('\n');

        if (typeof btoa === 'function') {
            type += ';base64';
            data = btoa(data);
        } else {
            data = encodeURIComponent(data);
        }

        return this.downloadLink = this.downloadLink || type + ',' + data;
    };

    this.getLinkElement = function (linkText) {
        var downloadLink = this.getDownloadLink();
        var fileName = this.fileName;
        this.linkElement = this.linkElement || (function() {
            var a = document.createElement('a');
            a.innerHTML = linkText || '';
            a.href = downloadLink;
            a.download = fileName;
            return a;
        }());
        return this.linkElement;
    };

    // call with removeAfterDownload = true if you want the link to be removed after downloading
    this.download = function (removeAfterDownload) {
        var linkElement = this.getLinkElement();
        linkElement.style.display = 'none';
        document.body.appendChild(linkElement);
        linkElement.click();
        if (removeAfterDownload) {
            document.body.removeChild(linkElement);
        }
    };
}

const simple_operation = (val1, string_op, val2) => {

  switch (string_op) {
    case ">" : return val1 > val2;
    case "<" : return val1 < val2;
    case "=" : return val1 === val2 ;
    default: return true;
  }
}

export default function App() {

  let [result, setResult] = useState({})
  //id:, name:, answer:

  function import_csv_result () {
    let result_table = [["id", "name", "answer"]]
    for (const [key, value] of Object.entries(result)){
      result_table.push([key, value.name, value.answer])
    }
    console.log(result_table)
    let csvGenerator = new CsvGenerator(result_table, 'my_csv.csv');
    csvGenerator.download(true);
  }

  // const items = items_json.data

  let navbar = (
    <nav className="navbar navbar-expand-lg navbar-light border-bottom border-light shadow-sm mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><text className="text-custom text-title">SLS</text></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#"><text className="text-custom">Page d'accueil</text></a>
            <a className="nav-link" href="#"><text className="text-custom">Liste des checklists disponibles</text></a>
            <a className="nav-link" href="#"><text className="text-custom" onClick={import_csv_result}>Importer la checklist</text></a>
            <a className="nav-link disabled"><text className="text-custom">A propos</text></a>
          </div>
        </div>
      </div>
    </nav>
  );
  const [isYesDict, setIsYesDict] = useState({0: true, 1: false, 2: false, 3: false, 4: false, 5: false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false});
  const [isIdkDict, setIsIdkDict] = useState({0: true, 1: false, 2: false, 3: false, 4: false, 5: false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false});
  const [isNoDict, setIsNoDict] = useState({0: true, 1: false, 2: false, 3: false, 4: false, 5: false, 6:false, 7:false, 8:false, 9:false, 10:false, 11:false});

  let num_values = items.find(elm => elm.id === -1).num_values
  let numDict = {}
  num_values.forEach(function(elm) {numDict[elm.var] = elm.val})

  const items_ = items[0].values

  const dicts = [isYesDict, setIsYesDict,isNoDict, setIsNoDict, isIdkDict, setIsIdkDict, numDict, result, setResult, ]


  return (
    <div className="bg-color-custom">
      {navbar}
      {items_.map(i => (
        <ListItem init_items={items[0]} item={i} dicts={dicts} key={i.id} />
      ))}
      {/*<div className="position-relative bottom-0 end-0 m-2">*/}
      {/*  <button type="button" onClick={import_csv_result} className="btn btn-secondary btn-circle btn-sm shadow"><text className="text-custom">CSV</text></button>*/}
      {/*</div>*/}
    </div>

  );
}

function clean_children_rec(init_item, item, id, setIsYesDict, setIsNoDict, setIsIdkDict, result, yes_no_idk) {
  console.log(item, id, yes_no_idk)
  let is_remove = false
  if(item.cond){
    if (yes_no_idk === 1 ) {
      if (item.cond.yes_id.includes(id)) {
        setIsYesDict(PrevIsYesDict => ({...PrevIsYesDict, [item.id]: false}))
        setIsNoDict(PrevIsNoDict => ({...PrevIsNoDict, [item.id]: false}))
        setIsIdkDict(PrevIsIdkDict => ({...PrevIsIdkDict, [item.id]: false}))
        delete result[item.id]
        is_remove = true
      }
    }
    else if( yes_no_idk === 2 ) {
      if (item.cond.no_id.includes(id)) {
        setIsYesDict(PrevIsYesDict => ({...PrevIsYesDict, [item.id]: false}))
        setIsNoDict(PrevIsNoDict => ({...PrevIsNoDict, [item.id]: false}))
        setIsIdkDict(PrevIsIdkDict => ({...PrevIsIdkDict, [item.id]: false}))
        delete result[item.id]
        is_remove = true
      }
    }
    else if( yes_no_idk === 3 ) {
      if (item.cond.idk_id  && item.cond.idk_id.includes(id)) {
        setIsYesDict(PrevIsYesDict => ({...PrevIsYesDict, [item.id]: false}))
        setIsNoDict(PrevIsNoDict => ({...PrevIsNoDict, [item.id]: false}))
        setIsIdkDict(PrevIsIdkDict => ({...PrevIsIdkDict, [item.id]: false}))
        delete result[item.id]
        is_remove = true
      }
    }
  }
  console.log(item.values)
  if (item.values && item.values.length){
    item.values.forEach( function (value) {
      clean_children_rec(init_item, value, id, setIsYesDict, setIsNoDict, setIsIdkDict, result, yes_no_idk) // Recursive call to remove the upper id
    })
  }
    if (id !== item.id && is_remove) {
        clean_children_rec(init_item, init_item, item.id, setIsYesDict, setIsNoDict, setIsIdkDict, result, yes_no_idk) // Recursive call to remove the current id also
  }
}


function ListItem({init_items, item, dicts }) {

  console.log(item)

  let [isYesDict, setIsYesDict,isNoDict, setIsNoDict, isIdkDict, setIsIdkDict, numDict, result, setResult] = dicts


  const handleOnChangeYes = () => {
    const isYes = !isYesDict[item.id]
    console.log("handle yes enter", isYes)
    if (isYes){
      result[item.id]={name:item.name,answer:"Oui"}
      clean_children_rec(init_items, init_items, item.id,setIsYesDict,setIsNoDict, setIsIdkDict, result,2)
      clean_children_rec(init_items, init_items, item.id,setIsYesDict,setIsNoDict, setIsIdkDict, result,3)
      setResult(result)
    }
    else{
      delete result[item.id]
      console.log("handle yes delete")
      clean_children_rec(init_items, init_items, item.id, setIsYesDict, setIsNoDict, setIsIdkDict, result,1)
      setResult(result)
    }
    setIsYesDict( PrevIsYesDict => ({...PrevIsYesDict, [item.id]:isYes}));
    setIsNoDict( PrevIsNoDict => ({...PrevIsNoDict, [item.id]:false}));
    setIsIdkDict( PrevIsIdkDict => ({...PrevIsIdkDict, [item.id]:false}));
  };

  const handleOnChangeNo = () => {
    const isNo = !isNoDict[item.id]
    if (isNo){
      result[item.id]={name:item.name,answer:"Non"}
      clean_children_rec(init_items, init_items, item.id,setIsYesDict,setIsNoDict, setIsIdkDict, result, 1)
      clean_children_rec(init_items, init_items, item.id,setIsYesDict,setIsNoDict, setIsIdkDict, result, 3)
      setResult(result)
    }
    else{
      delete result[item.id]
      clean_children_rec(init_items, init_items, item.id, setIsYesDict, setIsNoDict, setIsIdkDict, result, 2)
      setResult(result)
    }
    setIsNoDict( PrevIsNoDict => ({...PrevIsNoDict, [item.id]:isNo}));
    setIsYesDict( PrevIsYesDict => ({...PrevIsYesDict, [item.id]:false}));
    setIsIdkDict( PrevIsIdkDict => ({...PrevIsIdkDict, [item.id]:false}));
  };

  const handleOnChangeIdk = () => {
    const isIdk = !isIdkDict[item.id]
    if (isIdk){
      result[item.id]={name:item.name,answer:"?"}
      clean_children_rec(init_items, init_items, item.id,setIsYesDict,setIsNoDict, setIsIdkDict, result, 1)
      clean_children_rec(init_items, init_items, item.id,setIsYesDict,setIsNoDict, setIsIdkDict, result, 2)
      setResult(result)
    }
    else{
      delete result[item.id]
      clean_children_rec(init_items, init_items, item.id, setIsYesDict, setIsNoDict, setIsIdkDict, result, 3)
      setResult(result)
    }
    setIsNoDict( PrevIsNoDict => ({...PrevIsNoDict, [item.id]:false}));
    setIsYesDict( PrevIsYesDict => ({...PrevIsYesDict, [item.id]:false}));
    setIsIdkDict( PrevIsIdkDict => ({...PrevIsIdkDict, [item.id]:isIdk}));
  };

  const handleOnChangeText = (event) => {
    const input_text = event.target.value;
    result[item.id]={name:item.name,answer:input_text}
    setResult(result)
  };



  console.log(result)
  console.log(isYesDict)
  console.log(isNoDict)

  if(item.pre_check){
    if (item.pre_check.if.every(function (item){
      return simple_operation(numDict[item.var],item.op, item.val);})){
      switch (item.pre_check.then){
        case "yes": delete item.pre_check; handleOnChangeYes(); break;
        case "no": delete item.pre_check; handleOnChangeNo(); break;
        case "idk": delete item.pre_check; handleOnChangeIdk(); break;
        default : break;
      }
    }
  }

  let children = null;
  let values = null;
  if (item.values)
    values = item.values.filter( item=>
      item.cond.yes_id.every(
        function(elm) {return isYesDict[elm];}
      ) &&
      item.cond.no_id.every(
        function(elm) {return isNoDict[elm];}
      ) &&
      ( item.cond.idk_id === undefined || item.cond.idk_id.every(
        function(elm) {return isIdkDict[elm];}
      )) &&
      item.cond.num.every(
        function(elm) {return simple_operation(numDict[elm.var],elm.op, elm.val) }
      ) &&
      true
    )

  if (values && values.length) {
    children = (
      <ul className="mb-0">
        {values.map(i => (
          <ListItem init_items={init_items} item={i} dicts={dicts} key={i.id} />
        ))}
      </ul>
    );
  }

  return (
    <div className="container m-0 mt-3 p-0 mx-auto">
      <div className="row align-items-center m-0 p-0">
        <div className="col-sm-1 m-0 p-0 w-auto">
          <div className="card card-grey text-center w-100 shadow-sm" >
            <div className="card-body">
              <text>{item.id}</text>
            </div>
          </div>
        </div>
        <div className="col m-0 p-0 ">
          {item.cond.num.length ? (
          <div className="alert alert-primary m-0 mt-0 align- shadow-sm" role="alert">
            <p className="mb-0"><text className="text-custom">Important: &nbsp;{item.cond.num.map(i => i.var + i.op + i.val + nbsc_str + nbsc_str)}.</text> </p>
            <p className="mb-0"><text className="text-custom">Veuillez répondre cette question supplémentaire </text></p>
          </div>
          ) : null
          }
          {item.comment ? (
          <div className="alert alert-info m-0 mt-0 align- shadow-sm" role="alert">
            <p className="mb-0"> <text className="text-custom">{item.comment}</text> </p>
          </div>
          ) : null
          }
          <div className="card w-100 shadow-sm" >
            <div className="card-body">
              <text className="text-custom">{item.name}</text>
            </div>
          </div>
        </div>

        {item.check.length ? (
        <div className="col-md-auto">
          <div className="input-group ">
            {item.check.includes("yes") ? (
            <div className="input-group-prepend ">
              <div className="input-group-text shadow">
                <text className="text-custom">
                  <input type="checkbox"
                         aria-label="Yes Checkbox"
                         checked={isYesDict[item.id]}
                         onChange={handleOnChangeYes}
                  />
                    &nbsp;Oui
                </text>
              </div>
            </div>
            ) : null }
            {item.check.includes("no") ? (
            <div className="input-group-prepend">
              <div className="input-group-text shadow">
                <text className="text-custom">
                  <input type="checkbox"
                         aria-label="No Checkbox"
                         checked={isNoDict[item.id]}
                         onChange={handleOnChangeNo}
                  />
                    &nbsp;Non
                </text>
              </div>
            </div>
            ) : null }
            {item.check.includes("?") ? (
            <div className="input-group-prepend">
              <div className="input-group-text shadow">
                <text className="text-custom">
                  <input type="checkbox"
                         aria-label="I dont Know Checkbox"
                         checked={isIdkDict[item.id]}
                         onChange={handleOnChangeIdk}
                  />
                    &nbsp;&nbsp;?
                </text>
              </div>
            </div>
            ) : null }
            {item.check.includes("text") ? (
            <div className="input-group-prepend">
              <div className="input-group-text">
                  <input type = "text"
                         aria-label="text input"
                         onChange={handleOnChangeText}
                  />
              </div>
            </div>
            ) : null }
          </div>
        </div>
        ) : <div className="col-sm-8"> {null} </div>}
      </div>
      {children}
    </div>
  );
}

