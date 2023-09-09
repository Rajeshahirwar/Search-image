const accessKey = "CqOmQ5s_K9nSlyMjENXS19XQjTmneS00o1scAX5miEg"

const Searchform = document.getElementById("search-form");
const Searchbox = document.getElementById("search-box");
const SearchResult = document.getElementById("serch-result");
const Searchbtm = document.getElementById("show-more-btn");

// acces key    CqOmQ5s_K9nSlyMjENXS19XQjTmneS00o1scAX5miEg

let keyword = " ";
let page = 1;
async function searchImages(){
    keyword = Searchbox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}1&query=${keyword}&client_id=${accessKey}&per _page=12`;
    const response  = await fetch(url); 
    const data  = await response.json();
    const results = data.results;
    results.map((result)=>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
         
        imageLink.appendChild(image);
        SearchResult.appendChild(imageLink);
    })
    // console.log(Date);
}
Searchform.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImages();
})

showMoreBtn.addEventListener("click", ()=>{
    page++;
    searchImages();

})

