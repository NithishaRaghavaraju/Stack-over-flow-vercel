import $ from 'jquery';

export const Slide = () =>{
    $(document).ready(() => {
      $(".chat-btn").one("click", function () { $('.chat-box').slideToggle(1100); });
    })
  }
  
const openai_api_key = "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"
        
export const handleUserInput = async (prompt)=>{
           if(prompt.length==0){
              return alert("Don't enter Empty Questions")
           }
           var chat = document.querySelector(".chats");
           var input = $(".input-chat").val()
          let message1 = `<div class="my-chat"><p>${input}</p></div>`
         
          chat.insertAdjacentHTML('beforeend', message1)
          
          const params_ = { 
              model: "text-davinci-003",
              prompt: prompt,
              temperature: 0.9,
              max_tokens: 100,
              top_p: 1,
              frequency_penalty: 0,
              presence_penalty: 0,
              stop : ["."],
           };
          const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + String(openai_api_key)
            },
            body: JSON.stringify(params_)
          };
          const response = await fetch('https://api.openai.com/v1/completions', requestOptions);
          const data = await response.json();
          console.log(data)
          let message2 = `<div class="client-chat"><p id="ansprog">${data.choices[0].text.trim()}</p></div>`
          chat.insertAdjacentHTML('beforeend', message2)
        }
  

  