
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').addEventListener('click', onclick, false)
     
      function onclick () {
        var topic = document.getElementById("topic").value

        getArticles(topic)
        // changeTitles(topic)
      }
   }, false)

   async function getArticles(topic){

    let url = "https://newsapi.org/v2/top-headlines?q="+topic+"&apiKey=da7378db54bc4dc0b9ba66358988a2e1"
    let results = await fetch(url).then(response => response.json())
    console.log(results.articles)

    for(var i=1; i<=3; i++){
      document.getElementById("title"+i).innerHTML = results.articles[i].title.link(results.articles[i].url)
      document.getElementById("src"+i).innerHTML = results.articles[i].source.name
      document.getElementById("img"+i).src = results.articles[i].urlToImage
      document.getElementById("img"+i).width = "48"
      document.getElementById("img"+i).height = "48"
      document.getElementById("time"+i).innerHTML = convertTime(results.articles[i].publishedAt)
    }
   }

   function convertTime(timestamp){
     //2017-07-01T14:59:55.711Z
     const timeArray = timestamp.split("T")

     const date = timeArray[0].split("-")
     const month = date[1]
     const day = date[2]
     const year = date[0]

     const tim = timeArray[1].split(":")
     const hour = tim[0]
     const mins = tim[1]

     return month + " / " + day + " / " + year + " | " + hour+ " : " + mins


   }

  
   function changeTitles(topic){
    document.getElementById("title1").innerHTML = topic
    document.getElementById("title2").innerHTML = topic
    document.getElementById("title3").innerHTML = topic
   }