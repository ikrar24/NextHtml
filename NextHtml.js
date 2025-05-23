let warnings = [];
function processParagraphs(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^p\d+$/.test(tag)) {
      const count = parseInt(tag.slice(1));
      const baseClass = node.getAttribute("class"); // No default
      const baseId = node.getAttribute("id"); // No default
      const textAttr = node.getAttribute("text") || "Null Paragraph";
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      let texts = [];
      try {
        texts = JSON.parse(textAttr);
      } catch {
        const warn = `Invalid text format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      const newParagraphs = [];
      for (let i = 0; i < count; i++) {
        const p = document.createElement("p");
        if (devClass[i]) {
          p.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          p.className = baseClass + [i + 1]; // Use input class only if no changeclass
        }

        if (devIds[i]) {
          p.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          p.id = baseId + [i + 1];
        }

        if (!texts[i]) {
          const warn = `❗ Text is missing at index ${i + 1} in <${tag}> element. Please define text.`;
          warnings.push(warn);
        }
        p.innerHTML = texts[i] || `Paragraph ${i + 1}`;
        newParagraphs.push(p);
      }
      node.replaceWith(...newParagraphs);
    }
  });
}

function processLi(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^li\d+$/.test(tag)) {
      const count = parseInt(tag.slice(2));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const textAttr = node.getAttribute("text") || "Undefined listing";
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");
      const changeTitleAttr = node.getAttribute("changetitle");

      let texts = [];
      try {
        if (textAttr) texts = JSON.parse(textAttr);
      } catch {
        const warn = `Invalid text format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let titles = [];
      try {
        if (changeTitleAttr) titles = JSON.parse(changeTitleAttr);
      } catch {
        const warn = `Invalid changetitle format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      const newLi = [];
      for (let i = 0; i < count; i++) {
        const li = document.createElement("li");
        if (devClass[i]) {
          li.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          li.className = baseClass + [i + 1];
        }
        if (devIds[i]) {
          li.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          li.id = baseId + [i + 1];
        }
        if (!texts[i]) {
          const warn = `❗ Text is missing at index ${i + 1} in <${tag}> element. Please define text`;
          console.warn(warn);
          warnings.push(warn);
        }
        li.innerHTML = texts[i] || `li ${i + 1}`;
        if (titles[i]) li.title = titles[i];
        newLi.push(li);
      }
      node.replaceWith(...newLi);
    }
  });
}

function processA(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^a\d+$/.test(tag)) {
      const count = parseInt(tag.slice(1));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const textAttr = node.getAttribute("text") || "Undefined a";
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");
      const changeTitleAttr = node.getAttribute("changetitle");
      const changeHrefAttr = node.getAttribute("changehref");

      let texts = [];
      try {
        if (textAttr) texts = JSON.parse(textAttr);
      } catch {
        const warn = `Invalid text format in ${tag}`;
        warnings.push(warn);
      }

      let titles = [];
      try {
        if (changeTitleAttr) titles = JSON.parse(changeTitleAttr);
      } catch {
        const warn = `Invalid changetitle format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let hrefs = [];
      try {
        if (changeHrefAttr) hrefs = JSON.parse(changeHrefAttr);
      } catch {
        const warn = `Invalid changehref format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      const newA = [];
      for (let i = 0; i < count; i++) {
        const a = document.createElement("a");
        if (devClass[i]) {
          a.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          a.className = baseClass + [i + 1];
        }
        if (devIds[i]) {
          a.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          a.id = baseId + [i + 1];
        }
        if (!texts[i]) {
          const warn = `❗ Text is missing at index ${i + 1} in <${tag}> element. Please define text.`;
          console.warn(warn);
          warnings.push(warn);
        }
        a.innerHTML = texts[i] || `undefined ${i + 1}`;
        if (titles[i]) a.title = titles[i];
        if (hrefs[i]) a.href = hrefs[i];
        newA.push(a);
      }
      node.replaceWith(...newA);
    }
  });
}

// Function for <section>
function processSection(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^section\d+$/.test(tag)) {
      const count = parseInt(tag.slice(7));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("section");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerSection = document.createElement("section");
        if (devClass[i]) {
          innerSection.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerSection.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerSection.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerSection.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerSection);
        currentParent = innerSection;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <div>
function processDiv(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^div\d+$/.test(tag)) {
      const count = parseInt(tag.slice(3));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("div");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerDiv = document.createElement("div");
        if (devClass[i]) {
          innerDiv.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerDiv.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerDiv.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerDiv.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerDiv);
        currentParent = innerDiv;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <article>
function processArticle(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^article\d+$/.test(tag)) {
      const count = parseInt(tag.slice(7));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("article");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerArticle = document.createElement("article");
        if (devClass[i]) {
          innerArticle.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerArticle.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerArticle.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerArticle.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerArticle);
        currentParent = innerArticle;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <nav>
function processNav(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^nav\d+$/.test(tag)) {
      const count = parseInt(tag.slice(3));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("nav");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerNav = document.createElement("nav");
        if (devClass[i]) {
          innerNav.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerNav.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerNav.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerNav.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerNav);
        currentParent = innerNav;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <ul>
function processUl(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^ul\d+$/.test(tag)) {
      const count = parseInt(tag.slice(2));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("ul");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerUl = document.createElement("ul");
        if (devClass[i]) {
          innerUl.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerUl.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerUl.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerUl.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerUl);
        currentParent = innerUl;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <header>
function processHeader(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^header\d+$/.test(tag)) {
      const count = parseInt(tag.slice(6));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");
      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("header");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerHeader = document.createElement("header");
        if (devClass[i]) {
          innerHeader.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerHeader.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerHeader.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerHeader.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerHeader);
        currentParent = innerHeader;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <footer>
function processFooter(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^footer\d+$/.test(tag)) {
      const count = parseInt(tag.slice(6));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("footer");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerFooter = document.createElement("footer");
        if (devClass[i]) {
          innerFooter.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerFooter.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerFooter.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerFooter.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerFooter);
        currentParent = innerFooter;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <main>
function processMain(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^main\d+$/.test(tag)) {
      const count = parseInt(tag.slice(4));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("main");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerMain = document.createElement("main");
        if (devClass[i]) {
          innerMain.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerMain.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerMain.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerMain.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerMain);
        currentParent = innerMain;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

// Function for <aside>
function processAside(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^aside\d+$/.test(tag)) {
      const count = parseInt(tag.slice(5));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      const text = node.getAttribute("text");

      if (text) {
        warnings.push(
          `Heads up: <${tag}> is a container element and shouldn't include text directly via the "text" attribute, as it may impact SEO. Please remove it.`
        );
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      let currentParent = document.createElement("aside");
      if (devClass[0]) {
        currentParent.className = devClass[0];
      } else if (baseClass && !changeClassAttr) {
        currentParent.className = baseClass + 1;
      }
      if (devIds[0]) {
        currentParent.id = devIds[0];
      } else if (baseId && !changeIdAttr) {
        currentParent.id = baseId + 1;
      }

      let rootSection = currentParent;
      for (let i = 1; i < count; i++) {
        const innerAside = document.createElement("aside");
        if (devClass[i]) {
          innerAside.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          innerAside.className = baseClass + (i + 1);
        }
        if (devIds[i]) {
          innerAside.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          innerAside.id = baseId + (i + 1);
        }
        currentParent.appendChild(innerAside);
        currentParent = innerAside;
      }

      while (node.firstChild) {
        currentParent.appendChild(node.firstChild);
      }
      node.replaceWith(rootSection);
    }
  });
}

function processImgs(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^img\d+$/.test(tag)) {
      const count = parseInt(tag.slice(3));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const srcAttr = node.getAttribute("src");
      const altAttr = node.getAttribute("alt");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");
      const changeLoadingAttr = node.getAttribute("changeloading");
      const defaultLoadingAttr = node.getAttribute("loading");

      let srcs = [];
      try {
        if (srcAttr) srcs = JSON.parse(srcAttr);
      } catch {
        const warn = `Invalid src format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let alts = [];
      try {
        if (altAttr) alts = JSON.parse(altAttr);
      } catch {
        const warn = `Invalid alt format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let loadings = [];
      try {
        if (changeLoadingAttr) loadings = JSON.parse(changeLoadingAttr);
      } catch {
        const warn = `Invalid changeloading format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      const newImgs = [];
      for (let i = 0; i < count; i++) {
        const img = document.createElement("img");
        img.src = srcs[i] || "";
        img.alt = alts[i] || `image${i + 1}`;
        if (devClass[i]) {
          img.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          img.className = baseClass + [i + 1];
        }
        if (devIds[i]) {
          img.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          img.id = baseId + [i + 1];
        }
        if (loadings[i]) {
          img.setAttribute("loading", loadings[i]);
        } else if (!changeLoadingAttr && defaultLoadingAttr) {
          img.setAttribute("loading", defaultLoadingAttr);
        }
        newImgs.push(img);
      }
      node.replaceWith(...newImgs);
    }
  });
}

function processAudio(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^audio\d+$/.test(tag)) {
      const count = parseInt(tag.slice(5));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const srcAttr = node.getAttribute("src");

      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      let srcs = [];
      try {
        if (srcAttr) srcs = JSON.parse(srcAttr);
      } catch {
        const warn = `Invalid src format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      const newAudio = [];
      for (let i = 0; i < count; i++) {
        const audio = document.createElement("audio");
        audio.src = srcs[i] || "";

        if (devClass[i]) {
          audio.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          audio.className = baseClass + [i + 1];
        }
        if (devIds[i]) {
          audio.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          audio.id = baseId + [i + 1];
        }
        newAudio.push(audio);
      }
      node.replaceWith(...newAudio);
    }
  });
}

function processVideo(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^video\d+$/.test(tag)) {
      const count = parseInt(tag.slice(5));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const srcAttr = node.getAttribute("src");
      const altAttr = node.getAttribute("alt");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");

      let srcs = [];
      try {
        if (srcAttr) srcs = JSON.parse(srcAttr);
      } catch {
        const warn = `Invalid src format in ${tag}`;
        console.warn(warn);
        warnings.push(warn);
      }

      let devClass = [];
      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `Invalid changeclass format in ${tag}`;
        warnings.push(warn);
      }

      let devIds = [];
      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `Invalid changeid format in ${tag}`;
        warnings.push(warn);
      }

      const newVideo = [];
      for (let i = 0; i < count; i++) {
        const video = document.createElement("video");
        video.src = srcs[i] || "";

        if (devClass[i]) {
          video.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          video.className = baseClass + [i + 1];
        }
        if (devIds[i]) {
          video.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          video.id = baseId + [i + 1];
        }

        newVideo.push(video);
      }
      node.replaceWith(...newVideo);
    }
  });
}

function processInputs(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^input\d+$/.test(tag)) {
      const count = parseInt(tag.slice(5));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeTypeAttr = node.getAttribute("changetype");
      const changeNameAttr = node.getAttribute("changename");
      const changeValueAttr = node.getAttribute("changevalue");
      const changePlaceholderAttr = node.getAttribute("changeplaceholder");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");
      const changeTitleAttr = node.getAttribute("changetitle");

      let types = [],
        names = [],
        values = [],
        placeholders = [],
        titles = [];
      let devClass = [],
        devIds = [];

      try {
        if (changeTypeAttr) types = JSON.parse(changeTypeAttr);
      } catch {
        const warn = `❗ Invalid changetype format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeNameAttr) names = JSON.parse(changeNameAttr);
      } catch {
        const warn = `❗ Invalid changename format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeValueAttr) values = JSON.parse(changeValueAttr);
      } catch {
        const warn = `❗ Invalid changevalue format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changePlaceholderAttr)
          placeholders = JSON.parse(changePlaceholderAttr);
      } catch {
        const warn = `❗ Invalid changeplaceholder format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeTitleAttr) titles = JSON.parse(changeTitleAttr);
      } catch {
        const warn = `❗ Invalid changetitle format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `❗ Invalid changeclass format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `❗ Invalid changeid format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      const newInputs = [];
      for (let i = 0; i < count; i++) {
        const input = document.createElement("input");
        input.type = types[i] || "text";
        if (names[i]) input.name = names[i];
        if (values[i]) input.value = values[i];
        if (placeholders[i]) input.placeholder = placeholders[i];
        if (titles[i]) input.title = titles[i];
        if (devClass[i]) {
          input.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          input.className = baseClass + [i + 1];
        }
        if (devIds[i]) {
          input.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          input.id = baseId + [i + 1];
        }
        newInputs.push(input);
      }
      node.replaceWith(...newInputs);
    }
  });
}

function processOption(document) {
  document.querySelectorAll("*").forEach((node) => {
    const tag = node.tagName.toLowerCase();
    if (/^option\d+$/.test(tag)) {
      const count = parseInt(tag.slice(6));
      const baseClass = node.getAttribute("class");
      const baseId = node.getAttribute("id");
      const changeTypeAttr = node.getAttribute("changetype");
      const changeNameAttr = node.getAttribute("changename");
      const changeValueAttr = node.getAttribute("changevalue");
      const changeClassAttr = node.getAttribute("changeclass");
      const changeIdAttr = node.getAttribute("changeid");
      const changeTitleAttr = node.getAttribute("changetitle");

      let types = [],
        names = [],
        values = [],
        titles = [];
      let devClass = [],
        devIds = [];

      try {
        if (changeTypeAttr) types = JSON.parse(changeTypeAttr);
      } catch {
        const warn = `❗ Invalid changetype format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeNameAttr) names = JSON.parse(changeNameAttr);
      } catch {
        const warn = `❗ Invalid changename format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeValueAttr) values = JSON.parse(changeValueAttr);
      } catch {
        const warn = `❗ Invalid changevalue format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeTitleAttr) titles = JSON.parse(changeTitleAttr);
      } catch {
        const warn = `❗ Invalid changetitle format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeClassAttr) devClass = JSON.parse(changeClassAttr);
      } catch {
        const warn = `❗ Invalid changeclass format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      try {
        if (changeIdAttr) devIds = JSON.parse(changeIdAttr);
      } catch {
        const warn = `❗ Invalid changeid format in <${tag}>`;
        console.warn(warn);
        warnings.push(warn);
      }

      const newOption = [];
      for (let i = 0; i < count; i++) {
        const option = document.createElement("option");
        option.type = types[i] || "text";
        if (names[i]) option.name = names[i];
        if (values[i]) option.value = values[i];

        if (titles[i]) option.title = titles[i];
        if (devClass[i]) {
          option.className = devClass[i];
        } else if (baseClass && !changeClassAttr) {
          option.className = baseClass + [i + 1];
        }
        if (devIds[i]) {
          option.id = devIds[i];
        } else if (baseId && !changeIdAttr) {
          option.id = baseId + [i + 1];
        }
        newOption.push(option);
      }
      node.replaceWith(...newOption);
    }
  });
}

// Run processors
processParagraphs(document);
processLi(document);
processA(document);
processSection(document);
processDiv(document);
processArticle(document);
processNav(document);
processUl(document);
processHeader(document);
processFooter(document);
processMain(document);
processAside(document);
processImgs(document);
processInputs(document);
processOption(document);
processAudio(document);
processVideo(document);

if (warnings.length) {
  warnings.map((i) => {
    console.warn(i);
  });
}
