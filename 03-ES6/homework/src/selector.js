var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  
  if(matchFunc(startEl)) resultSet.push(startEl);
  for(let i=0;i<startEl.children.length;i++){
    let resultado = traverseDomAndCollectElements(matchFunc,startEl.children[i]);
    resultSet = [...resultSet,...resultado];
  }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {   
  // tu código aquí
  
  for(let i in selector){
    if(selector[0] === "#" ){
      return "id"
    }
    if(selector[0] === "." ){
      return "class"
    }
    if(selector[i] === "." && selector[0] !== "." ){
      return "tag.class"
    }
    
  }
  return "tag";

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {

  var selectorType = selectorTypeMatcher(selector);

  var matchFunction;

  if (selectorType === "id") { 
   matchFunction = (elemento) => "#" + elemento.id === selector;
    // return elemento.id && elemento.id === selector.substr(1);           //Una forma de hacerlo
    
  } else if (selectorType === "class") {
    matchFunction = (elemento) => elemento.classList.contains(selector.substring(1));

  } else if (selectorType === "tag.class") {
    matchFunction = function(elemento){
      let [tag,clase] = selector.split(".");
      return elemento.tagName.toLowerCase() === tag.toLowerCase() && elemento.classList.contains(clase);
     }

  } else if (selectorType === "tag") {
    matchFunction = (elemento) => elemento.tagName && (elemento.tagName.toLowerCase() === selector.toLowerCase());
       
     
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
