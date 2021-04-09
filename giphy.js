var randomwordURL=["https://random-word-api.herokuapp.com/word?number=1"]
var giphySearchURL="http://api.giphy.com/v1/gifs/search?api_key=iLHOOBz1jO8j9q58fDymftf0iVCq5Z2x&limit=5"

async function getGIF(){
    try{
        let randomword= await fetch(randomwordURL)
        let word= await randomword.json();
        document.getElementById("word").innerHTML=word;
        let gifSearch=await fetch(giphySearchURL+"&q="+word)
        let gifData=await gifSearch.json()
        return gifData
    }catch(error){
        alert(error)
    }
}
getGIF()
    .then(gifData=>
        {   gifData["data"].forEach(element => {
                let tag= document.createElement("img");
                let parent=document.getElementById("gifs")
                let imageURL=element["images"]["original"]["url"]
                tag.setAttribute("src",imageURL)
                parent.appendChild(tag)
            }
        )}
    )



   