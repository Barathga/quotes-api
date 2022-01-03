    //container
    var div1 = document.createElement("div")
    div1.setAttribute("class","quote-container")
    div1.setAttribute("id","quote-container")
    document.body.append(div1)

    // div 1
    var div2 = document.createElement("div")
    div2.setAttribute("class","quote-text")
    div1.appendChild(div2)

    //i1
    var span = document.createElement("span")
    span.setAttribute("id","quote")
    div2.appendChild(span)

    //i2
    // var span = document.createElement("span")
    // span.setAttribute("id","author")
    // div2.appendChild(span)

    //span
    var div3 = document.createElement("div")
    div3.setAttribute("class","button-container")
    div1.appendChild(div3)

    //div3
    var button = document.createElement("button")
    button.setAttribute("id","new-quote")
    button.innerText="New Quote"
    div3.appendChild(button)
const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const newQuoteBtn = document.getElementById('new-quote')
let apiQuotes = []
function newQuote() 
{
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
  if (quote.text.length > 115) 
  {
    quoteText.classList.add('long-quote')
  }
   else 
  {
    quoteText.classList.remove('long-quote')
  } 
  quoteText.textContent = quote.text+"-"+ quote.author;
  
  div2.appendChild(span_2)
 

}
async function getQuotes()
 {
 ;
  const apiUrl = 'https://type.fit/api/quotes'
  try
   {
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()
    newQuote()
  } catch (error) {
    newQuote()
  }
}
newQuoteBtn.addEventListener('click', newQuote)
getQuotes()