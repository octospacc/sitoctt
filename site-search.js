(function(){
// TODO fix ajax navigation to different-language page, doesn't currently load the index for the selected language
// TODO better perf
// TODO thumbnails?
// TODO highlight found word in text summary? we must handle generating summary client-side at different points of text for it to work

function init () {

var fuse;
var hideButton = document.getElementById("close-search-button");
var wrapper = document.getElementById("search-wrapper");
var modal = document.getElementById("search-modal");
var input = document.getElementById("search-query");
var output = document.getElementById("search-results");
var first = output.firstChild;
var last = output.lastChild;
var searchVisible = false;
var indexed = false;
var hasResults = false;

hideButton.addEventListener('click', hideSearch);
wrapper.addEventListener('click', hideSearch);
modal.addEventListener('click', (function(){
  event.stopPropagation();
  event.stopImmediatePropagation();
  return false;
}));
document.removeEventListener('keydown', window.SiteSearchOnKeyHandler);
window.SiteSearchOnKeyHandler = documentOnKeyDown;
document.addEventListener('keydown', SiteSearchOnKeyHandler);

// Update search on each keypress
input.onkeyup = function (event) {
  executeQuery(this.value);
};

function documentOnKeyDown (event) {
  if (event.key == "/") {
    if (!searchVisible) {
      event.preventDefault();
      displaySearch();
    } else {
      input.focus();
    }
  }

  if (event.key == "Escape") {
    hideSearch();
  }

  if (event.key == "ArrowDown") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        first.focus();
      } else if (document.activeElement == last) {
        last.focus();
      } else {
        document.activeElement.parentElement.nextSibling.firstElementChild.focus();
      }
    }
  }

  if (event.key == "ArrowUp") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        input.focus();
      } else if (document.activeElement == first) {
        input.focus();
      } else {
        document.activeElement.parentElement.previousSibling.firstElementChild.focus();
      }
    }
  }

  // Enter to get to results
  if (event.key == "Enter") {
    if (searchVisible && hasResults) {
      event.preventDefault();
      if (document.activeElement == input) {
        first.focus();
      } else {
        document.activeElement.click();
      }
    }
  }
}

function displaySearch() {
  if (!indexed) {
    buildIndex();
  }
  if (!searchVisible) {
    document.body.style.overflow = 'hidden';
    wrapper.style.visibility = 'visible';
    wrapper.style.display = '';
    input.focus();
    searchVisible = true;
  }
  input.value = document.querySelector('.SiteSearchForm > input').value;
}

function hideSearch() {
  if (searchVisible) {
    document.body.style.overflow = 'visible';
    wrapper.style.visibility = 'hidden';
    wrapper.style.display = 'none';
    input.value = "";
    document.querySelector('.SiteSearchForm > input').value = "";
    output.innerHTML = "";
    document.activeElement.blur();
    searchVisible = false;
  }
}

function buildIndex() {
  var options = {
    shouldSort: true,
    ignoreLocation: true,
    threshold: 0.0,
    includeMatches: true,
    keys: [
      { name: "title", weight: 0.8 },
      { name: "section", weight: 0.2 },
      { name: "summary", weight: 0.6 },
      { name: "content", weight: 0.4 },
    ],
  };
  fuse = new Fuse(SiteSearchIndex, options);
  indexed = true;
}

function executeQuery(term) {
  let results = fuse.search(term);
  let resultsHTML = "";

  if (results.length > 0) {
    results.forEach(function (value, key) {
      var title = value.item.externalUrl ? value.item.title + '<span class="text-xs ml-2 align-center cursor-default text-neutral-400 dark:text-neutral-500">'+value.item.externalUrl+'</span>' : value.item.title;
      var linkconfig;
      if (value.item.externalUrl) {
        linkconfig = 'target="_blank" rel="noopener" href="'+value.item.externalUrl+'"';
      } else {
        var dataUrl = wrapper.dataset.url;
        if (dataUrl.startsWith('../')) {
          linkconfig = 'href="'+('..' + '/..'.repeat(dataUrl.split('/').length - 3) + value.item.permalink)+'"';
        } else {
          linkconfig = 'href="'+value.item.permalink+'"';
        }
      }
      resultsHTML =
        resultsHTML +
        `<li class="mb-2">
          <a class="flex items-center ma3 no-underline px-3 py-2 mid-gray rounded-md appearance-none bg-neutral-100 dark:bg-neutral-700 focus:bg-primary-100 hover:bg-primary-100 dark:hover:bg-primary-900 dark:focus:bg-primary-900 focus:outline-dotted focus:outline-transparent focus:outline-2" 
          ${linkconfig} tabindex="0">
            <div class="grow">
              <div class="-mb-1 text-lg fw7 f4 font-bold">
                ${title}
              </div>
              <div class="text-sm fw3 text-neutral-500 dark:text-neutral-400">${value.item.section}<span class="px-2 text-primary-500">&middot;</span>${value.item.date? value.item.date : ""}</span></div>
              <div class="text-sm italic">${value.item.summary}</div>
            </div>
            <div class="ml-2 ltr:block rtl:hidden text-neutral-500">&rarr;</div>
            <!--<div class="mr-2 ltr:hidden rtl:block text-neutral-500">&larr;</div>-->
          </a>
        </li>`;
    });
    hasResults = true;
  } else {
    resultsHTML = "";
    hasResults = false;
  }

  output.innerHTML = resultsHTML;
  Array.from(output.querySelectorAll('a')).forEach(function(anchorEl){
    anchorEl.addEventListener('click', hideSearch);
    PatchLocalFileAnchor(anchorEl);
    PatchAjaxNavigationAnchor(anchorEl);
  });
  if (results.length > 0) {
    first = output.firstChild.firstElementChild;
    last = output.lastChild.firstElementChild;
  }
}

var inputText = document.querySelector('.SiteSearchForm > form > div > input[type="submit"]').value.split(' ')[0];
document.querySelector('.SiteSearchForm > form > div').remove();
document.querySelector('.SiteSearchForm').innerHTML = document.querySelector('.SiteSearchForm > form > input').outerHTML; //+ '<kbd class="gray absolute bottom-0 right-1" style="pointer-events:none; user-select:none;">CTRL+/</kbd>');

var inputEl = document.querySelector('.SiteSearchForm > input');
//inputEl.classList.add('bg-transparent', 'white');
inputEl.style.width = '10rem';
inputEl.placeholder = (inputText + '... 🔎️ [CTRL+/]');
inputEl.onclick = inputEl.oninput = inputEl.onchange = inputEl.onpaste = displaySearch;
inputEl.onkeydown = (function(event){
  if (event.key == "Enter") {
    event.preventDefault();
    displaySearch();
  }
});

}

init();
window.SiteInitOnLoad.push(init);

})();
