document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    e.preventDefault();
    searchWord();
  }
};

async function searchWord() {
  const word = document.getElementById("dictWord").value;
  if (!word) {
    return alert("Word is required !!!");
  }
  try {
    const descriptions = await fetchWordFromDictionary(word);
    console.log(descriptions);
    renderDefinitions(descriptions);
  } catch (e) {
    console.error(e);
    alert("Sorry Something Went Wrong!!!");
  }
}

async function fetchWordFromDictionary(word) {
  const apiURL = `http://localhost:5000/api/v1/dictionary?word=${word}`;
  const result = await fetch(apiURL);
  const response = await result.json();
  const { data: definitions } = response;
  return definitions;
}

function renderDefinitions(definitions) {
  const definitionsElement = document.getElementById("definitions");
  if (definitionsElement) {
    definitionsElement.remove();
  }
  const parentDiv = document.createElement("div");
  parentDiv.id = "definitions";
  if (definitions.length === 0) {
    const noResults = document.createElement("h2");
    noResults.innerText = "Sorry No Results Found";
    parentDiv.appendChild(noResults);
  }
  definitions.forEach((def, index) => {
    const num = index + 1;
    const containerDiv = document.createElement("div");
    containerDiv.id = "container";
    const divWordType = document.createElement("div");
    const wordType = document.createElement("span");
    wordType.innerText = num + "(" + def.wordtype + ") ::";
    divWordType.appendChild(wordType);
    const divDef = document.createElement("div");
    const definition = document.createElement("p");
    definition.innerText = def.definition;
    divDef.appendChild(definition);
    containerDiv.appendChild(divWordType);
    containerDiv.appendChild(divDef);
    parentDiv.appendChild(containerDiv);
  });
  const mainElement = document.getElementsByTagName("main")[0];
  mainElement.append(parentDiv);
}
